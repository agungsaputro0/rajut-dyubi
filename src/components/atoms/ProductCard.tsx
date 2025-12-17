import useIsMobile from "../hooks/UseIsMobile";

interface ProductProps {
  productID: string;
  images: string[];
  name: string;
  price: number;
  discountPrice?: number;
  rating: number;
  reviews: number;
}

const ProductCard = ({ product }: { product: ProductProps }) => {
  const { productID, images, name, price, discountPrice, rating, reviews } = product;
  const isMobile = useIsMobile();
  const image =
    images.length > 0
      ? images[0]
      : "assets/img/produk/dummy.jpg";

  return (
    <div className="bg-white rounded-xl shadow-md w-full sm:min-w-60 lg:min-w-60 max-w-72 relative mb-6 transition-transform transform hover:scale-105 hover:shadow-lg">
      {/* Gambar */}
      <img
        src={image}
        alt={productID + name}
        onError={(e) => (e.currentTarget.src = "assets/img/produk/dummy.jpg")}
        className="w-full h-44 sm:h-52 lg:h-56 object-cover rounded-t-xl"
      />

      {/* Konten */}
      <div className="p-4 text-left">
        {/* Nama produk */}
        <h2 className="text-xs sm:text-sm lg:text-base font-semibold leading-snug line-clamp-2 min-h-[2em]">
          {name}
        </h2>

        {/* Rating */}
       <div className="flex items-center text-yellow-500 text-sm mt-2" aria-label={`Rating produk: ${rating} dari 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>
              {i + 0.5 < rating ? "★" : "☆"}
            </span>
          ))}
          <span className="ml-2 text-gray-500 text-xs">({reviews})</span>
        </div>


        {/* Harga */}
        <div
          className={`mt-2 gap-2 ${!isMobile ? "flex items-center" : ""}`}
        >
          <p className="text-md sm:text-lg font-bold text-mainColor">
            Rp {discountPrice?.toLocaleString("id-ID") || price.toLocaleString("id-ID")}
          </p>
          {discountPrice && (
            <p className="text-sm text-gray-800 line-through">
              Rp {price.toLocaleString("id-ID")}
            </p>
          )}
        </div>

        {/* Tombol Pesan */}
        <button className="mt-3 w-full bg-mainColor rounded-full text-white text-sm sm:text-md font-semibold py-2 hover:bg-mainColorHover transition">
          Pesan
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
