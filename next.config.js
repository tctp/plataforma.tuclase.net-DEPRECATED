const withMDX = require('@zeit/next-mdx')({
  extension: /.mdx?$/
})

// /* eslint-disable */
const withCss = require('@zeit/next-css')

// // fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

module.exports = withCss( withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
}))