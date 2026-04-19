const fs = require('fs');

let html = fs.readFileSync('rendered_app.html', 'utf8');
let tailwindCss = fs.readFileSync('bundle.css', 'utf8');

// The HTML output corresponds to Accordion items, but lacks the children.
// Let's inject them directly.

const accordions = [
  `<button class="w-full flex items-center justify-between py-5 text-left focus:outline-none"><div class="flex items-center gap-3"><div class="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gauge w-5 h-5" aria-hidden="true"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg></div><span class="text-base font-bold uppercase tracking-wider font-display">RENDIMIENTO</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-5 h-5 transition-transform duration-300" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button>`,
  `<button class="w-full flex items-center justify-between py-5 text-left focus:outline-none"><div class="flex items-center gap-3"><div class="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-battery w-5 h-5" aria-hidden="true"><path d="M 22 14 L 22 10"></path><rect x="2" y="6" width="16" height="12" rx="2"></rect></svg></div><span class="text-base font-bold uppercase tracking-wider font-display">BATERÍA</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-5 h-5 transition-transform duration-300" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button>`,
  `<button class="w-full flex items-center justify-between py-5 text-left focus:outline-none"><div class="flex items-center gap-3"><div class="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings2 lucide-settings-2 w-5 h-5" aria-hidden="true"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg></div><span class="text-base font-bold uppercase tracking-wider font-display">MODOS DE INFLADO</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-5 h-5 transition-transform duration-300" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button>`,
  `<button class="w-full flex items-center justify-between py-5 text-left focus:outline-none"><div class="flex items-center gap-3"><div class="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-list w-5 h-5" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg></div><span class="text-base font-bold uppercase tracking-wider font-display">ESPECIFICACIONES</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-5 h-5 transition-transform duration-300" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button>`,
  `<button class="w-full flex items-center justify-between py-5 text-left focus:outline-none"><div class="flex items-center gap-3"><div class="text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck w-5 h-5" aria-hidden="true"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg></div><span class="text-base font-bold uppercase tracking-wider font-display">ENVÍO Y DEVOLUCIONES</span></div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-5 h-5 transition-transform duration-300" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button>`
];

const bodies = [
  `<div class="pb-6 text-sm text-gray-800 leading-relaxed space-y-2 accordion-content hidden">
    <div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Llanta de carro</span><span>8 min (vacía)</span></div>
    <div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Llanta de bici</span><span>86 segundos</span></div>
    <div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Presión máxima</span><span>150 PSI</span></div>
    <div class="flex justify-between"><span class="font-bold">Precisión</span><span>±1 PSI</span></div>
  </div>`,
  `<div class="pb-6 text-sm text-gray-800 leading-relaxed space-y-2 accordion-content hidden">
    <div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Capacidad</span><span>2000 mAh</span></div>
    <div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Recargas de llanta por carga</span><span>Hasta 10</span></div>
    <div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Llantas vacías completas</span><span>Hasta 2</span></div>
    <div class="flex justify-between"><span class="font-bold">Carga</span><span>USB-C · ~3 horas</span></div>
  </div>`,
  `<div class="pb-6 text-sm text-gray-800 leading-relaxed space-y-3 accordion-content hidden">
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-gray-50 p-2 rounded">🚗 Carro</div><div class="bg-gray-50 p-2 rounded">🏍️ Moto</div>
      <div class="bg-gray-50 p-2 rounded">🚲 Bicicleta</div><div class="bg-gray-50 p-2 rounded">🛴 Scooter</div>
      <div class="bg-gray-50 p-2 rounded">⚽ Balones</div><div class="bg-gray-50 p-2 rounded">⚙️ Libre</div>
    </div>
  </div>`,
  `<div class="pb-6 text-sm text-gray-800 leading-relaxed space-y-2 accordion-content hidden">
    <div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Peso</span><span>480g</span></div>
    <div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Dimensiones</span><span>13.5 x 8 x 4.5 cm</span></div>
    <div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Linterna LED</span><span>Integrada (Blanco/SOS)</span></div>
    <div class="flex justify-between border-b border-gray-100 pb-1"><span class="font-bold">Pantalla</span><span>Digital Dual LED</span></div>
    <div class="flex justify-between"><span class="font-bold">Ruido</span><span>&lt; 80dB a 1m</span></div>
  </div>`,
  `<div class="pb-6 text-sm text-gray-800 leading-relaxed space-y-4 accordion-content hidden">
    <div class="flex gap-3"><div class="text-primary mt-0.5">🚚</div><div><span class="font-bold block">Envío Gratis Hoy</span><span>Enviamos a todo Costa Rica. Recibes en 24-48 horas hábiles.</span></div></div>
    <div class="flex gap-3"><div class="text-primary mt-0.5">💵</div><div><span class="font-bold block">Paga Segura</span><span>Pagas en efectivo o sinpe cuando tienes el producto en tus manos.</span></div></div>
    <div class="flex gap-3"><div class="text-primary mt-0.5">🛡️</div><div><span class="font-bold block">Garantía de Satisfacción</span><span>Si llega con defectos de fábrica, tienes 30 días para cambio rápido.</span></div></div>
  </div>`
];

