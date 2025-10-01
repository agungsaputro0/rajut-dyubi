const BlogContent = () => {
  return (
    <div className="min-h-screen-half mt-16 w-full py-10 flex flex-col lg:flex-row items-center justify-center relative bg-cover bg-center">
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      {/* Konten Kiri */}
      <div className="flex items-center justify-center w-full px-6 sm:px-12 lg:px-16 z-10">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-dancingScript text-rajutBoldPink leading-tight drop-shadow-lg font-light">
            Crochet Chronicles
          </h1>
          <p className="mt-4 text-sm sm:text-md text-rajutGray text-center drop-shadow-md font-light">
            Tips, tutorials, stories, and inspiration from the world of crochet. Join our community of makers and learn something new every week!
          </p>
        </div>
      </div>
    </div>
  );
};


export default BlogContent;
