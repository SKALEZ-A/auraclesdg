import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-4">Auracle SDG</h1>
          <p className="text-2xl mb-8">Contemporary Artist & Creative Visionary</p>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Exploring the boundaries of art through innovative techniques and profound expressions. Discover my journey through colors, forms, and emotions.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/portfolio"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Featured Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Abstract Dreams</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Abstract Dreams</h3>
                <p className="text-gray-600">A journey through subconscious landscapes</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Urban Reflections</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Urban Reflections</h3>
                <p className="text-gray-600">City life through artistic lenses</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Nature's Whisper</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Nature's Whisper</h3>
                <p className="text-gray-600">Organic forms and natural beauty</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/portfolio"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              See Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="w-64 h-64 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Artist Portrait</span>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Auracle SDG</h2>
              <p className="text-lg text-gray-700 mb-4">
                Auracle SDG is a passionate artist dedicated to pushing the boundaries of contemporary art. With years of experience in various mediums, I create pieces that resonate with viewers on a deep emotional level.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                My work explores themes of identity, nature, and human connection, blending traditional techniques with modern innovation.
              </p>
              <Link
                href="/about"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Read Full Bio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Create Something Together</h2>
          <p className="text-lg mb-8">Interested in commissions, collaborations, or exhibitions? Get in touch.</p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}
