import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/SlideCarousel.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import CarouselCardGrid from "../grids/CarouselCardGrid";

import { useRef, useState } from "react";

function CustomSwiper() {
  const swiperRef = useRef(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  const videos = {
    video1: "https://example.com/video1.mp4",
    video2: "https://example.com/video2.mp4",
    video3: "https://example.com/video3.mp4",
    video4: "https://example.com/video4.mp4",
    video5: "https://example.com/video5.mp4",
  };
  const videoKeys = Object.keys(videos);

  const handleSlideChange = (swiper) => {
    const currentSlide = swiper.slides[swiper.activeIndex];
    const videoElement = currentSlide.querySelector("video");

    if (videoElement) {
      videoElement.currentTime = 0;
      if (playingVideo) {
        playingVideo.pause();
      }
      videoElement.play().catch(() => {});
      setPlayingVideo(videoElement);

      videoElement.addEventListener("loadedmetadata", () => {
        const videoDuration = videoElement.duration * 1000;
        swiper.params.autoplay.delay = videoDuration || 5000;
        swiper.autoplay.start();
      });

      videoElement.addEventListener(
        "ended",
        () => {
          swiper.slideNext();
        },
        { once: true }
      );
    }
  };

  const handleSwiperInit = (swiper) => {
    const firstSlide = swiper.slides[swiper.activeIndex];
    const firstVideo = firstSlide.querySelector("video");

    if (firstVideo) {
      firstVideo.currentTime = 0;
      firstVideo.play().catch(() => {});
      setPlayingVideo(firstVideo);

      firstVideo.addEventListener("loadedmetadata", () => {
        const videoDuration = firstVideo.duration * 1000;
        swiper.params.autoplay.delay = videoDuration || 5000;
        swiper.autoplay.start();
      });

      firstVideo.addEventListener(
        "ended",
        () => {
          swiper.slideNext();
        },
        { once: true }
      );
    }
  };

  return (
    <>
      <div className="swiper-section">
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          effect="fade"
          autoplay={{
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="mySwiper"
          onSlideChange={handleSlideChange}
          onSwiper={handleSwiperInit}
        >
          {videoKeys.map((key, index) => (
            <SwiperSlide key={index}>
              <div className="video-container">
                <video
                  src={videos[key]}
                  controls={false}
                  autoPlay
                  muted
                  loop={false}
                  className="video-element"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <CarouselCardGrid />
      </div>
    </>
  );
}

export default CustomSwiper;
