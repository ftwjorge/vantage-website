// Initialize scroll animations
AOS.init({
  duration: 600,
  easing: 'ease-out',
  once: true,
  offset: 60
});

// Open Calendly booking popup
function openCalendly(e) {
  e.preventDefault();
  Calendly.initPopupWidget({
    url: 'https://calendly.com/prof-jquevedo06/30min?background_color=0d0f12&text_color=ffffff&primary_color=c9a96e'
  });
}
