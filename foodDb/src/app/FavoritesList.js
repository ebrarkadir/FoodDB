import React, { useEffect, useState } from 'react';
import SectionHeaders from "@/components/layout/SectionHeaders";

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (itemName) => {
    const updatedFavorites = favorites.filter(name => name !== itemName);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  if (favorites.length === 0) {
    return <p>Henüz favorilere eklenmiş bir ürün yok.</p>;
  }

  return (
    <section className="my-16">
      <div className="grid sm:grid-cols-3 gap-4">
        {favorites.map((name) => (
          <div key={name} className="border p-4">
            <p>{name}</p>
            <button onClick={() => removeFromFavorites(name)}>Favorilerden Kaldır</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FavoritesList;
