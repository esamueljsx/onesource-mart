function AboutChooseUs() {
  const list = [
    "Fresh produce delivered daily from local and trusted suppliers",
    "Competitive prices and regular loyalty rewards",
    "Friendly, knowledgeable staff ready to help",
    "Wide selection of organic and specialty products",
    "Convenient online ordering and delivery options",
    "Commitment to sustainability and community",
  ];

  return (
    <section className="bg-blend-darken bg-[url('/assets/one-source.jpg')] bg-[#2f2424d4] bg-cover text-white p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
      <ul className="space-y-3 text-lg">
        {list.map((e, index) => (
          <li key={index}>{`✓ ${e}`}</li>
        ))}
      </ul>
    </section>
  );
}

export default AboutChooseUs;
