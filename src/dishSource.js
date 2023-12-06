// src/dishSource.js
import { BASE_URL, API_KEY } from './apiConfig';

export function getMenuDetails(array_of_dish_ids) {
    let ids = array_of_dish_ids.join(',');
    let url = BASE_URL + 'recipes/informationBulk?ids=' + ids;
  
    return fetch(url, {
      headers: {'X-Mashape-Key': API_KEY}
    })
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
  }


  export function getDishDetails(id) {
    return getMenuDetails([id]).then(function(dishes) {
      return dishes[0];
    });
  }  

  export function searchDishes(searchParams) {
    let params = new URLSearchParams(searchParams).toString();
    let url = BASE_URL + 'recipes/complexSearch?' + params;
  
    return fetch(url, {
      headers: {'X-Mashape-Key': API_KEY}
    })
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then(function(data) {
      return data.results;
    });
  }
  