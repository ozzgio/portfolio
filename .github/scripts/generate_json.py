#!/usr/bin/env python3
"""
Generate JSON files from Obsidian Markdown articles and books.
Outputs data/articles.json and data/books.json for the blog.
"""

import os
import re
import json
from pathlib import Path

# Try to use pyyaml if available, otherwise use simple parser
try:
    import yaml
    USE_YAML = True
except ImportError:
    USE_YAML = False

def parse_yaml_frontmatter(frontmatter_str):
    """Parse YAML frontmatter - uses pyyaml if available, otherwise simple parser."""
    if USE_YAML:
        try:
            return yaml.safe_load(frontmatter_str) or {}
        except yaml.YAMLError:
            pass
    
    # Fallback: Simple YAML parser (no external dependencies)
    data = {}
    current_key = None
    current_value = []
    in_list = False
    
    for line in frontmatter_str.split('\n'):
        line = line.strip()
        if not line:
            continue
        
        # Handle list items
        if line.startswith('- '):
            if current_key:
                if current_key not in data:
                    data[current_key] = []
                # Remove quotes if present
                value = line[2:].strip().strip("'\"")
                data[current_key].append(value)
            in_list = True
            continue
        elif in_list and not line.startswith('-'):
            in_list = False
        
        # Handle key-value pairs
        if ':' in line:
            if current_key and current_value:
                data[current_key] = ' '.join(current_value).strip().strip("'\"")
                current_value = []
            
            parts = line.split(':', 1)
            current_key = parts[0].strip()
            value = parts[1].strip() if len(parts) > 1 else ''
            
            if value:
                if value.startswith('[') and value.endswith(']'):
                    # Array format: tags: ['Tech', 'Rails']
                    value = value.strip('[]')
                    data[current_key] = [v.strip().strip("'\"") for v in value.split(',') if v.strip()]
                    current_key = None
                else:
                    data[current_key] = value.strip("'\"")
                    current_key = None
            else:
                current_value = []
        elif current_key:
            current_value.append(line)
    
    if current_key and current_value:
        data[current_key] = ' '.join(current_value).strip().strip("'\"")
    
    return data

def extract_frontmatter(content):
    """Extract YAML frontmatter from Markdown file."""
    frontmatter_pattern = r'^---\s*\n(.*?)\n---\s*\n(.*)$'
    match = re.match(frontmatter_pattern, content, re.DOTALL)
    
    if match:
        frontmatter_str = match.group(1)
        body = match.group(2)
        frontmatter = parse_yaml_frontmatter(frontmatter_str)
        return frontmatter, body
    return {}, content

def get_articles():
    """Collect all published articles from articles/YYYY/published/ folders."""
    articles = []
    articles_dir = Path('articles')
    
    if not articles_dir.exists():
        return articles
    
    # Find all published articles
    for year_dir in articles_dir.iterdir():
        if not year_dir.is_dir():
            continue
        
        published_dir = year_dir / 'published'
        if not published_dir.exists():
            continue
        
        for md_file in published_dir.glob('*.md'):
            try:
                content = md_file.read_text(encoding='utf-8')
                frontmatter, body = extract_frontmatter(content)
                
                # Only include if status is published (or if url exists)
                if frontmatter.get('status') == 'published' or frontmatter.get('url'):
                    article = {
                        'title': frontmatter.get('title', ''),
                        'date': frontmatter.get('date', ''),
                        'description': frontmatter.get('description', ''),
                        'url': frontmatter.get('url', ''),
                        'thumbnail': frontmatter.get('thumbnail', ''),
                        'tags': frontmatter.get('tags', []) if isinstance(frontmatter.get('tags'), list) else []
                    }
                    articles.append(article)
            except Exception as e:
                print(f"Error processing {md_file}: {e}")
                continue
    
    # Sort by date (newest first)
    articles.sort(key=lambda x: x.get('date', ''), reverse=True)
    return articles

def get_books():
    """Collect all books (placeholder for now)."""
    # TODO: Implement when books are migrated
    return []

def main():
    """Generate JSON files."""
    # Create data directory if it doesn't exist
    os.makedirs('data', exist_ok=True)
    
    # Generate articles.json
    articles = get_articles()
    with open('data/articles.json', 'w', encoding='utf-8') as f:
        json.dump(articles, f, ensure_ascii=False, indent=2)
    
    print(f"Generated data/articles.json with {len(articles)} articles")
    for article in articles:
        print(f"  - {article.get('title', 'Untitled')} ({article.get('date', 'no date')})")
    
    # Generate books.json
    books = get_books()
    with open('data/books.json', 'w', encoding='utf-8') as f:
        json.dump(books, f, ensure_ascii=False, indent=2)
    
    print(f"Generated data/books.json with {len(books)} books")

if __name__ == '__main__':
    main()

