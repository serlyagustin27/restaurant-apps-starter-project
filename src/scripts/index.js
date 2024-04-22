import 'regenerator-runtime'; 
import '../styles/main.css';


console.log('Hello Coders! :)');

document.addEventListener("DOMContentLoaded", function() {
  const restaurants = [
    { name: "Bring Your Phone Cafe", image: "https://restaurant-api.dicoding.dev/images/medium/41", city: "Medan", rating: 4.5 },
    { name: "Run The Gun", image: "https://restaurant-api.dicoding.dev/images/medium/07", city: "Bali", rating: 4.0 },
    { name: "Pangsit Express", image: "https://restaurant-api.dicoding.dev/images/medium/29", city: "Ternate", rating: 4.8 },
    { name: "Ducky Duck", image: "https://restaurant-api.dicoding.dev/images/medium/38", city: "Malang", rating: 4.7 },
    { name: "Kafein", image: "https://restaurant-api.dicoding.dev/images/medium/40", city: "Bali", rating: 3.8 },
    { name: "Makan mudah", image: "https://restaurant-api.dicoding.dev/images/medium/08", city: "Malang", rating: 4.6 },
    { name: "Saya Suka", image: "https://restaurant-api.dicoding.dev/images/medium/32", city: "Surabaya", rating: 3.6 },
    { name: "Gigitan Cepat", image: "https://restaurant-api.dicoding.dev/images/medium/45", city: "Aceh", rating: 4 },
    { name: "Fairy Cafe", image: "https://restaurant-api.dicoding.dev/images/medium/04", city: "Malang", rating: 3.9 }
  ];

  const restaurantList = document.getElementById('restaurant-list');

  restaurants.forEach(restaurant => {
    const restaurantDiv = document.createElement('div');
    restaurantDiv.classList.add('restaurant-item');
    restaurantDiv.setAttribute("tabindex", "0");
    const name = document.createElement('h3');
    name.textContent = restaurant.name;

    const image = document.createElement('img');
    image.src = restaurant.image;
    image.alt = restaurant.name + ' Image';

    const cityRating = document.createElement('p');
    cityRating.textContent = `City: ${restaurant.city} | Rating: ${restaurant.rating}`;

    restaurantDiv.appendChild(name);
    restaurantDiv.appendChild(image);
    restaurantDiv.appendChild(cityRating);

    restaurantList.appendChild(restaurantDiv);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector('.menu-toggle');
  

  menuToggle.addEventListener('click', function() {
    toggleMenu();
  });

  menuToggle.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) { // Tombol Enter
      toggleMenu();
    }
  });

  function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('slide');
  }
});

