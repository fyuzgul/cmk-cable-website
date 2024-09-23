export default function Map() {
  return (
    <div className="z-10 relative h-full max-md:min-h-[350px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.185574881139!2d29.042022076415023!3d37.83254120882948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c7400396411bd1%3A0x2f3e0d9eae904cd4!2sCMK%20Kablo!5e0!3m2!1sen!2str!4v1724411832632!5m2!1sen!2str"
        className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
        allowFullScreen
      ></iframe>
    </div>
  );
}
