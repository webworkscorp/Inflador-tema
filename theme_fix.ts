import fs from "fs";
import path from "path";

const replacements = [
    // Backgrounds
    ['bg-[#18181b]/80', 'bg-white/80'],
    ['bg-[#09090b]', 'bg-white'],
    ['bg-[#121214]', 'bg-[#fcfcfc]'],
    ['bg-[#18181b]', 'bg-gray-50'],
    ['bg-[#27272a]', 'bg-gray-100'],
    
    // Primary accent / buttons
    ['hover:bg-[#e65c00]', 'hover:bg-black/80'],
    ['bg-[#ff6a00]/10', 'bg-black/5'],
    ['bg-[#ff6a00]', 'bg-black'],
    
    // Text colors
    ['text-zinc-50', 'text-black'],
    ['text-zinc-200', 'text-gray-800'],
    ['text-zinc-300', 'text-gray-600'],
    ['text-zinc-400', 'text-gray-500'],
    ['text-zinc-500', 'text-gray-400'],
    ['text-zinc-600', 'text-gray-300'],
    ['text-zinc-700', 'text-gray-200'],
    ['text-zinc-800', 'text-gray-100'],
    
    // Borders
    ['border-[#ff6a00]', 'border-black'],
    ['border-zinc-800', 'border-gray-100'],
    ['border-zinc-700', 'border-gray-200'],
    ['border-zinc-600', 'border-gray-300'],
    ['border-zinc-900', 'border-white'],
    
    // Fills
    ['fill-[#ff6a00]', 'fill-black'],
    ['fill-zinc-800', 'fill-gray-200'],
    
    ['hover:bg-zinc-800', 'hover:bg-gray-100']
];

function processDirectory(dir: string) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            
            for (const [oldVal, newVal] of replacements) {
                if (content.includes(oldVal)) {
                    content = content.split(oldVal).join(newVal);
                    modified = true;
                }
            }
            
            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDirectory(path.join(process.cwd(), 'src'));
