import Watches from "./Watches";
import "../styles/index.scss";

import wings from "../img/colored-fractal-wings-1.png";
import mantre from "../img/Mandeltree.svg";
import vortex from "../img/black-hole-vortex.gif";
import face from "../img/face.png";

const App = () => {
  return (
    <section>
      <h3
        style={{
          color: "papayawhip",
          justifySelf: "center",
          padding: "1em 2em",
          border: "2px solid papayawhip",
          borderRadius: "0.5em",
          background: "rgba(0,0,0,0.5)",
        }}
      >
        APP
      </h3>
      <div className="app-section">
        <div style={{ display: "flex" }}>
          <img src={wings} />

          <Watches />
        </div>
        <img src={mantre} />
        <img src={vortex} />
        <img src={face} />
      </div>
    </section>
  );
};

export default App;
