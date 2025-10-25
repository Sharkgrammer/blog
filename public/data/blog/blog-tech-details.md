---
name: "Creating a dynamic static blog website"
desc: "Dynamic static sounds like a oxymoron but it's possible."
meta: ["second", "tech", "internals"]
date: "2025-10-25"
publish: true
---
# Creating a dynamic static blog website. 

I'm a big fan of the KISS principle, **Keep It Simple, Stupid**. Why overcomplicate something that doesn't need it? (Unless it's more fun that way that is.)

I decided I wanted to write a blog (and also write the blog itself) but I didn't want to mess with managing database software and backends. I did however want some of the benefits of having a backend such as search and filtering capabilities as well as an easy way to add and manage content.

In the past, I've used GitHub pages to host my personal projects. It only hosts static sites and has a few caveats but generally speaking it works brilliantly for most static projects. My [personal site](danielkeanekelly.com) uses it as a host as it's a static site itself. 

Following that, another project of mine [Lightweight GitHub Stats](https://github.com/Sharkgrammer/Lightweight-GitHub-Stats) uses a GitHub page to host it's generated stat image. It also uses GitHub actions to generate said stat image which was a lovely hands-free solution to the entire thing.

So, this post could instead be titled:

### Using GitHub pages and actions to avoid the need to use a backend

The idea is simple, copy the GitHub actions script that my personal website uses to build the static site after a new commit and somehow make it work for a blog. 

It needs to do all the basics of a blog but also remain a static website for hosting needs. 

The posts themselves are simple, if I don't want to handle design myself I can just use markdown. If its good enough for a README, it's good enough for me.

Markdown pages can also contain their own metadata which solves half of the problems here.
```
---
name: "Creating a dynamic static blog website"
meta: ["second", "tech", "internals"]
date: "2025-10-25"
---
# Creating a dynamic static blog website.
I'm a big fan of the KISS principle...
```
Even better, this metadata can be expanded later with little hassle. One file, one blog post, one application. 

Build the site at this point, and you could have a functional blog. A slow blog, as you'd need to search through each markdown file every time to find data, but you know, functional. 

So how do we make this actually efficient when there could be hundreds of posts down the road?

### Generating a JSON file as a simple datastore on build

>"Why waste time read many file when one file do trick" - Kevin Malone

With this approach, we still need to read the data of each file at least once. But why not do it all at once instead of when the blog is running?

The solution is a compile script that runs when the application is built. 

1. Access the folder that the blogs are in.
2. For each blog, save the metadata and ignore the rest.
3. Save this metadata to a JSON object under blogs.
4. For filtering, update another JSON object with each blog's tags.
5. Voilà the file is now ready to be queried.

```
{
  "blogs":
    [
      {"id":0,"name":"Creating a dynamic static blog website","date":"2025-10-25", ...},
      {"id":1,"name":"The importance of deadlines.","date":"2025-10-25", ...}
    ],
  "tags":{"tech":[0],"internals":[0],"talking":[0,1],"personal":[1]}
}
```

The final step is to actually get node to run the script on build. For simplicity with the build actions I use, adding the run call to the build step in package.json does the trick.

`node ./scripts/compileBlogs.js`

With that, and some other magic, the blog can now function. If it needs to search, it uses the JSON file. Filter? JSON file. 

The benefit of this approach is that the blog stays up to date each time I make a change to the GitHub repository that everything is stored on. I can even edit blog files on a mobile device and the compile steps ensure that everything runs smoothly.

### Future proofing

This blog only intends to write about one article a week. This approach will handle that well into the hundreds of articles before it becomes a problem (and by then I'll have improved the way the application treats itself). 

Every approach has its flaws, images are this approaches large one. Since everything is stored in a GitHub repository they need to be kept compressed to be fair and not hit space limitations. Hosting them separately and using a CDN service solves this but breaks the approach of keeping everything in one place.

I just like using GitHub pages and actions to achieve my goals. Keeping this blog simple has been a fun design to work and figure out how to stick with. 

