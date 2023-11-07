import React, { useState } from 'react';
import styles from './styles.module.css'
import InputUpload from '../InputUpload';

const Uploader = () => {
  const [file, setFile] = useState(null);
  const [downloadFile, setDownloadFile] = useState(null);

  const handleFileChange = (e) => {
    console.log(e?.target.files)
    console.log(e?.target?.files[0])
    const selectedFile = e?.target?.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      setDownloadFile(file);
    } else {
      console.log('please upload file')
    }
  };

  const handleDownload = () => {
    if (downloadFile) {
      const url = URL.createObjectURL(downloadFile);
      const a = document.createElement('a');
      console.log(url,a ,'url');
      a.href = url;
      a.download = downloadFile.name;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className={styles.upload}>
        <InputUpload handleFileChange={handleFileChange}/>
      <div className={styles.buttons}>
        <button onClick={handleUpload} className={styles.button_style}>Upload File</button>
        <button onClick={handleDownload} className={styles.download_button}>Download File</button>
      </div>
     
    </div>
  );
};

export default Uploader;