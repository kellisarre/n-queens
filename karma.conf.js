const ChromiumRevision = require("puppeteer/package.json").puppeteer
  .chromium_revision;
const Downloader = require("puppeteer/utils/ChromiumDownloader");
const revisionInfo = Downloader.revisionInfo(
  Downloader.currentPlatform(),
  ChromiumRevision
);

process.env.CHROME_BIN = revisionInfo.executablePath;

module.exports = function(config) {
  config.set({
    frameworks: ["chai", "mocha", "sinon", "jquery-1.8.3"],
    files: [
      { pattern: "karmaTest.html", included: true, served: true },
      { pattern: "src/**/*.js", included: true, served: true },
      { pattern: "spec/**/*.js", included: true, served: true },
      { pattern: "lib/underscore.js", included: false, served: true },
      { pattern: "lib/backbone.js", included: false, served: true }
    ],
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ["ChromeHeadless"],
    autoWatch: false,
    concurrency: Infinity
  });
};
