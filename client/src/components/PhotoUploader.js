import { useState } from "react";

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const fileChangedHandler = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div>
      <input type="file" onChange={fileChangedHandler} className="" />
      {previewUrl && <img className="mt-4" src={previewUrl} alt="Preview" />}
    </div>
  );
};

export default ImageUploader;
