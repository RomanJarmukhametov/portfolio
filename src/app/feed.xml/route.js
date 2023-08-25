// Importing required modules
import assert from 'assert'
import * as cheerio from 'cheerio' // For parsing and manipulating HTML
import { Feed } from 'feed' // For generating RSS feed

export async function GET(req) {
  // Retrieving the base URL for the site from environment variables
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  // If the site URL isn't set, throw an error
  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  // Default author data for the feed
  let author = {
    name: 'Spencer Sharp',
    email: 'spencer@planetaria.tech',
  }

  // Initializing the feed with basic meta information
  let feed = new Feed({
    title: author.name,
    description: 'Your blog description',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  // Retrieve all the articles ids by reading `page.mdx` files from the articles folder
  let articleIds = require
    .context('../articles', true, /\/page\.mdx$/)
    .keys()
    .filter((key) => key.startsWith('./'))
    .map((key) => key.slice(2).replace(/\/page\.mdx$/, ''))

  // Iterate over each article to add them to the RSS feed
  for (let id of articleIds) {
    let url = String(new URL(`/articles/${id}`, req.url))
    let html = await (await fetch(url)).text() // Fetch the article content
    let $ = cheerio.load(html) // Load the content into Cheerio for parsing

    let publicUrl = `${siteUrl}/articles/${id}`
    let article = $('article').first()
    let title = article.find('h1').first().text() // Extract the article title
    let date = article.find('time').first().attr('datetime') // Extract the article publication date
    let content = article.find('[data-mdx-content]').first().html() // Extract the article content

    // Ensuring all extracted information are of string type
    assert(typeof title === 'string')
    assert(typeof date === 'string')
    assert(typeof content === 'string')

    // Add the extracted article details to the RSS feed
    feed.addItem({
      title,
      id: publicUrl,
      link: publicUrl,
      content,
      author: [author],
      contributor: [author],
      date: new Date(date),
    })
  }

  // Return the generated RSS feed as a response
  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952', // Cache for a year
    },
  })
}
