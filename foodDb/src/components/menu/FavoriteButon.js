import React, { useState } from 'react';

const FavoriteButton = ({ productId }) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return storedFavorites.includes(productId);
  });

  const handleFavorite = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = storedFavorites.filter(id => id !== productId);
    } else {
      updatedFavorites = [...storedFavorites, productId];
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <button onClick={handleFavorite}>
      {isFavorite ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
    </button>
  );
}

export default FavoriteButton;
