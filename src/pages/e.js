import React, { useRef, useState } from 'react';
import { getFirebase } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const Home = () => {
  const firebase = getFirebase();
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleUpload = async (event) => {
    if (!firebase) return;

    const uploadedFiles = event?.target.files;
    if (!uploadedFiles || uploadedFiles.length === 0) return;

    const storage = getStorage(firebase);

    try {

      const uploadPromises = Array.from(uploadedFiles).map(async (file) => {
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        await uploadTask;

        // Get the download URL after upload is complete
        const downloadURL = await getDownloadURL(storageRef);
        console.log(`Download URL for ${file.name}:`, downloadURL);

        return downloadURL;
      });

      const downloadURLs = await Promise.all(uploadPromises);

      console.log('All Download URLs:', downloadURLs);

      alert("Successfully uploaded pictures!");
    } catch (error) {
      console.error("Error uploading pictures", error);
      alert("Error uploading pictures. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      {uploading && <p>Uploading...</p>}
      <input
        id="file"
        type="file"
        name="file"
        onChange={handleUpload}
        ref={fileInputRef}
        style={{ display: 'none' }}
        multiple // Allow multiple file selection
      />
      <button onClick={handleClick} disabled={uploading}>
        Upload Images
      </button>
    </div>
  );
};

export default Home;
