import AddToCartButton from "../menu/AddToCartButton";
import FavoriteButton from "../../components/menu/FavoriteButon"; // Düzgün yolu kontrol edin
import Image from "next/image";

export default function MenuItemTile({ onAddToCart, ...item }) {
  const { image, description, name, basePrice, sizes, extraIngredientPrices, category } = item; // category ekleyin
  const hasSizesOrExtras = sizes?.length > 0 || extraIngredientPrices?.length > 0;

  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center
      group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <Image src={image} width={192} height={96} className="max-h-auto max-h-24 block mx-auto" alt={name} />
      </div>
      <h4 className="font-semibold text-xl my-3">{name}</h4>
      <p className="text-gray-500 text-sm line-clamp-3">
        {description}
      </p>
      <FavoriteButton productId={name} productCategory={category} />
      <AddToCartButton
        image={image}
        hasSizesOrExtras={hasSizesOrExtras}
        onClick={onAddToCart}
        basePrice={basePrice}
      />
    </div>
  );
}