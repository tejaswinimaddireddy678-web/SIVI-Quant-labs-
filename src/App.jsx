import { useState } from "react";
import { TextureLoader, CanvasTexture } from "three";

import Scene from "./Components/Scene";
import Sidebar from "./Components/Sidebar";
import { pdfToTexture } from "./utils/parsePDF";

export default function App() {
  const [folded, setFolded] = useState(false);
  const [texture, setTexture] = useState(null);
  const [file, setFile] = useState(null);

  const [panelTextures, setPanelTextures] = useState({
    front: null,
    back: null,
    left: null,
    right: null,
    top: null,
  });

  const [dimensions, setDimensions] = useState({
    length: 3,
    width: 3,
    height: 3,
  });

  const [textData, setTextData] = useState({
    text: "",
    size: 0.5,
  });

  const handleFile = async (file) => {
    setFile(file);

    try {
      if (file.type.startsWith("image/")) {
        const url = URL.createObjectURL(file);

        new TextureLoader().load(url, (tex) => {
          tex.flipY = false;
          tex.needsUpdate = true;

          setTexture(tex);

          setPanelTextures({
            front: tex,
            back: tex,
            left: tex,
            right: tex,
            top: tex,
          });
        });
      } else if (file.type === "application/pdf") {
        const canvas = await pdfToTexture(file);

        const tex = new CanvasTexture(canvas);
        tex.flipY = false;
        tex.needsUpdate = true;

        setTexture(tex);

        setPanelTextures({
          front: tex,
          back: tex,
          left: tex,
          right: tex,
          top: tex,
        });
      }
    } catch (err) {
      console.error(err);
      alert("Failed to load file");
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <button
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 1000,
        }}
        onClick={() => setFolded(!folded)}
      >
        {folded ? "Open Box" : "Fold Box"}
      </button>

      <Sidebar
        onFile={handleFile}
        dimensions={dimensions}
        setDimensions={setDimensions}
        panelTextures={panelTextures}
        setPanelTextures={setPanelTextures}
        textData={textData}
        setTextData={setTextData}
        file={file}
      />

      <Scene
        folded={folded}
        texture={texture}
        panelTextures={panelTextures}
        dimensions={dimensions}
        textData={textData}
      />
    </div>
  );
}