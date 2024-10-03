import { useLoading } from "../../contexts/LoadingContext";
export default function VideoThumbnail({ children, img, title }) {
  const { loading } = useLoading();
  if (loading) {
    return null;
  }
  return (
    <div className="video-thumbnail relative">
      <img
        src={img}
        alt="Video Thumbnail"
        className="w-full h-40 md:h-full object-cover object-center"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-2xl p-2 rounded font-bold tracking-widest">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}
