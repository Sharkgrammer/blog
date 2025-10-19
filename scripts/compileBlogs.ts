import * as fs from 'fs';
import * as path from 'path';

const blogDir:string = path.join(process.cwd(), "data/blog");
const outputFile:string = path.join(process.cwd(), "public/data/blogs.json");

let allBlogs:{} = {
    "blogs":[],
    "tags":{}
};

const entries = fs.readdirSync(blogDir, { withFileTypes: true });

// id is only relevant for sorting through tag data later on
// otherwise slug is the actual identifier for the blog
// I figure searching for id is better than the slug strings
let id = 0

console.log("Starting to compile blogs")
for (const entry of entries) {

    if (entry.isDirectory() && entry.name.startsWith("blog")) {
        const metadataPath:string = path.join(blogDir, entry.name, "metadata.json");

        if (fs.existsSync(metadataPath)) {
            try {
                const data = JSON.parse(fs.readFileSync(metadataPath, "utf8"));

                let blog = {
                    "id": id++,
                    "name": data.name,
                    "slug": data.slug,
                    "tags": data.tags,
                    "date": data.date,
                }

                allBlogs["blogs"].push(blog)

                for (const tag of blog["tags"]) {

                    if (!allBlogs["tags"][tag]) {
                        allBlogs["tags"][tag] = [];
                    }

                    allBlogs["tags"][tag].push(blog["id"]);
                }

            } catch (err) {
                console.error(`Error reading ${metadataPath}:`, err.message);
            }
        }
    }
}

fs.writeFileSync(outputFile, JSON.stringify(allBlogs));
console.log("Blogs have been compiled successfully")