const AdmZip = require('adm-zip');
const zip = new AdmZip('Theme_Shopify_Final_Fix.zip');
const zipEntries = zip.getEntries();
console.log('Validating ZIP contents:');
zipEntries.forEach(zipEntry => {
    console.log(zipEntry.entryName);
});
