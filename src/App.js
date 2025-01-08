import logo from "./wordmarkwhite.png";
import "./index.css";

function App() {
  return (
    <div
      style={{
        position: "fixed",
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
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img src={logo} style={{ maxWidth: 400, marginLeft: 20 }} alt="logo" />
        <p
          style={{
            color: "#ffffff",
            fontWeight: 600,
            fontSize: 48,
          }}
        >
          Coming Soon
        </p>
      </div>
    </div>
  );
}

export default App;
