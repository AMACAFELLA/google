import { NextApiRequest, NextApiResponse } from 'next'

const CHANNEL_ID = 'UCpIAwW4Z_VJaJG0uvHEJUWw'
const API_KEY = process.env.YOUTUBE_API_KEY

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`
    )
    const data = await response.json()

    const videos = data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      uploadDate: new Date(item.snippet.publishedAt).toLocaleDateString(
        'en-US',
        {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }
      ),
    }))

    res.status(200).json(videos)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch videos' })
  }
}
