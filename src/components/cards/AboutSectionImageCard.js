export default function AboutSectionImageCard(props) {
  return (
    <div className="w-full md:w-1/2 relative mb-4 md:mb-0">
      <img
        src={props.img}
        alt="Typewriter"
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
