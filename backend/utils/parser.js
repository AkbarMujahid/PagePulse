const cheerio = require("cheerio");

function parseHTML(html) {

    const $ = cheerio.load(html);

    const title = $("title").text().trim();

    const metaDescription =
  $('meta[name="description"]').attr("content") ||
  $('meta[name="Description"]').attr("content") ||
  $('meta[property="og:description"]').attr("content") ||
  $('meta[name="twitter:description"]').attr("content") ||
  "Not Found";

    const h1Count = $("h1").length;

    const imagesMissingAlt = $("img:not([alt])").length;

    const bodyText = $("body").text().replace(/\s+/g, " ").trim();

    const wordCount = bodyText
        ? bodyText.split(" ").length
        : 0;

    return {
        title,
        metaDescription,
        h1Count,
        imagesMissingAlt,
        wordCount
    };

}

module.exports = parseHTML;