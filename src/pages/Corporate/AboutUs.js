export default function AboutUs({ items }) {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {items.map((item) => (
          <div>
            <h2 className="text-2xl font-bold text-black mb-2">{item.title}</h2>
            <div className="h-1 bg-red-600 w-20 mb-4"></div>
            <p className="text-justify">{item.description}</p>
            <br />
            <p className="text-justify">{item.subDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
