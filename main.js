// Initialize scroll animations
AOS.init({
  duration: 600,
  easing: 'ease-out',
  once: true,
  offset: 60
});

// Open Calendly booking popup
// Replace URL with your actual Calendly link before going live
function openCalendly(e) {
  e.preventDefault();
  Calendly.initPopupWidget({
    url: 'https://calendly.com/YOUR_USERNAME/strategy-call'
  });
}
