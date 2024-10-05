import { useLoading } from "../../contexts/LoadingContext";
import { BigTitle } from "../titles";
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
        <BigTitle color="white">{title}</BigTitle>
      </div>
      {children}
    </div>
  );
}
