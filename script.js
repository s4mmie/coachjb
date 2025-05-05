// Smooth scroll to booking section when "Book Now" button is clicked
const bookBtn = document.getElementById('bookNowBtn');
if (bookBtn) 
{
    bookBtn.addEventListener('click', function(e) 
    {
        e.preventDefault();  // prevent default jump (if any)
        // Scroll to the booking section smoothly
        const bookingSection = document.getElementById('booking');
        if (bookingSection) 
        {
            bookingSection.scrollIntoView({ behavior: 'smooth' });
        }
  });   
}

// Show an alert on form submission
const form = document.getElementById('bookingForm');
if (form) 
{
    form.addEventListener('submit', function(e) 
    {
        e.preventDefault();  // stop actual form submission
        alert("Thank you! Your message has been sent.");  // feedback to user
        form.reset();  // clear the form fields
    });
}

// Interactive and animated testimonial cards with flipping effect

document.addEventListener('DOMContentLoaded', () => {
    const testimonialsContainer = document.getElementById('testimonials');
  
    const testimonialData = 
    [
      "Coach JB helped me reach Diamond in just 3 weeks! – Alex",
      "Incredible guidance and support throughout my climb. – Sam",
      "Worth every dollar. JB is the real deal. – Kelly",
      "I went from Bronze to Plat thanks to JB’s sessions. – Jordan",
      "He instantly spotted my biggest mistakes. – Riley",
      "Coaching was fun, direct, and super effective. – Jamie",
      "Clear advice, no fluff. Highly recommended. – Max",
      "I loved the energy in every session! – Casey",
      "Coach JB broke down my VOD like a pro. – Blake",
      "My map awareness improved drastically. – Drew",
      "Helped me get recruited to my college team. – Morgan",
      "Best money I've spent on gaming. – Quinn",
      "He even followed up with a full game plan. – Avery",
      "JB fixed my positioning and mindset. – Taylor",
      "Chill vibe and serious coaching. Loved it. – Hayden",
      "My ult usage is now on point thanks to JB. – Sky",
      "JB's Marvel Rivals knowledge is next level. – Chris",
      "I had fun and learned so much at the same time. – Frankie",
      "Got tips specific to my role and hero. – Devon",
      "Coach JB is awesome and fast at replies. – Jesse"
    ];
  
    const displayCount = 3;
  
    // Shuffle function
    const getRandomTestimonial = () => 
    {
      return testimonialData[Math.floor(Math.random() * testimonialData.length)];
    };
  
    const createTestimonialCard = (text) => 
    {
      const card = document.createElement('div');
      card.className = 'testimonial-card';
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-front">${text}</div>
          <div class="card-back">${getRandomTestimonial()}</div>
        </div>
      `;
  
      card.addEventListener('click', () => 
      {
        card.classList.toggle('flipped');
        setTimeout(() => 
          {
            const newText = getRandomTestimonial();
            const back = card.querySelector('.card-back');
            const front = card.querySelector('.card-front');
          if (card.classList.contains('flipped')) 
          {
            front.textContent = newText;
          } 
            else 
          {
            back.textContent = newText;
          }
        }, 600);
      });
  
      testimonialsContainer.appendChild(card);
  
      // random timer flip
      setTimeout(() => 
      {
        card.click();
      }, Math.random() * 6000 + 2000);
    };
  
    testimonialsContainer.innerHTML = '<h2>Reviews</h2>';
    for (let i = 0; i < displayCount; i++) 
    {
      const text = getRandomTestimonial();
      createTestimonialCard(text);
    }
  });
  
