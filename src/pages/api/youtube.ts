import { NextApiRequest, NextApiResponse } from 'next'

const CHANNEL_ID = 'UCpIAwW4Z_VJaJG0uvHEJUWw'
const API_KEY = process.env.YOUTUBE_API_KEY

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50&type=video`
    )
    const data = await response.json()

    const videos = data.items
      .filter((item: any) => {
        // Filter out items that don't have proper video IDs or are broken
        return (
          item.id && 
          item.id.videoId && 
          item.snippet && 
          item.snippet.title && 
          item.snippet.description !== undefined &&
          item.snippet.publishedAt &&
          // Filter out the specific broken video by checking for empty or invalid video IDs
          item.id.videoId.length > 5 &&
          // Additional check to ensure we have valid thumbnails
          item.snippet.thumbnails &&
          item.snippet.thumbnails.default
        )
      })
      .map((item: any) => ({
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
    console.error('YouTube API Error:', error)
    res.status(500).json({ error: 'Failed to fetch videos' })
  }
}
