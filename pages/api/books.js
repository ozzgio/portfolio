import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const databaseId = process.env.NOTION_BOOKS_DATABASE_ID

export default async function handler(_req, res) {
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            sorts: [{ property: 'Rating', direction: 'descending' }]
        })

        const books = response.results.map((page) => {
            const props = page.properties
            return {
                title: props.Title?.title[0]?.plain_text || '',
                author: props.Author?.rich_text?.[0]?.plain_text || '',
                rating: props.Rating?.select?.name || '',
                tags: props.Tags?.multi_select?.map(tag => tag.name) || [],
                cover: props.Cover?.url || '',
                lesson: props.Lesson?.rich_text?.[0]?.plain_text || '',
                link: props.Link?.url || '',
                date: props.Finished?.date?.start || ''
            }
        })

        res.status(200).json(books)
    } catch (err) {
        console.error('Error fetching books:', err)
        res.status(500).json({ error: 'Failed to fetch books' })
    }
}
