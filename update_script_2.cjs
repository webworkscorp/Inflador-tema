const fs = require('fs');
let html = fs.readFileSync('NovaHogarCR_LandingPage_Estatica.html', 'utf8');

// 1. Remove Auto-play for product images
// The interval code is:
/*
    setInterval(() => {
      if (items.length > 0) {
        let idx = (currentIndex + 1) % items.length;
        updateGallery(idx);
      }
    }, 4000);
*/
html = html.replace(/setInterval\(\(\) => \{\s*if \(items\.length > 0\) \{\s*let idx = \(currentIndex \+ 1\) % items\.length;\s*updateGallery\(idx\);\s*\}\s*\}, 4000\);/g, '/* removed auto-pass */');


// 2. Update Accordion Content
// Content strings
const c_rendimiento = `<div class="pb-6 text-sm text-gray-800 leading-relaxed space-y-2 accordion-content"><div class="space-y-2"><div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Llanta de carro</span><span>8 min (vacía)</span></div><div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Llanta de bici</span><span>86 segundos</span></div><div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Presión máxima</span><span>150 PSI</span></div><div class="flex justify-between"><span class="font-bold">Precisión</span><span>±1 PS</span></div></div></div>`;

const c_bateria = `<div class="pb-6 text-sm text-gray-800 leading-relaxed space-y-2 accordion-content"><div class="space-y-2"><div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Capacidad</span><span>2000 mAh</span></div><div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Recargas de llanta por carga</span><span>Hasta 10</span></div><div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Llantas vacías completas</span><span>Hasta 2</span></div><div class="flex justify-between"><span class="font-bold">Carga</span><span>USB-C · ~3 horas</span></div></div></div>`;

const c_modos = `<div class="pb-6 text-sm text-gray-800 leading-relaxed space-y-3 accordion-content"><div class="space-y-3"><div class="grid grid-cols-2 gap-2 text-xs"><div class="bg-gray-50 p-2 rounded">🚗 Carro</div><div class="bg-gray-50 p-2 rounded">🏍️ Moto</div><div class="bg-gray-50 p-2 rounded">🚲 Bicicleta</div><div class="bg-gray-50 p-2 rounded">🛴 Scooter</div><div class="bg-gray-50 p-2 rounded">⚽ Balones</div><div class="bg-gray-50 p-2 rounded">🔧 Manual</div></div><p class="text-xs italic bg-primary text-white p-3 rounded-lg leading-tight shadow-md shadow-primary/10">Para automáticamente al llegar a la presión exacta que configurés. Sin adivinar.</p></div></div>`;

const c_especi = `<div class="pb-6 text-sm text-gray-800 leading-relaxed space-y-2 accordion-content"><div class="space-y-2"><div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Peso</span><span>490g</span></div><div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Dimensiones</span><span>123 × 75.5 × 45.8mm</span></div><div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Ruido</span><span>&lt; 80dB</span></div><div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Pantalla</span><span>LCD — presión + batería en tiempo real</span></div><div class="flex justify-between"><span class="font-bold">Extra</span><span>Linterna LED + modo SOS</span></div></div></div>`;

const c_envio = `<div class="pb-6 text-sm text-gray-800 leading-relaxed space-y-4 accordion-content"><div class="space-y-4"><div class="space-y-1"><p class="font-bold text-black text-sm uppercase">Envío Rápido</p><p class="text-gray-600">Procesamos tu pedido en 24-72 horas hábiles. Recibirás un número de seguimiento para monitorear tu paquete.</p></div><div class="space-y-1"><p class="font-bold text-black text-sm uppercase">Paga al Recibir</p><p class="text-gray-600">Ofrecemos la opción de pago contra entrega para tu total tranquilidad. Pagas cuando el transportista llega a tu puerta.</p></div><div class="space-y-1"><p class="font-bold text-black text-sm uppercase">Garantía de Devolución</p><p class="text-gray-600">Queremos que recibas tu producto en perfectas condiciones y listo para usarse desde el primer momento. Por eso, cada pedido es cuidadosamente revisado antes de ser enviado.<br><br>En caso de que tu producto presente algún daño o defecto al momento de recibirlo, nuestro equipo gestionará un cambio rápido, asegurando que obtengas exactamente lo que esperabas, sin complicaciones.</p></div></div></div>`;

// Split by the <button onclick="toggleAccordion(this)" 
const parts = html.split('</button>');
// Parts mapping:
// 1: RENDIMIENTO content. Ends right before the next accordion div starts (or the button)
// 2: BATERÍA 
// 3: MODOS
// 4: ESPECI
// 5: ENVIO 

if (parts.length >= 6) {
    parts[1] = parts[1].replace(/<div class="pb-6 text-sm text-gray-800 leading-relaxed[^>]*>[\s\S]*?(?=<div class="border-b border-border)/, c_rendimiento);
    parts[2] = parts[2].replace(/<div class="pb-6 text-sm text-gray-800 leading-relaxed[^>]*>[\s\S]*?(?=<div class="border-b border-border)/, c_bateria);
    parts[3] = parts[3].replace(/<div class="pb-6 text-sm text-gray-800 leading-relaxed[^>]*>[\s\S]*?(?=<div class="border-b border-border)/, c_modos);
    parts[4] = parts[4].replace(/<div class="pb-6 text-sm text-gray-800 leading-relaxed[^>]*>[\s\S]*?(?=<div class="border-b border-border)/, c_especi);
    // Since envíos might be the last accordion and not immediately followed by <div class="border-b, we use a safer bound to replace till end of accordion content scope
    parts[5] = parts[5].replace(/<div class="pb-6 text-sm text-gray-800 leading-relaxed[^>]*>[\s\S]*?(?=<\/div>\s*<\/div>\s*<\/div>\s*<div class="bg-gray-50)/, c_envio);

    html = parts.join('</button>');
}

fs.writeFileSync('NovaHogarCR_LandingPage_Estatica.html', html);
console.log("Completed second updates!");
