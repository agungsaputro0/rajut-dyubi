import { CalendarOutlined, ClockCircleOutlined, EyeOutlined, MessageOutlined } from "@ant-design/icons";
import useIsMobile from "../hooks/UseIsMobile";

interface BlogProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  likes: number;
  comments: number;
  featured: boolean;
  image: string;
  category: string; // tambahkan category
}

const BlogCard = ({ blog }: { blog: BlogProps }) => {
  const { title, excerpt, date, readTime, likes, comments, featured, image, category } = blog;
  const isMobile = useIsMobile();

  return (
    <div className="bg-white rounded-xl shadow-md w-full sm:w-56 lg:w-64 relative mb-6 transition-transform transform hover:scale-105 hover:shadow-lg">
      {/* Gambar */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          onError={(e) => (e.currentTarget.src = "assets/img/produk/dummy.jpg")}
          className="w-full h-44 sm:h-52 lg:h-56 object-cover rounded-t-xl"
        />
        {featured && (
          <span className="absolute top-3 left-3 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded-md shadow">
            Featured
          </span>
        )}
        {/* Category Label */}
        {category && (
          <span className="absolute top-3 right-3 bg-rajutBoldPink/50 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {category}
          </span>
        )}
      </div>

      {/* Konten */}
      <div className="p-4 text-left">
        {/* Info tanggal & waktu */}
        <div className="flex items-center gap-4 text-gray-500 text-xs mb-2">
          <div className="flex items-center gap-1">
            <CalendarOutlined /> 
            <span>{new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
          </div>
          <div className="flex items-center gap-1">
            <ClockCircleOutlined /> <span>{readTime}</span>
          </div>
        </div>

        {/* Judul */}
        <h2 className="text-sm sm:text-base lg:text-lg font-semibold leading-snug line-clamp-2 min-h-[2.5em]">
          {title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 text-xs sm:text-sm mt-1 line-clamp-2">
          {excerpt}
        </p>

        {/* Likes & Comments */}
        <div className={`mt-3 flex items-center justify-start gap-6 text-gray-500 text-xs ${isMobile ? "text-[11px]" : ""}`}>
          <div className="flex items-center gap-2">
            <EyeOutlined /> {likes}
          </div>
          <div className="flex items-center gap-2">
            <MessageOutlined /> {comments}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
