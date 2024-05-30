import React, { useEffect, useState } from 'react';

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
    // Kategorileri al
    fetchCategories();
  }, []);

  async function fetchCategories() {
    // Kategorileri API'den al
    try {
      const response = await fetch('/api/categories');
      if (response.ok) {
        const categoriesData = await response.json();
        setCategories(categoriesData);
      } else {
        throw new Error('Kategoriler alınamadı');
      }
    } catch (error) {
      console.error('Kategoriler alınırken bir hata oluştu:', error);
    }
  }

  const removeFromFavorites = (productId) => {
    const updatedFavorites = favorites.filter(favorite => favorite.id !== productId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  if (favorites.length === 0) {
    return <p>Henüz favorilere eklenmiş bir ürün yok.</p>;
  }

  // Kategori isimlerini alarak favori ürünleri grupla
  const groupedFavorites = favorites.reduce((acc, favorite) => {
    const category = categories.find(cat => cat._id === favorite.category);
    const categoryName = category ? category.name : 'Bilinmeyen Kategori';
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(favorite);
    return acc;
  }, {});

  return (
    <section className="my-16">
      {Object.keys(groupedFavorites).map(categoryName => (
        <div key={categoryName}>
          <h2>{categoryName}</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {groupedFavorites[categoryName].map(favorite => (
              <div key={favorite.id} className="border p-4">
                <p>{favorite.id}</p>
                <button onClick={() => removeFromFavorites(favorite.id)}>Favorilerden Kaldır</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FavoritesList;
