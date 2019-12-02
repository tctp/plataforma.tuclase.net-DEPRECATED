const withMDX = require('@zeit/next-mdx')({
  extension: /.mdx?$/
})

// /* eslint-disable */
const withCss = require('@zeit/next-css')

// // fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}
const isProd = process.env.NODE_ENV === 'production';
module.exports = withCss( withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  assetPrefix: isProd ? 'https://plataforma.tuclase.net/' : 'http://localhost:8080',
  exportTrailingSlash: true
}))