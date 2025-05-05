const reviews = 
  [
    { text: "Absolutely game-changing. JB helped me rank up fast.", stars: 5 },
    { text: "Solid advice, cool coach, and useful VOD reviews.", stars: 4 },
    { text: "Coaching helped but response time was a bit slow.", stars: 3 },
    { text: "Great for new players, less relevant if you're high rank.", stars: 4 },
    { text: "Very helpful! Helped me understand hero matchups.", stars: 5 }
  ];

  function displayReviews() 
  {
    const container = document.getElementById('review-list');
    reviews.forEach(review => {
      const div = document.createElement('div');
      div.className = 'review-entry';
      div.innerHTML = `
        <p class="stars">${'★'.repeat(review.stars)}${'☆'.repeat(5 - review.stars)}</p>
        <p>${review.text}</p>
      `;
      container.appendChild(div);
    });
  }

  document.addEventListener('DOMContentLoaded', displayReviews);