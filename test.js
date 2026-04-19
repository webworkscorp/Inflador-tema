const fs = require('fs');
const { JSDOM } = require('jsdom');

let html = fs.readFileSync('NovaHogarCR_LandingPage_Estatica.html', 'utf8');
const dom = new JSDOM(html, { runScripts: "dangerously" });

setTimeout(() => {
    console.log("Reviews found:", dom.window.document.querySelectorAll('.review-slide').length);
    console.log("Current active index:", dom.window.currentReview);
}, 6000); // Check after 6 seconds to see if setInterval ran
