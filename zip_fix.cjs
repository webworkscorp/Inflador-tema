const { execSync } = require('child_process');
try {
  execSync('npx -y bestzip ../NovaHogar_Tema_Shopify.zip *', { cwd: './shopify_theme', stdio: 'inherit' });
} catch (e) {
  console.error(e);
}
