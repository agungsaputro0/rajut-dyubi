import React from "react";
import BlogCard from "../atoms/BlogCard";
import blogsData from "../pseudo-db/blog.json";

const FeaturedPosts: React.FC = () => {
  // filter hanya yang featured
  const featuredPosts = blogsData.filter((b) => b.featured).slice(0, 4);

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Judul */}
        <h2 className="text-3xl sm:text-4xl font-bold text-rajutBoldPink mb-2 font-dancingScript">
          Featured Posts
        </h2>
        <p className="text-rajutGray max-w-2xl mx-auto mb-10 text-sm">
          Artikel pilihan dari dunia rajut. Baca inspirasi, tips, dan kisah 
          menarik untuk menambah kreativitasmu.
        </p>

        {/* Blog Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} blog={post} />
          ))}
        </div>

        {/* Tombol View All */}
        <div className="mt-10">
          <button className="bg-white border border-rajutBoldPink text-rajutBoldPink px-6 py-2 rounded-full font-semibold shadow-md hover:bg-rajutBoldPink hover:text-white transition duration-200">
            View All Posts →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
