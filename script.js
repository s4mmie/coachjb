// Smooth scroll to booking section when "Book Now" button is clicked
const bookBtn = document.getElementById('bookNowBtn');
if (bookBtn) {
  bookBtn.addEventListener('click', function(e) {
    e.preventDefault();  // prevent default jump (if any)
    // Scroll to the booking section smoothly
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Show an alert on form submission
const form = document.getElementById('bookingForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();  // stop actual form submission
    alert("Thank you! Your message has been sent.");  // feedback to user
    form.reset();  // clear the form fields
  });
}
