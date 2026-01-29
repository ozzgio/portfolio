function generateRSSFeed(articles) {
  const siteUrl = 'https://ozzo.blog';
  const currentDate = new Date().toUTCString();

  const rssItems = articles
    .map((article) => {
      const pubDate = article.date ? new Date(article.date).toUTCString() : currentDate;
      const description = article.description
        ? `<description><![CDATA[${article.description}]]></description>`
        : '';
      const thumbnail = article.thumbnail
        ? `<media:thumbnail url="${article.thumbnail}" />`
        : '';

      return `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${article.url}</link>
      <guid isPermaLink="true">${article.url}</guid>
      <pubDate>${pubDate}</pubDate>
      ${description}
      ${thumbnail}
    </item>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Ozzo's Articles</title>
    <link>${siteUrl}</link>
    <description>Latest articles from Giorgio Ozzola - Full Stack Developer</description>
    <language>en-us</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;
}

export async function getServerSideProps({ res }) {
  try {
    // Fetch articles from GitHub
    const response = await fetch(
      'https://raw.githubusercontent.com/ozzgio/portfolio-data/main/articles.json'
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status}`);
    }

    const articlesData = await response.json();

    if (!Array.isArray(articlesData)) {
      throw new Error('Invalid JSON format: expected an array');
    }

    // Process articles
    const articles = articlesData
      .filter((article) => article && article.title && article.url && article.date)
      .map((article) => ({
        title: String(article.title || ''),
        description: String(article.description || ''),
        url: String(article.url || ''),
        date: article.date || '',
        thumbnail: article.thumbnail || '',
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 20); // Limit to 20 most recent articles

    const rssFeed = generateRSSFeed(articles);

    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=300');
    res.write(rssFeed);
    res.end();

    return { props: {} };
  } catch (error) {
    console.error('Failed to generate RSS feed:', error);
    res.statusCode = 500;
    res.end();
    return { props: {} };
  }
}

export default function RSSFeed() {
  return null;
}
