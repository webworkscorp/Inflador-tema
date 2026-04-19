const fs = require('fs');
const path = require('path');

function listDir(dir, indent = '') {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      console.log(`${indent}📁 ${file}/`);
      listDir(fullPath, indent + '  ');
    } else {
      console.log(`${indent}📄 ${file}`);
    }
  });
}

console.log('ESTRUCTURA DEL TEMA SHOPIFY:');
console.log('NovaHogar_Shopify_Definitivo.zip');
listDir('shopify_theme_final');
