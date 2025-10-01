import React, { useState } from "react";
import { Select, Pagination, Rate } from "antd";
import { TfiLayoutGrid3, TfiLayoutListThumb } from "react-icons/tfi";
import { FiShoppingBag } from "react-icons/fi";
import ProductCard from "../atoms/ProductCard";
import productsData from "../pseudo-db/productsfull.json";

const { Option } = Select;

const ProductCatalog: React.FC = () => {
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // 🔍 state untuk search
  const pageSize = 9;

  // Ambil kategori unik dari products
  const categories = ["All", ...new Set(productsData.map((p) => p.category))];

  // Filter by category + search
  const filteredProducts = productsData.filter((p) => {
    const matchesCategory =
      category === "All" ? true : p.category === category;
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "priceAsc") return a.price - b.price;
    if (sortBy === "priceDesc") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  // Pagination slice
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + pageSize
  );

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Section */}
        <div className="bg-rajutPeach border rounded-lg p-4 grid grid-cols-1 sm:flex sm:flex-row sm:items-center sm:justify-between gap-3 mb-8 shadow-sm">
        {/* Search */}
        <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); 
            }}
            className="w-full sm:w-60 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rajutBoldPink"
        />

        {/* Filter kategori */}
        <Select
            value={category}
            onChange={(value) => {
            setCategory(value);
            setCurrentPage(1);
            }}
            className="w-full sm:w-60"
        >
            {categories.map((cat) => (
            <Option key={cat} value={cat}>
                {cat}
            </Option>
            ))}
        </Select>

        {/* Sort */}
        <Select
            value={sortBy}
            onChange={(value) => setSortBy(value)}
            className="w-full sm:w-60"
        >
            <Option value="name">Sort by Name</Option>
            <Option value="priceAsc">Price: Low to High</Option>
            <Option value="priceDesc">Price: High to Low</Option>
            <Option value="rating">Rating</Option>
        </Select>

        {/* Toggle Grid/List */}
        <div className="flex justify-center sm:justify-end gap-2">
            <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-md border ${
                view === "grid"
                ? "bg-rajutBoldPink text-white"
                : "bg-white hover:bg-gray-100"
            }`}
            >
            <TfiLayoutGrid3 size={18} />
            </button>
            <button
            onClick={() => setView("list")}
            className={`p-2 rounded-md border ${
                view === "list"
                ? "bg-rajutBoldPink text-white"
                : "bg-white hover:bg-gray-100"
            }`}
            >
            <TfiLayoutListThumb size={18} />
            </button>
        </div>
        </div>
        <div className="flex justify-start sm:justify-start mb-8 text-sm text-gray-600">
          {sortedProducts.length > 0 ? (
            <span>
              Menampilkan{" "}
                {Math.min(startIndex + pageSize, sortedProducts.length)}{" "}
              dari {sortedProducts.length} produk
            </span>
          ) : (
            <span>Tidak ada produk ditemukan</span>
          )}
        </div>

        {/* Produk */}
        {view === "grid" ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.productID} product={product} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
  {paginatedProducts.map((product) => (
    <div
      key={product.productID}
      className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start bg-white rounded-xl shadow-md p-4 sm:p-6"
    >
      {/* Gambar */}
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full max-w-[150px] h-auto object-cover rounded-lg"
      />

      {/* Info Produk */}
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-rajutGray text-sm">{product.category}</p>

        {/* Harga dan diskon */}
        <div className="mt-1">
          {product.discountPrice ? (
            <>
              <span className="text-rajutBoldPink font-bold mr-2">
                Rp {product.discountPrice.toLocaleString("id-ID")}
              </span>
              <span className="line-through text-gray-400 text-sm">
                Rp {product.price.toLocaleString("id-ID")}
              </span>
            </>
          ) : (
            <span className="text-rajutBoldPink font-bold">
              Rp {product.price.toLocaleString("id-ID")}
            </span>
          )}
        </div>

        {/* Rating & review */}
        <div className="flex items-center justify-center sm:justify-start mt-2 gap-2">
          <Rate disabled defaultValue={product.rating} style={{ fontSize: 14 }} />
          <span className="text-sm text-gray-600">
            ({product.reviews} review{product.reviews > 1 ? "s" : ""})
          </span>
        </div>
      </div>

      {/* Tombol Pesan */}
      <div className="w-full sm:w-auto mt-4 sm:mt-0">
        <button className="w-full sm:w-auto flex justify-center items-center gap-2 bg-rajutBoldPink text-white rounded-full px-5 py-2 text-sm font-medium hover:bg-rajutPink transition">
          <FiShoppingBag />
          Pesan Sekarang
        </button>
      </div>
    </div>
  ))}
</div>

        )}

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={sortedProducts.length}
            onChange={(page) => setCurrentPage(page)}
            showSizeChanger={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
