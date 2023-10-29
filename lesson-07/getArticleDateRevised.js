function getArticleDate() {
  // Using an array of known selectors
  const selectors = [
    "meta[itemprop='uploadDate']",
    "meta[name='date']",
    "meta[name='datePublished']",
    "meta[itemprop='datePublished']",
    "*[property='v:published']",
    "*[property='v:published']",
    "*[property*='video:published']",
    "*[property*='og:updated_time']",
    "time[itemprop='datePublished']",
    "meta[property*='published_time']",
    "time",
    // ... add more selectors as you discover them
  ];

  function extractDate(dateString) {
    const isCorrectDate =
      new Date(dateString).toDateString() !== "Invalid Date";
    if (isCorrectDate) {
      return new Date(dateString).getTime();
    }
    return new Date(dateString.replace(/-/g, "/")).getTime();
  }

  for (let selector of selectors) {
    const element = document.querySelector(selector);

    if (element) {
      let dateString;

      if (element.getAttribute("content")) {
        dateString = element.getAttribute("content");
      } else if (element.dateTime) {
        dateString = element.dateTime;
      }

      if (dateString) {
        return extractDate(dateString);
      }
    }
  }

  // Try getting the date from __NEXT_DATA__ global object
  if (
    window.__NEXT_DATA__ &&
    window.__NEXT_DATA__.props &&
    window.__NEXT_DATA__.props.pageProps
  ) {
    const nextData = window.__NEXT_DATA__.props.pageProps;
    // You'll need to know the property name where the date is stored in the __NEXT_DATA__ object.
    // For this example, I'm assuming a 'date' property.
    if (nextData.date) {
      return extractDate(nextData.date);
    }
  }

  // use this only if there is no possible way to get the date
  if (document.lastModified) {
    return extractDate(document.lastModified);
  }

  return null;
}

console.log(getArticleDate());
