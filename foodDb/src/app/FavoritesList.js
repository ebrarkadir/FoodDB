"use client";
import React, { useEffect, useState } from 'react';
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  if (favorites.length === 0) {
    return <p>Henüz favorilere eklenmiş bir ürün yok.</p>;
  }

  return (
    <section className="my-16">

      <div className="grid sm:grid-cols-3 gap-4">
        {favorites.map((name) => (
          <MenuItem key={name} name={name} /> // MenuItem bileşeninin uygun propsları olduğundan emin olun
        ))}
      </div>
    </section>
  );
};

export default FavoritesList;
