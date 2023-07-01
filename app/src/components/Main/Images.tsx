import { useState, useEffect } from "react";
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";
import photo4 from "../../assets/photo4.jpg";
import photo5 from "../../assets/photo5.jpg";
import photo6 from "../../assets/photo6.jpg";
import photo7 from "../../assets/photo7.jpg";

const Images: React.FC = () => {
  const images: string[] = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
  ];
  const [src, setSrc] = useState<number>(1);
  useEffect(() => {
    const IntervalPhotos: number = setInterval(() => {
      if (src === 7) {
        setSrc(1);
      } else {
        setSrc((src) => src + 1);
      }
    }, 2000);
    return () => clearInterval(IntervalPhotos);
  }, [src]);
  return (
    <div style={{ width: "400px", height: "400px" }} className="photo">
      <img
        className="photos"
        src={images[src - 1]}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Images;