for (let i = 0; i < accordions.length; i++) {
  // modify accordion button to add a class for querySelection
  let buttonWithClass = accordions[i].replace('<button', '<button onclick="toggleAccordion(this)"');
  html = html.replace(accordions[i], buttonWithClass + bodies[i]);
}

// Add the vanilla JS script and styling
const styleAndScript = `
<style>
  ${tailwindCss}
  .accordion-content { overflow: hidden; transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out; max-height: 0; opacity: 0; }
  .accordion-content.open { max-height: 500px; opacity: 1; }
  .review-slide { display: none; opacity: 0; transition: opacity 0.4s; }
  .review-slide.active { display: flex; opacity: 1; }
  /* Ensure gallery can be swiped using native scroll snap */
  #slider-track { overflow-x: auto; scroll-snap-type: x mandatory; scroll-behavior: smooth; }
  #slider-track > div { scroll-snap-align: center; width: 100%; flex-shrink: 0; }
  
  .h-18 { height: 4.5rem; }
</style>
<script>
  function toggleAccordion(btn) {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('svg.lucide-chevron-down');
    if (content.classList.contains('open')) {
      content.classList.remove('open');
      icon.style.transform = 'rotate(0deg)';
    } else {
      content.classList.add('open');
      icon.style.transform = 'rotate(180deg)';
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Gallery Logic
    const track = document.getElementById('slider-track');
    let currentIndex = 0;
    const items = track.children;
    const thumbnails = document.querySelectorAll('.gallery-thumb');

    function updateGallery(index) {
      if (!items[index]) return;
      items[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      thumbnails.forEach((t, i) => {
        if (i === index) {
          t.classList.remove('border-transparent');
          t.classList.add('border-black');
        } else {
          t.classList.remove('border-black');
          t.classList.add('border-transparent');
        }
      });
      currentIndex = index;
    }

    document.getElementById('prevSlide').addEventListener('click', () => {
      let idx = (currentIndex - 1 + items.length) % items.length;
      updateGallery(idx);
    });
    document.getElementById('nextSlide').addEventListener('click', () => {
      let idx = (currentIndex + 1) % items.length;
      updateGallery(idx);
    });

    thumbnails.forEach((thumb, i) => {
      thumb.addEventListener('click', () => updateGallery(i));
    });
    
    track.addEventListener('scroll', () => {
      let activeIndex = Math.round(track.scrollLeft / track.clientWidth);
      if (activeIndex !== currentIndex) {
        currentIndex = activeIndex;
        thumbnails.forEach((t, i) => {
          if (i === currentIndex) {
            t.classList.remove('border-transparent');
            t.classList.add('border-black');
          } else {
            t.classList.remove('border-black');
            t.classList.add('border-transparent');
          }
        });
      }
    });

    // Reviews Logic
    const reviews = document.querySelectorAll('.review-slide');
    const dots = document.querySelectorAll('.review-dot');
    const prevReviewBtn = document.getElementById('prevReview');
    const nextReviewBtn = document.getElementById('nextReview');
    let currentReview = 0;

    function showReview(index) {
      reviews.forEach((r, i) => {
        if (i === index) {
          r.classList.add('active');
          if (dots[i]) {
            dots[i].classList.add('bg-primary', 'w-3');
            dots[i].classList.remove('bg-gray-300');
          }
        } else {
          r.classList.remove('active');
          if (dots[i]) {
            dots[i].classList.remove('bg-primary', 'w-3');
            dots[i].classList.add('bg-gray-300');
          }
        }
      });
      currentReview = index;
    }
    
    if (prevReviewBtn) prevReviewBtn.addEventListener('click', () => {
      let idx = (currentReview - 1 + reviews.length) % reviews.length;
      showReview(idx);
    });
    if (nextReviewBtn) nextReviewBtn.addEventListener('click', () => {
      let idx = (currentReview + 1) % reviews.length;
      showReview(idx);
    });

    setInterval(() => {
      let idx = (currentReview + 1) % reviews.length;
      showReview(idx);
    }, 5000);

    // Quantity Logic
    const qtyText = document.getElementById('qtyText');
    document.getElementById('decreaseQty').addEventListener('click', () => {
      let val = parseInt(qtyText.innerText);
      if (val > 1) qtyText.innerText = val - 1;
    });
    document.getElementById('increaseQty').addEventListener('click', () => {
      let val = parseInt(qtyText.innerText);
      if (val < 10) qtyText.innerText = val + 1;
    });

    // Countdown logic
    const ms = document.getElementById('cd-m');
    const ss = document.getElementById('cd-s');
    let time = 30 * 60; // 30 minutes in seconds
    setInterval(() => {
      if (time > 0) time--;
      let m = Math.floor(time / 60);
      let s = time % 60;
      if(ms) ms.innerText = m.toString().padStart(2, '0');
      if(ss) ss.innerText = s.toString().padStart(2, '0');
    }, 1000);
  });
</script>
`;

