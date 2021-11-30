export const getBase64FromFile = (file: Blob, callback) => {
  // Convert file to base64
  const reader = new FileReader();
  reader.onload = (upload: any) => {
    callback(upload.target.result);
  };
  reader.readAsDataURL(file);
};
