const esbuild = require('esbuild');

async function buildSingleFile() {
  const result = await esbuild.build({
    entryPoints: ['src/main.tsx'],
    bundle: true,
    minify: true,
    format: 'iife',
    platform: 'browser',
    outfile: 'bundle.js',
    external: ['*.css'], // Do not bundle CSS here
    define: {
      'process.env.NODE_ENV': '"production"'
    }
  });
  console.log('ESBuild bundled React successfully');
}

buildSingleFile().catch(console.error);
