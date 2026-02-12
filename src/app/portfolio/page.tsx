export default function Portfolio() {
  const artworks = [
    { id: 1, title: "Abstract Dreams", description: "An exploration of colors and emotions", medium: "Oil on Canvas", year: "2023", gradient: "from-red-400 to-pink-500" },
    { id: 2, title: "Urban Reflections", description: "Cityscapes through a unique lens", medium: "Digital Art", year: "2023", gradient: "from-green-400 to-blue-500" },
    { id: 3, title: "Nature's Whisper", description: "Organic forms and natural beauty", medium: "Mixed Media", year: "2022", gradient: "from-yellow-400 to-orange-500" },
    { id: 4, title: "Geometric Harmony", description: "Balance in shapes and lines", medium: "Acrylic", year: "2022", gradient: "from-purple-400 to-indigo-500" },
    { id: 5, title: "Ethereal Visions", description: "Surreal landscapes and imagination", medium: "Watercolor", year: "2021", gradient: "from-teal-400 to-cyan-500" },
    { id: 6, title: "Cultural Fusion", description: "Blending traditions and modernity", medium: "Photography", year: "2021", gradient: "from-pink-400 to-rose-500" },
    { id: 7, title: "Inner Light", description: "Illuminating the soul's journey", medium: "Oil on Canvas", year: "2023", gradient: "from-amber-400 to-yellow-500" },
    { id: 8, title: "Digital Horizons", description: "Exploring virtual realities", medium: "Digital Art", year: "2023", gradient: "from-violet-400 to-purple-500" },
    { id: 9, title: "Ocean Depths", description: "Mysteries beneath the surface", medium: "Mixed Media", year: "2022", gradient: "from-blue-400 to-indigo-600" },
    { id: 10, title: "Urban Poetry", description: "Rhythm of city streets", medium: "Photography", year: "2022", gradient: "from-gray-400 to-gray-600" },
    { id: 11, title: "Cosmic Dance", description: "Movement of the universe", medium: "Acrylic", year: "2021", gradient: "from-indigo-400 to-blue-600" },
    { id: 12, title: "Silent Echoes", description: "Whispers of forgotten memories", medium: "Watercolor", year: "2021", gradient: "from-emerald-400 to-green-600" },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">A curated collection of my artistic works spanning various mediums and themes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {artworks.map((art) => (
            <div key={art.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className={`h-48 bg-gradient-to-br ${art.gradient} flex items-center justify-center relative`}>
                <span className="text-white text-lg font-bold">{art.title}</span>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{art.title}</h3>
                <p className="text-gray-600 mb-3">{art.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{art.medium}</span>
                  <span>{art.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-4">Interested in commissioning a custom piece or learning more about my work?</p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </main>
  );
}
