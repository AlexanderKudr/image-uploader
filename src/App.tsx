import Box from "./components/Box";
import Card from "./components/Card";
import Upload from "./components/icons/Upload";
import Spinner from "./components/Spinner";
import Text from "./components/Text";
import { useImages } from "./hooks/useImages";

export default function App() {
  const { images, loading, imageUrls, onImageChange, onDrop, onDragOver, copyToClipboard, copied } =
    useImages();

  const head = (
    <Box className="head">
      <h1>Upload your image</h1>
      <Text>jpeg, png... formats</Text>
    </Box>
  );
  const dropSection = (
    <Box className="drop-section" onDrop={onDrop} onDragOver={onDragOver}>
      <Upload />
      <Text>Drop your image</Text>
    </Box>
  );
  const chooseFile = (
    <Box className="choose-file">
      <Text>Or</Text>
      <input onChange={onImageChange} type="file" id="upload" hidden accept="image/*" />
      <label htmlFor="upload" className="button">
        Choose a file
      </label>
    </Box>
  );
  const renderImage = (
    <Box className="image-container">
      <h1 className="head">Success!</h1>
      {imageUrls.map((url, index) => (
        <img className="image" key={index} src={url} alt="uploaded" />
      ))}
      <button onClick={copyToClipboard}>{copied === true ? "Copied" : "Copy link"}</button>
    </Box>
  );

  return (
    <Box className="app">
      <Card className="card">
        {loading ? (
          <Box className="updating">
            <Text>Updating</Text>
            <Spinner className="spinner" />
          </Box>
        ) : images.length === 0 ? (
          <>
            {head}
            {dropSection}
            {chooseFile}
          </>
        ) : (
          <>{renderImage}</>
        )}
      </Card>
    </Box>
  );
}
