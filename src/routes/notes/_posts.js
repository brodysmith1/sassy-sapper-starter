const fs = require('fs')
const marked  = require('marked')
const fmatter = require('front-matter')

const route = './src/routes/notes/posts/'
const files = fs.readdirSync( route )
if (!files) console.error('Unable to scan directory: ' + route )

var content,
		details

const posts = 
	files.map( file => {
		content = fs.readFileSync( route + file, { encoding: 'utf8' } )
		details = fmatter(content)
		return {
			title: details.attributes.title,
			slug: details.attributes.slug,
			date: details.attributes.date,
			summary: details.attributes.summary,
			html: marked(details.body)
		}
	})
	
posts.forEach(p => p.html = p.html.replace(/^\t{3}/gm, '') )

export default posts
