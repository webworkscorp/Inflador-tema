const fs = require('fs');
let html = fs.readFileSync('NovaHogarCR_LandingPage_Estatica.html', 'utf8');

// Scroll jump fix
html = html.replace("items[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });", "track.scrollTo({ left: items[index].offsetLeft, behavior: 'smooth' });");

// Keyframes
const strKeyframes = `
  @keyframes myMarquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-1035px); }
  }
  .dynamic-marquee {
    animation: myMarquee 20s linear infinite;
    display: flex;
    white-space: nowrap;
    width: max-content;
  }
`;
html = html.replace('</style>', strKeyframes + '\n</style>');

// Replace class="whitespace-nowrap flex" with class="dynamic-marquee"
html = html.replace('class="whitespace-nowrap flex"', 'class="dynamic-marquee"');

const content1 = `<div class="pb-6 text-sm text-gray-800 leading-relaxed accordion-content"><div class="space-y-2"><div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Llanta de carro</span><span>8 min (vacía)</span></div><div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Llanta de bici</span><span>86 segundos</span></div><div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Presión máxima</span><span>150 PSI</span></div><div class="flex justify-between"><span class="font-bold">Precisión</span><span>±1 PSI</span></div></div></div>`;

const content2 = `<div class="pb-6 text-sm text-gray-800 leading-relaxed accordion-content"><div class="space-y-2"><div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Capacidad</span><span>2000 mAh</span></div><div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Recargas de llanta por carga</span><span>Hasta 10</span></div><div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Llantas vacías completas</span><span>Hasta 2</span></div><div class="flex justify-between"><span class="font-bold">Carga</span><span>USB-C · ~3 horas</span></div></div></div>`;

const content3 = `<div class="pb-6 text-sm text-gray-800 leading-relaxed accordion-content"><div class="space-y-3"><div class="grid grid-cols-2 gap-2 text-xs"><div class="bg-gray-50 p-2 rounded">🚗 Carro</div><div class="bg-gray-50 p-2 rounded">🏍️ Moto</div><div class="bg-gray-50 p-2 rounded">🚲 Bicicleta</div><div class="bg-gray-50 p-2 rounded">🛴 Scooter</div><div class="bg-gray-50 p-2 rounded">⚽ Balones</div><div class="bg-gray-50 p-2 rounded">🔧 Manual</div></div><p class="text-xs italic bg-primary text-white p-3 rounded-lg leading-tight shadow-md shadow-primary/10">Para automáticamente al llegar a la presión exacta que configurés. Sin adivinar.</p></div></div>`;

const content4 = `<div class="pb-6 text-sm text-gray-800 leading-relaxed accordion-content"><div class="space-y-2"><div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Peso</span><span>490g</span></div><div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Dimensiones</span><span>123 × 75.5 × 45.8mm</span></div><div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Ruido</span><span>&lt; 80dB</span></div><div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Pantalla</span><span>LCD — presión + batería en tiempo real</span></div><div class="flex justify-between"><span class="font-bold">Extra</span><span>Linterna LED + modo SOS</span></div></div></div>`;

const content5 = `<div class="pb-6 text-sm text-gray-800 leading-relaxed accordion-content"><div class="space-y-4"><div class="space-y-1"><p class="font-bold text-black text-sm uppercase">Envío Rápido</p><p class="text-gray-600">Procesamos tu pedido en 24-48 horas hábiles. Recibirás un número de seguimiento para monitorear tu paquete.</p></div><div class="space-y-1"><p class="font-bold text-black text-sm uppercase">Paga al Recibir</p><p class="text-gray-600">Ofrecemos la opción de pago contra entrega para tu total tranquilidad. Pagas cuando el transportista llega a tu puerta.</p></div><div class="space-y-1"><p class="font-bold text-black text-sm uppercase">Garantía de Devolución</p><p class="text-gray-600">Queremos que recibas tu producto en perfectas condiciones y listo para usarse desde el primer momento. Por eso, cada pedido es cuidadosamente revisado antes de ser enviado.<br /><br />En caso de que tu producto presente algún daño o defecto al momento de recibirlo, nuestro equipo gestionará un cambio rápido, asegurando que obtengas exactamente lo que esperabas, sin complicaciones.</p></div></div></div>`;

const parts = html.split('</button>');
// parts[0] ends with the RENDIMIENTO button
// parts[1] ends with the BATERIA button
// parts[2] ends with the MODOS DE INFLADO button
// parts[3] ends with the ESPECIFICACIONES button
// parts[4] ends with the ENVÍO Y DEVOLUCIONES button

if(parts.length >= 6) {
    // 1: RENDIMIENTO
    parts[1] = parts[1].replace(/<div class="pb-6 text-sm text-gray-800 leading-relaxed[^>]*>[\s\S]*?(?=<div class="border-b border-border)/, content1);
    
    // 2: BATERIA
    parts[2] = parts[2].replace(/<div class="pb-6 text-sm text-gray-800 leading-relaxed[^>]*>[\s\S]*?(?=<div class="border-b border-border)/, content2);
    
    // 3: MODOS DE INFLADO
    parts[3] = parts[3].replace(/<div class="pb-6 text-sm text-gray-800 leading-relaxed[^>]*>[\s\S]*?(?=<div class="border-b border-border)/, content3);
    
    // 4: ESPECIFICACIONES
    parts[4] = parts[4].replace(/<div class="pb-6 text-sm text-gray-800 leading-relaxed[^>]*>[\s\S]*?(?=<div class="border-b border-border)/, content4);
    
    // 5: ENVÍO Y DEVOLUCIONES
    parts[5] = parts[5].replace(/<div class="pb-6 text-sm text-gray-800 leading-relaxed[^>]*>[\s\S]*?(?=<\/div>\s*<\/div>\s*<\/div>\s*<div class="bg-gray-50)/, content5);
    
    html = parts.join('</button>');
}

fs.writeFileSync('NovaHogarCR_LandingPage_Estatica.html', html);
console.log("Updates applied successfully.");
