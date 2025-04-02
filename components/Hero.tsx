import Link from "next/link";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-10"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block text-xs uppercase tracking-wider text-gray-500 mb-4 animate-fade-in">
            Crafted with care
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium mb-6 max-w-4xl mx-auto leading-tight animate-fade-in">
            Beautiful objects for everyday living
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-in">
            Thoughtfully designed products that bring together form and
            function, creating a more beautiful everyday experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Link
              href="/products"
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-900 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/collections"
              className="bg-white text-black px-8 py-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Explore Collections
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
