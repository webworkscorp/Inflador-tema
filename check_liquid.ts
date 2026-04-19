import fs from 'fs';

const html = fs.readFileSync('NovaHogarCR_LandingPage.html', 'utf-8');
const doubleOpen = html.match(/\{\{/g) || [];
const doubleClose = html.match(/\}\}/g) || [];
console.log(`Found {{ : ${doubleOpen.length}`);
console.log(`Found }} : ${doubleClose.length}`);
