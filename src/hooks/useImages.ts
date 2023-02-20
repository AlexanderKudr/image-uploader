import { useState, useEffect } from "react";
type DragAndDrop = React.DragEvent<HTMLDivElement>;

export const useImages = () => {
  const [images, setImages] = useState<string[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const consumeImages = () => {
    if (images.length > 0) {
      setLoading(true);
      const timeout = setTimeout(() => {
        const createFilesArray = Array.from(images) as unknown;
        const typedImages = createFilesArray as File[];
        setImageUrls(typedImages.map((image) => URL.createObjectURL(image)));
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  };

  useEffect(() => {
    consumeImages();
  }, [images]);

  const onImageChange = (e: any) => setImages([...e.target.files]);

  const onDrop = (e: DragAndDrop) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setImages(Array.from<any>(e.dataTransfer.files));
    }
  };

  const onDragOver = (e: DragAndDrop) => e.preventDefault();

  const copyToClipboard = () => {
    if (copied === false) {
      setCopied(true);
      navigator.clipboard.writeText(imageUrls.join("\n"));
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return {
    images,
    imageUrls,
    onImageChange,
    onDrop,
    onDragOver,
    loading,
    copyToClipboard,
    copied,
  };
};
