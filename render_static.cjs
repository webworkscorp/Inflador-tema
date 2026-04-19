const fs = require('fs');
const path = require('path');
const { render } = require('./dist/server/entry-server.js');

let html = '';
try {
  html = render();
  console.log("Rendered HTML length:", html.length);
} catch (e) {
  console.error("SSR failed:", e);
}

fs.writeFileSync('rendered_app.html', html);
