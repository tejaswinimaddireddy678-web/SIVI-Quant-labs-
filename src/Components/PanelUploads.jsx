export default function PanelUploads({ setPanelTextures }) {
  const upload = (event, panel) => {
    const file = event.target.files[0];

    if (!file) return;

    const image = new Image();

    image.onload = () => {
      setPanelTextures((prev) => ({
        ...prev,
        [panel]: image,
      }));
    };

    image.src = URL.createObjectURL(file);
  };

  return (
    <div>
      {["front", "back", "left", "right", "top"].map((panel) => (
        <div key={panel}>
          <label>{panel}</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => upload(e, panel)}
          />
        </div>
      ))}
    </div>
  );
}