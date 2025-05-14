import { useEffect } from 'react';

const DownloadAndRedirect: React.FC<{ fileUrl: string; fileName: string }> = ({
  fileUrl,
  fileName,
}) => {
  console.log(fileUrl, fileName);
  useEffect(() => {
    if (!fileUrl) return;

    // Open the file in a new tab
    const newTab = window.open(fileUrl, '_blank');

    // Auto trigger download in the current tab as fallback
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();

    // Optional: close new tab after few seconds (in case it's an image or PDF preview)
    // setTimeout(() => {
    //   newTab?.close();
    // }, 3000); // Adjust timing if needed
  }, [fileUrl, fileName]);

  return null;
};

export default DownloadAndRedirect;
