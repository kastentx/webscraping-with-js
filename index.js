const scrapeIt = require('scrape-it');

scrapeIt("https://nocodewebscraping.com/top-10-web-scraping-books/", {
    titles: "h3"
}).then(page => {
    const newList = page.titles.replace(/\d+./g, '\n');
    console.log(newList);
});
