export default function VideoThumbnail({ children }) {
  return (
    <div className="video-thumbnail">
      <img
        src="https://www.cmkkablo.com/uploads/homevideo/1597935830c1ba.jpg"
        alt="Video Thumbnail"
        className="w-full"
      />
      {children}
    </div>
  );
}
