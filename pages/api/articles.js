import { Client } from '@notionhq/client'
import dotenv from 'dotenv';

dotenv.config();

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

function getRelativeDate(dateString) {
    const now = new Date()
    const then = new Date(dateString)
    const diff = Math.floor((now - then) / (1000 * 60 * 60 * 24))

    if (diff === 0) return 'Today'
    if (diff === 1) return 'Yesterday'
    return `${diff} days ago`
}

export default async function handler(_req, res) {
    const databaseId = process.env.NOTION_ARTICLES_DATABASE_ID

    try {
        const response = await notion.databases.query({
            database_id: databaseId
        })
        const articles = response.results.map((page, _index) => {
            const props = page.properties || {}
            const dateValue = props.Date?.date?.start || props.created_time;

            return {
                title: props.Title.title[0]?.text?.content || '',
                description: props.Description.rich_text[0]?.text?.content || '',
                url: props.url.url || '',
                date: dateValue,
                relativeDate: dateValue
                    ? getRelativeDate(dateValue)
                    : getRelativeDate(props.created_time),
                thumbnail: props.Thumbnail?.url || '',
                tags: props.Tags.multi_select.map(tag => tag.name) || []
            }
        })

        res.status(200).json(articles)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to fetch articles' })
    }
}
