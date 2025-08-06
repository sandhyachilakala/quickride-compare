document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.search-box');
  const resultsSection = document.querySelector('.results');
  
  const rides = [
    {
      name: "🚲 Rapido Bike",
      fare: "₹40",
      eta: "14 min"
    },
    {
      name: "🚗 Uber Mini",
      fare: "₹55",
      eta: "15 min"
    },
    {
      name: "🚘 Ola Auto",
      fare: "₹50",
      eta: "16 min"
    }
  ];

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const pickup = form.children[0].value.trim();
    const drop = form.children[1].value.trim();

    if (!pickup || !drop) {
      alert("Please enter both pickup and drop locations.");
      return;
    }

    // Show section and loading message
    resultsSection.style.display = "block";
    resultsSection.innerHTML = `<h2>Available Rides</h2><div class="loading">Fetching ride fares...</div>`;

    setTimeout(() => {
      resultsSection.innerHTML = `<h2>Available Rides</h2>`;
      rides.forEach((ride) => {
        const card = document.createElement('div');
        card.classList.add('ride-card');
        card.innerHTML = `
          <div class="ride-header">${ride.name}</div>
          <div class="ride-info">Fare: ${ride.fare} | ETA: ${ride.eta}</div>
          <button class="book-btn">Book Now</button>
        `;
        resultsSection.appendChild(card);
      });
    }, 1500);
  });
});
