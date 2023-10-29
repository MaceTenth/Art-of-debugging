function getArticleDate() {
    // Using an array of known selectors
    const selectors = [
        "meta[itemprop='uploadDate']",
        "meta[name='date']",
        "meta[name='datePublished']",
        "meta[itemprop='datePublished']",
        "time[itemprop='datePublished']",
        "time",
        // ... add more selectors as you discover them
    ];

    for (let selector of selectors) {
        const element = document.querySelector(selector);

        if (element) {
            let dateString;

            if (element.getAttribute("content")) {
                dateString = element.getAttribute("content");
            }
            else if (element.dateTime) {
                dateString = element.dateTime;
            }

            if (dateString) {
                const isCorrectDate = new Date(dateString).toDateString() !== "Invalid Date";
                if (isCorrectDate) {
                    return new Date(dateString).getTime();
                }
                return new Date(dateString.replace(/-/g, "/")).getTime();
            }
        }
    }

    return null;
};

console.log(getArticleDate());
