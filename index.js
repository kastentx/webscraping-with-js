const scrapeIt = require('scrape-it');


// easy intro example

/*
scrapeIt("https://nocodewebscraping.com/top-10-web-scraping-books/", {
  titles: "h3"
}).then(page => {
  const newList = page.titles.replace(/\d+./g, '\n');
  console.log(newList);
});
*/

// playoverwatch.com example

scrapeIt("https://playoverwatch.com/en-us/career/pc/us/NILBOG-1950", {
  qpHeroes: {
    listItem: "#quickplay .progress-category.is-active>.progress-category-item",
    data: {
      name: {
        selector: ".title"
      },
      playtime: {
        selector: ".description"
      }
    }
  },
  compHeroes: {
    listItem: "#competitive .progress-category.is-active>.progress-category-item",
    data: {
      name: {
        selector: ".title"
      },
      playtime: {
        selector: ".description"
      }
    }
  }
}).then(page => {
  // const newList = page.titles.replace(/\d+./g, '\n');
   console.log(page);

});


