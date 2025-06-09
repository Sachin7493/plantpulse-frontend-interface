import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {
  const images = [
    "/image/hero.avif",
    "/image/hero2.avif",
    "/image/hero5.avif",
    "/image/img.avif",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
    fade: true,
  };

  return (
    <div className="w-full mt-[60px]">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-[65vh]">
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-black/30">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                Welcome to PlantPulse!
              </h1>
              <p className="text-base md:text-2xl font-semibold drop-shadow-md">
                Empowering farmers with Easy Access <br />
                to Tools.
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
