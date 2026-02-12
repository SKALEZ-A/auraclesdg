export default function About() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">About Auracle SDG</h1>
            <p className="text-xl text-gray-600">Contemporary Artist & Creative Visionary</p>
          </div>

          {/* Bio and Portrait */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
                <div className="w-64 h-64 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full mx-auto flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">Professional Portrait</span>
                </div>
              </div>
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">My Artistic Journey</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Auracle SDG is a contemporary artist whose work transcends traditional boundaries, blending innovative techniques with profound emotional depth. With over a decade of experience in the art world, I have developed a unique voice that speaks to the complexities of human experience and the beauty of our natural world.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  My artistic practice encompasses various mediums including painting, digital art, and mixed media installations. Each piece is a meditation on themes of identity, connection, and transformation, inviting viewers to explore their own narratives through my visual language.
                </p>
                <p className="text-lg text-gray-700">
                  Based in the heart of the creative community, I draw inspiration from urban landscapes, natural phenomena, and the intricate tapestry of human relationships. My work has been featured in galleries across the country and continues to evolve as I push the boundaries of artistic expression.
                </p>
              </div>
            </div>
          </div>

          {/* Experience and Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience & Background</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4"></div>
                  <div>
                    <strong className="text-gray-900">Fine Arts Degree</strong> - Masters in Contemporary Art from prestigious art academy
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4"></div>
                  <div>
                    <strong className="text-gray-900">Professional Artist</strong> - 12+ years creating and exhibiting original works
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4"></div>
                  <div>
                    <strong className="text-gray-900">Exhibition Curator</strong> - Organized multiple group exhibitions and solo shows
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4"></div>
                  <div>
                    <strong className="text-gray-900">Art Educator</strong> - Taught workshops and mentored emerging artists
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mediums & Techniques</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <strong className="text-gray-900">Oil Painting</strong>
                  <p className="text-sm text-gray-600 mt-2">Traditional and contemporary styles</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <strong className="text-gray-900">Digital Art</strong>
                  <p className="text-sm text-gray-600 mt-2">Digital illustrations and designs</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <strong className="text-gray-900">Mixed Media</strong>
                  <p className="text-sm text-gray-600 mt-2">Collage and installation art</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <strong className="text-gray-900">Photography</strong>
                  <p className="text-sm text-gray-600 mt-2">Artistic and conceptual photography</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exhibitions and Awards */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Exhibitions & Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Selected Exhibitions</h4>
                <ul className="space-y-3">
                  <li className="text-gray-700">• "Urban Visions" - Contemporary Art Gallery, 2023</li>
                  <li className="text-gray-700">• "Nature's Dialogue" - Eco Art Festival, 2022</li>
                  <li className="text-gray-700">• "Identity & Expression" - Modern Art Museum, 2021</li>
                  <li className="text-gray-700">• "Digital Dreams" - Tech & Art Exhibition, 2020</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Awards & Honors</h4>
                <ul className="space-y-3">
                  <li className="text-gray-700">• Emerging Artist Award - National Art Council, 2022</li>
                  <li className="text-gray-700">• Best Contemporary Piece - Annual Art Competition, 2021</li>
                  <li className="text-gray-700">• Innovation in Mediums - Art Innovation Prize, 2020</li>
                  <li className="text-gray-700">• Community Impact Award - Local Arts Foundation, 2019</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Artistic Philosophy */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Artistic Philosophy</h3>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
              "Art is not just about creating beautiful images; it's about sparking conversations, challenging perceptions, and connecting with the human experience. Every brushstroke, every pixel, every composition is an invitation to see the world differently. I believe in the power of art to heal, to inspire, and to transform both the creator and the observer."
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
