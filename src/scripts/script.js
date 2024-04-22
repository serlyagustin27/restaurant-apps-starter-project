import '../styles/main.css';

document.addEventListener('DOMContentLoaded', function () {
  const restaurantsData = { /* Data JSON restoran */ };

  const restaurantList = document.getElementById('restaurant-list');

  restaurantsData.restaurants.forEach(restaurant => {
    const restaurantItem = document.createElement('div');
    restaurantItem.classList.add('restaurant-item');
    restaurantItem.innerHTML = `
      <img src="${restaurant.pictureId}" alt="${restaurant.name}">
      <h3>${restaurant.name}</h3>
      <p>City: ${restaurant.city}</p>
      <p>Rating: ${restaurant.rating}</p>
      <p>${restaurant.description}</p>
    `;
    restaurantList.appendChild(restaurantItem);
  });
});

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
nav.classList.toggle('slide');
});