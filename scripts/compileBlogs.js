import * as fs from 'fs';
import * as path from 'path';
import fm from 'front-matter';

const corePath = path.join(process.cwd(), "public/data/")
const blogDir = path.join(corePath, "blog");
const outputFile = path.join(corePath, "blogs.json");

let allBlogs = {
    "blogs": [],
    "tags": {}
};

const files = fs.readdirSync(blogDir, {withFileTypes: true});

// id is only relevant for sorting through tag data later on
// otherwise slug is the actual identifier for the blog
// I figure searching for id is better than the slug strings
let id = 0

console.log("Starting to compile blogs")
for (const file of files) {
    if (file.isFile()) {
        try {
            const data = fm(fs.readFileSync(path.join(blogDir, file.name), "utf8")).attributes;
            let slug = file.name.replace(".md", "");

            if (!data.publish){
                continue
            }

            let blog = {
                "id": id++,
                "name": data.name,
                "desc": data.desc,
                "slug": slug,
                "tags": data.meta,
                "date": data.date
            }

            allBlogs["blogs"].push(blog)

            for (const tag of blog["tags"]) {

                if (!allBlogs["tags"][tag]) {
                    allBlogs["tags"][tag] = [];
                }

                allBlogs["tags"][tag].push(blog["id"]);
            }

        } catch (err) {
            console.error(`Error reading ${file.name}:`, err.message);
        }
    }
}

fs.writeFileSync(outputFile, JSON.stringify(allBlogs));
console.log("Blogs have been compiled successfully")