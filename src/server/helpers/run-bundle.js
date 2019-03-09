const path = require('path')
const Bundler = require('parcel-bundler')
const entryFiles = path.join('src/index.html')
const isProd = require('src/server/helpers/is-prod')

// Bundler options
const options = {
    outDir: process.env.ASSET_DIR || 'public', // The out directory to put the build files in, defaults to dist
    outFile: 'index.html', // The name of the outputFile
    cacheDir: '.cache', // The directory cache gets put in, defaults to .cache
    detailedReport: true, // Prints a detailed report of the bundles, assets, filesizes and times, defaults to false, reports are only printed if watch is disabled
    minify: false,
    hmr: true,
    logLevel: 1 // only errors
}

if (isProd()) {
    options.detailedReport = false;
    options.minify = true;
    options.hmr = false;
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