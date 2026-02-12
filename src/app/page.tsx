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
          <div className="text-center mb-8">
            <a href="mailto:auraclesdg@gmail.com" className="text-white text-lg underline hover:text-blue-200 transition-colors">
              auraclesdg@gmail.com
            </a>
          </div>
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

      {/* Featured Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Latest Music</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="h-64 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="https://i.scdn.co/image/ab67616d00001e0222064a2f062918edb2007385" 
                  alt="JUBADI Album Cover" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://open.spotify.com/album/4MnkjsrtZ6HEmwP4qldGlo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
                  >
                    Listen on Spotify
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">JUBADI</h3>
                <p className="text-gray-600">by Auracle SDG</p>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Track: JUBADI</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="h-64 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="https://i.scdn.co/image/ab67616d0000b273db2a4d98f17db59700102287" 
                  alt="Put In Pressure Album Cover" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://open.spotify.com/album/6wO1Go7rmBBmG2V3vjnNH1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
                  >
                    Listen on Spotify
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Put In Pressure</h3>
                <p className="text-gray-600">by Auracle SDG</p>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Track: Put In Pressure</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="#connect-listen"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              View All Music
            </Link>
          </div>
        </div>
      </section>

      {/* Social & Music Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Connect & Listen</h2>
          
          {/* Social Media Links */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Follow Me</h3>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://www.instagram.com/auracle_skalezdgreat/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@auracle_sdg?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white p-4 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a
                href="https://x.com/skalezdgreat"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white p-4 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="X (Twitter)"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Spotify Albums */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Latest Music</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <a
                href="https://open.spotify.com/album/4MnkjsrtZ6HEmwP4qldGlo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg group"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-black p-3 rounded-lg group-hover:bg-gray-800 transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.6-.12-.421.18-.78.6-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.241 1.081zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-bold">Listen on Spotify</h4>
                    <p className="text-sm opacity-90">Album 1</p>
                  </div>
                </div>
              </a>
              <a
                href="https://open.spotify.com/album/6wO1Go7rmBBmG2V3vjnNH1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg group"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-black p-3 rounded-lg group-hover:bg-gray-800 transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.6-.12-.421.18-.78.6-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.241 1.081zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-bold">Listen on Spotify</h4>
                    <p className="text-sm opacity-90">Album 2</p>
                  </div>
                </div>
              </a>
            </div>
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
