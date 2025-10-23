
function AboutValues() {
  return (
   <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-700">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-700">
                We carefully select every product to ensure you get the best
                quality for your family.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-700">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Community
              </h3>
              <p className="text-gray-700">
                We're more than a store—we're a gathering place that strengthens
                our neighborhood.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-700">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-700">
                We're committed to reducing our environmental impact and
                supporting eco-friendly practices.
              </p>
            </div>
          </div>
        </section>
  )
}

export default AboutValues