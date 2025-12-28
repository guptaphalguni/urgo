import img1 from "../assets/image/rescue1.jpeg";
import img2 from "../assets/image/rescue2.jpeg";
import img3 from "../assets/image/rescue3.jpeg";
import img4 from "../assets/image/rescue4.jpeg";

export default function ImageGrid() {
  const images = [img1, img2, img3, img4];

  return (
    <div style={styles.grid}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Emergency response"
          style={styles.image}
        />
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",
  },
  image: {
    width: "220px",
    height: "140px",
    objectFit: "cover",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },
};
