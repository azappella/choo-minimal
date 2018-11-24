const path = require('path')
const Bundler = require('parcel-bundler')
const entryFiles = path.join(__dirname, '../../../public/index.html')
// const renderHtml = require('../render')

// Bundler options
const options = {
  outDir: './build', // The out directory to put the build files in, defaults to dist
  outFile: 'index.html', // The name of the outputFile
  cacheDir: './.cache', // The directory cache gets put in, defaults to .cache
  detailedReport: false, // Prints a detailed report of the bundles, assets, filesizes and times, defaults to false, reports are only printed if watch is disabled
  minify: true,
  hmr: false,
  logLevel: 1
}

async function runBundle() {
  try {
    // Initializes a bundler using the entrypoint location and options provided
    const bundler = new Bundler(entryFiles, options)
    // Run the bundler, this returns the main bundle
    // Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
    const bundle = await bundler.bundle()

    return bundle
  } catch(e) {
    console.log(e)
  }
}

module.exports = runBundle