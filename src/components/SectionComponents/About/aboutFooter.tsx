import React from 'react'

function AboutFooter() {
  return (
      <section className="bg-gray-100 py-12 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Visit Us Today
          </h2>
          <p className="text-gray-700 mb-6">
            Stop by and experience the difference quality and community make.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition">
            Find Our Locations
          </button>
        </div>
      </section>
  )
}

export default AboutFooter