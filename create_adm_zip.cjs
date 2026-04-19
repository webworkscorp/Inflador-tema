const AdmZip = require('adm-zip');
const path = require('path');
const fs = require('fs');

const zip = new AdmZip();
const themeDir = path.join(__dirname, 'shopify_theme_final');

// Add all folders inside shopify_theme_final to the root of the ZIP
const folders = fs.readdirSync(themeDir);
folders.forEach(folder => {
  const folderPath = path.join(themeDir, folder);
  if (fs.statSync(folderPath).isDirectory()) {
    zip.addLocalFolder(folderPath, folder);
  } else {
    zip.addLocalFile(folderPath);
  }
});

zip.writeZip(path.join(__dirname, 'Theme_Shopify_Final_Fix.zip'));
console.log('ZIP created correctly with adm-zip. No parent directories.');
