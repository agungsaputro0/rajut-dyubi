import React from "react";
import ProductCard from "../atoms/ProductCard"; 
import productsData from "../pseudo-db/products.json"; 
import { useNavigate } from "react-router-dom";

const FeaturedCollection: React.FC = () => {
  // ambil 3 produk pertama sebagai featured
  const featuredProducts = productsData.slice(0, 3);
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Judul */}
        <h2 className="text-3xl sm:text-4xl font-bold text-rajutBoldPink mb-2 font-dancingScript">
          Featured Collection
        </h2>
        <p className="text-rajutGray max-w-2xl mx-auto mb-10 text-sm">
          Temukan koleksi favorit kami, setiap produk dibuat dengan bahan premium
          dan perhatian pada setiap detail, menjadikannya benar-benar istimewa.
        </p>

        {/* Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {featuredProducts.map((product) => (
            <ProductCard key={product.productID} product={product} />
          ))}
        </div>

        {/* Tombol View All */}
        <div className="mt-10">
          <button onClick={() => navigate("/Katalog")} className="bg-white border border-rajutBoldPink text-rajutBoldPink px-6 py-2 rounded-full font-semibold shadow-md hover:bg-rajutBoldPink hover:text-white transition duration-200">
            View All Products →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollection;
