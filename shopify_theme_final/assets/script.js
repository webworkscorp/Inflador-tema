
document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.accordion-button');
  accordions.forEach(btn => {
    btn.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const icon = this.querySelector('.accordion-icon');
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
      } else {
        content.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
      }
    });
  });

  const thumbnails = document.querySelectorAll('.gallery-thumbnail');
  const mainImage = document.getElementById('main-product-image');
  if(thumbnails.length > 0 && mainImage) {
    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', function() {
        mainImage.src = this.getAttribute('data-src');
        thumbnails.forEach(t => t.classList.remove('border-black'));
        this.classList.add('border-black');
      });
    });
  }
});
