import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const container = document.getElementById('character-container');

async function fetchCharacters() {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const data = await response.json();
    renderCharacters(data.results);
  } catch (error) {
    console.error('Error al cargar los personajes:', error);
  }
}

function renderCharacters(characters) {
  container.innerHTML = ''; // Limpiar contenido anterior
  characters.forEach(character => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}" />
      <h3>${character.name}</h3>
      <p>${character.status} - ${character.species}</p>
    `;
    container.appendChild(card);
  });
}

fetchCharacters();
