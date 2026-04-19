const fs = require('fs');

const js = fs.readFileSync('bundle.js', 'utf8');
const css = fs.readFileSync('bundle.css', 'utf8');

const htmlTemplate = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NovaHogarCR</title>
    <style>
        ${css}
    </style>
</head>
<body>
    <div id="root"></div>
    <script>
        ${js}
    </script>
</body>
</html>`;

fs.writeFileSync('NovaHogarCR_LandingPage_Estatica.html', htmlTemplate);
console.log('Single static HTML generated successfully.');
