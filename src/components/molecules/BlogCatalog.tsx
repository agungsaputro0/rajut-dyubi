import React, { useState } from "react";
import { Select, Pagination } from "antd";
import { TfiLayoutGrid3, TfiLayoutListThumb } from "react-icons/tfi";
import { CalendarOutlined, ClockCircleOutlined, EyeOutlined, MessageOutlined } from "@ant-design/icons";
import BlogCard from "../atoms/BlogCard";
import blogsData from "../pseudo-db/blog.json";

const { Option } = Select;

const BlogCatalog: React.FC = () => {
  const [sortBy, setSortBy] = useState("latest");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(""); // "" = All
  const pageSize = 6;

  // Filter by search & category
  const filteredBlogs = blogsData.filter((b) =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === "" || b.category === categoryFilter)
  );

  // Sorting
  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    if (sortBy === "latest")
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (sortBy === "likes") return b.likes - a.likes;
    if (sortBy === "comments") return b.comments - a.comments;
    return 0;
  });

  // Pagination slice
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedBlogs = sortedBlogs.slice(startIndex, startIndex + pageSize);

  // Ambil daftar kategori unik
  const categories = Array.from(new Set(blogsData.map((b) => b.category)));

  return (
    <div className="w-full bg-gradientJourneyInNumber py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Section */}
        <div className="bg-rajutPeach border rounded-lg p-4 grid grid-cols-1 sm:flex sm:flex-row sm:items-center sm:justify-between gap-3 mb-8 shadow-sm">
          {/* Search */}
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full sm:w-60 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-rajutBoldPink"
          />

          {/* Category Filter */}
          <Select
            value={categoryFilter}
            onChange={(value) => {
                setCategoryFilter(value || ""); // jika clear, set ke ""
                setCurrentPage(1);
            }}
            className="w-full sm:w-60"
            placeholder="All Categories"
            allowClear
            >
            <Option value="">All</Option> {/* opsi All */}
            {categories.map((cat) => (
                <Option key={cat} value={cat}>{cat}</Option>
            ))}
            </Select>

          {/* Sort */}
          <Select
            value={sortBy}
            onChange={(value) => setSortBy(value)}
            className="w-full sm:w-60"
          >
            <Option value="latest">Latest</Option>
            <Option value="likes">Most Liked</Option>
            <Option value="comments">Most Commented</Option>
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

        {/* Info jumlah */}
        <div className="flex justify-start mb-8 text-sm text-gray-600">
          {sortedBlogs.length > 0 ? (
            <span>
              Menampilkan{" "}
              {Math.min(startIndex + pageSize, sortedBlogs.length)} dari{" "}
              {sortedBlogs.length} artikel
            </span>
          ) : (
            <span>Tidak ada artikel ditemukan</span>
          )}
        </div>

        {/* Blogs */}
        {view === "grid" ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {paginatedBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {paginatedBlogs.map((blog) => (
              <div
                key={blog.id}
                className="flex flex-col sm:flex-row gap-4 items-center bg-white rounded-xl shadow-md p-4"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1 text-center sm:text-left">
                  {/* Category */}
                  {blog.category && (
                    <span className="inline-block mb-2 bg-rajutPink text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                      {blog.category}
                    </span>
                  )}
                  <h2 className="text-lg font-semibold">{blog.title}</h2>
                  <p className="text-rajutGray text-sm line-clamp-2">{blog.excerpt}</p>
                  {/* Icons like BlogCard */}
                  <div className="flex items-center gap-4 text-gray-500 text-xs mt-2">
                    <div className="flex items-center gap-1">
                      <CalendarOutlined /> {new Date(blog.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockCircleOutlined /> {blog.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <EyeOutlined /> {blog.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageOutlined /> {blog.comments}
                    </div>
                  </div>
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
            total={sortedBlogs.length}
            onChange={(page) => setCurrentPage(page)}
            showSizeChanger={false}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCatalog;
