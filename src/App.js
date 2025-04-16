import logo from "./wordmarkwhite.png";
import appstore from "./appstore.svg";
import googleplay from "./googleplay.svg";
import "./index.css";
import { useState, useEffect } from "react";

import slide1 from "./graphics/slide1.png";
import slide2 from "./graphics/slide2.png";
import slide3 from "./graphics/slide3.png";
import slide4 from "./graphics/slide4.png";
import slide5 from "./graphics/slide5.png";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [slide1, slide2, slide3, slide4, slide5];

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const styles = {
    carouselContainer: {
      padding: 5,
      textAlign: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: 8,
      marginBottom: 20,
      maxHeight: 200,
      maxWidth: "100%",
    },
    carousel: {
      display: "flex",
      marginTop: 10,
      marginBottom: 10,
      gap: 5,
      overflowX: "auto",
      justifyContent: "center",
    },
    thumbnail: {
      width: "18%",
      aspectRatio: 0.46,
      maxHeight: 180,
      objectFit: "cover",
      cursor: "pointer",
      borderRadius: 4,
      transition: "transform 0.2s",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto",
      justifyContent: "center",
      textAlign: "center",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    modalContent: {
      maxWidth: "90%",
      maxHeight: "80vh",
      borderRadius: 8,
    },
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        color: "#000000",
        margin: "auto",
        justifyContent: "center",
        textAlign: "center",
        height: "100%",
        background: "linear-gradient(180deg, #f48fcc 0%, #df6c41 100%)",
        flex: 1,
        overflowY: "scroll",
      }}
    >
      <div
        style={{
          margin: "auto",
          maxWidth: windowWidth < 600 ? 350 : windowWidth > 1000 ? 600 : "60%",
        }}
      >
        <div style={{ marginTop: 50 }}>
          <img src={logo} style={{ maxWidth: "80%" }} alt="logo" />
          <div style={{ color: "#ffffff", fontSize: 12 }}>
            Simplifying content discovery across the dWeb.
          </div>
        </div>

        <div style={{ textAlign: "left", marginTop: 40 }}>
          <div
            style={{
              color: "#ffffff",
              fontWeight: 600,
              fontSize: 32,
              marginBottom: 20,
            }}
          >
            Personalize your feeds across Mastodon, Bluesky, and more—all on
            your terms.
          </div>

          <div style={styles.carouselContainer}>
            <div style={styles.carousel}>
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  style={styles.thumbnail}
                  onClick={() => setSelectedImage(img)}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1.0)")
                  }
                />
              ))}
            </div>

            {selectedImage && (
              <div
                style={styles.modalOverlay}
                onClick={() => setSelectedImage(null)}
              >
                <img
                  src={selectedImage}
                  alt="Enlarged"
                  style={styles.modalContent}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}
          </div>
          <div style={{ color: "#ffffff" }}>
            Pantry is a next-generation gateway to the open web that reimagines
            how feeds should work. Designed for users who value control and
            privacy, Pantry puts you in charge of what you see—not an algorithm.
            With on-device personalization and teachable feed technology, you
            shape your timeline by highlighting what matters most to you. No
            guessing, no data mining. Pantry also allows you to connect
            seamlessly with communities across Mastodon, Bluesky, Threads,
            Flipboard, Pixelfed, Lemmy, Misskey, and more. Best of all, your
            preferences are encrypted and stored locally, so your data stays
            yours.
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 60 }}>
          <img
            onClick={() => {
              window.open(
                "https://testflight.apple.com/join/3ZNGYXK1",
                "_blank",
                "noreferrer"
              );
            }}
            onMouseOver={({ currentTarget }) => {
              currentTarget.style.opacity = "50%";
            }}
            onMouseOut={({ currentTarget }) => {
              currentTarget.style.opacity = "100%";
            }}
            src={appstore}
            style={{ cursor: "pointer", width: 170, marginRight: 10 }}
            alt="Download Pantry on the Apple App Store!"
          />
          <img
            onClick={() => {
              window.open(
                "https://play.google.com/store/apps/details?id=xyz.pantryapp.pantryapp",
                "_blank",
                "noreferrer"
              );
            }}
            onMouseOver={({ currentTarget }) => {
              currentTarget.style.opacity = "50%";
            }}
            onMouseOut={({ currentTarget }) => {
              currentTarget.style.opacity = "100%";
            }}
            src={googleplay}
            style={{ cursor: "pointer", width: 170 }}
            alt="Download Pantry on the Google Play Store!"
          />
        </div>
        <div
          style={{
            display: "flex",
            textAlign: "left",
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              cursor: "pointer",
              color: "#ffffff",
              opacity: 0.5,
              textDecoration: "underline",
              marginRight: 10,
              fontSize: 13,
            }}
            onClick={() => {
              window.open(
                "https://forms.gle/RvKWS76taqxLXwjg6",
                "_blank",
                "noreferrer"
              );
            }}
          >
            Contact Form
          </div>
          <div
            style={{
              cursor: "pointer",
              color: "#ffffff",
              opacity: 0.5,
              textDecoration: "underline",
              fontSize: 13,
            }}
            onClick={() => {
              window.open(
                "https://docs.google.com/document/d/1ZU7RzRb_6c0g8z_Pq2aeExTRTpbIkPlMRddT0WdK6_A",
                "_blank",
                "noreferrer"
              );
            }}
          >
            Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
