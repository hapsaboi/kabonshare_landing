/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Was output:'export'. A fully static build bakes the blog in at build time,
  // so publishing a post changed nothing until someone ran a build and copied
  // out/ by hand — a developer in the loop for every edit.
  //
  // Running as a Node app with ISR still serves pre-rendered HTML from cache;
  // pages simply re-render on a timer instead of only at deploy. The blog
  // updates on its own, and image optimisation works again (export forced
  // unoptimized).
  trailingSlash: true,
}

module.exports = nextConfig
