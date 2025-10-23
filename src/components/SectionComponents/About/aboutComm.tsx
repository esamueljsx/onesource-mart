function AboutComm() {
  const list = [
    {
      header: "Local Partnerships",
      text: "We partner with local farmers and producers to bring fresh, regional products to your table.",
    },
    {
      header: "Food Bank Support",
      text: "We donate surplus produce and products to local food banks to help fight hunger.",
    },
    {
      header: "School Programs",
      text: "We sponsor local school events and nutrition education programs for our youth.",
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Community Involvement
      </h2>
      <div className="space-y-4">
        {list.map((e, index) => (
          <div key={index} className="flex gap-4">
            <div className="shrink-0 w-12 h-12 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
              ✓
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">{e.header}</h3>
              <p className="text-gray-700">{e.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutComm;
