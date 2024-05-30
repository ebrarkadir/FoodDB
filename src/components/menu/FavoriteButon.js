import React, { useState } from 'react';

const FavoriteButton = ({ productId, productCategory }) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return storedFavorites.some(favorite => favorite.id === productId);
  });

  const handleFavorite = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = storedFavorites.filter(favorite => favorite.id !== productId);
    } else {
      updatedFavorites = [...storedFavorites, { id: productId, category: productCategory }];
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