// Let's modify the html so the gallery has IDs
html = html.replace('class="flex gap-2 px-4 mt-4 overflow-x-auto pb-2 no-scrollbar"', 'class="flex gap-2 px-4 mt-4 overflow-x-auto pb-2 no-scrollbar" id="thumbnails-container"');
html = html.replace(/<button class="relative flex-shrink-0/g, '<button class="gallery-thumb relative flex-shrink-0');

html = html.replace('class="flex h-full" draggable="false" tabindex="0" style="cursor:grab;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;touch-action:pan-y"', 'id="slider-track" class="flex h-full" draggable="false" tabindex="0" style="-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;touch-action:pan-y"');

html = html.replace('<button class="absolute left-4 top-1/2', '<button id="prevSlide" class="absolute left-4 top-1/2');
html = html.replace('<button class="absolute right-4 top-1/2', '<button id="nextSlide" class="absolute right-4 top-1/2');

// Fix Quantity logic IDs
html = html.replace('<span class="font-medium text-xl">1</span>', '<span id="qtyText" class="font-medium text-xl">1</span>');
html = html.replace('<button class="p-2 hover:bg-gray-50 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus w-5 h-5" aria-hidden="true">', '<button id="decreaseQty" class="p-2 hover:bg-gray-50 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus w-5 h-5" aria-hidden="true">');
html = html.replace('<button class="p-2 hover:bg-gray-50 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-5 h-5" aria-hidden="true">', '<button id="increaseQty" class="p-2 hover:bg-gray-50 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-5 h-5" aria-hidden="true">');

// Fix countdown timer
html = html.replace('<span class="text-white text-xl font-black tabular-nums">01</span><span class="text-white text-xl font-black">:</span><span class="text-white text-xl font-black tabular-nums">30</span><span class="text-white text-xl font-black">:</span><span class="text-white text-xl font-black tabular-nums">00</span>', '<span class="text-white text-xl font-black tabular-nums">01</span><span class="text-white text-xl font-black">:</span><span id="cd-m" class="text-white text-xl font-black tabular-nums">30</span><span class="text-white text-xl font-black">:</span><span id="cd-s" class="text-white text-xl font-black tabular-nums">00</span>');

// Replace the single review with all reviews manually injected!
const allReviews = `
<div class="review-slide active flex flex-col items-center text-center space-y-3">
  <div class="flex gap-0.5">
    <svg class="lucide lucide-star w-4 h-4 fill-primary text-primary" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
    <svg class="lucide lucide-star w-4 h-4 fill-primary text-primary" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
    <svg class="lucide lucide-star w-4 h-4 fill-primary text-primary" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
    <svg class="lucide lucide-star w-4 h-4 fill-primary text-primary" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
    <svg class="lucide lucide-star w-4 h-4 fill-primary text-primary" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
  </div>
  <p class="text-sm italic leading-relaxed text-primary px-4">"Lo compré por si acaso y ya lo he usado 3 veces. La semana pasada se me ponchó una llanta a las 11 de la noche y en 5 minutos estaba inflada. Vale cada centavo"</p>
  <div class="flex flex-col"><span class="text-xs font-bold uppercase tracking-wider font-display">marcos t</span><span class="text-[10px] text-secondary">Hace 2 días</span></div>
</div>
<div class="review-slide flex flex-col items-center text-center space-y-3">
  <div class="flex gap-0.5">
    <svg class="lucide lucide-star w-4 h-4 fill-primary text-primary" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
    <svg class="lucide lucide-star w-4 h-4 fill-primary text-primary" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
    <svg class="lucide lucide-star w-4 h-4 fill-primary text-primary" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
    <svg class="lucide lucide-star w-4 h-4 fill-primary text-primary" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
    <svg class="lucide lucide-star w-4 h-4 fill-primary text-primary" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
  </div>
  <p class="text-sm italic leading-relaxed text-primary px-4">"Yo pensé que era un juguete por lo pequeño que es, pero infla igual o mejor que los de gasolinera. Ya le compré uno a mi mamá también."</p>
  <div class="flex flex-col"><span class="text-xs font-bold uppercase tracking-wider font-display">elena r</span><span class="text-[10px] text-secondary">Hace 1 semana</span></div>
</div>
<div class="review-slide flex flex-col items-center text-center space-y-3">
  <div class="flex gap-0.5">
    <svg class="lucide lucide-star w-4 h-4 fill-primary text-primary" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
    <svg class="lucide lucide-star w-4 h-4 fill-primary text-primary" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
    <svg class="lucide lucide-star w-4 h-4 fill-primary text-primary" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
    <svg class="lucide lucide-star w-4 h-4 fill-primary text-primary" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
    <svg class="lucide lucide-star w-4 h-4 fill-primary text-primary" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
  </div>
  <p class="text-sm italic leading-relaxed text-primary px-4">"Llevo 2 meses usándolo para las llantas de la moto y la bici de mis hijos. Lo que más me gusta es que para solo cuando llega a la presión que le ponés."</p>
  <div class="flex flex-col"><span class="text-xs font-bold uppercase tracking-wider font-display">Sofia L</span><span class="text-[10px] text-secondary">Hace 3 días</span></div>
</div>
`;

// Find where this starts
const reviewStart = html.indexOf('<div class="flex flex-col items-center text-center space-y-3" style="opacity:0;transform:translateX(20px)">');
const reviewEnd = html.indexOf('<div class="flex justify-center gap-8 mt-6">');

if(reviewStart !== -1 && reviewEnd !== -1) {
  html = html.slice(0, reviewStart) + '<div id="reviews-container">' + allReviews + '</div>' + html.slice(reviewEnd);
}

// Map the buttons for the slider
html = html.replace('<div class="flex justify-center gap-8 mt-6"><button class="p-1 hover:bg-gray-100 rounded-full transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left w-5 h-5"', '<div class="flex justify-center gap-8 mt-6"><button id="prevReview" class="p-1 hover:bg-gray-100 rounded-full transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left w-5 h-5"');

html = html.replace('<button class="p-1 hover:bg-gray-100 rounded-full transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-5 h-5"', '<button id="nextReview" class="p-1 hover:bg-gray-100 rounded-full transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-5 h-5"');

html = html.replace('<div class="flex gap-1.5 items-center"><div class="w-1.5 h-1.5 rounded-full transition-all bg-primary w-3"></div><div class="w-1.5 h-1.5 rounded-full transition-all bg-gray-300"></div><div class="w-1.5 h-1.5 rounded-full transition-all bg-gray-300"></div></div>', '<div class="flex gap-1.5 items-center"><div class="review-dot w-1.5 h-1.5 rounded-full transition-all bg-primary w-3"></div><div class="review-dot w-1.5 h-1.5 rounded-full transition-all bg-gray-300"></div><div class="review-dot w-1.5 h-1.5 rounded-full transition-all bg-gray-300"></div></div>');

const finalHtml = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NovaHogar CR - Inflador Portátil Inteligente</title>
  ${styleAndScript}
</head>
<body>
  ${html}
</body>
</html>`;

fs.writeFileSync('NovaHogarCR_LandingPage_Estatica.html', finalHtml);
console.log('Successfully generated plain vanilla HTML!');
