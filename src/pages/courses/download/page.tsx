// pages/download.tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const DownloadPage = () => {
  const router = useRouter();
  const { fileUrl, fileName } = router.query;

  useEffect(() => {
    if (!fileUrl || typeof fileUrl !== 'string' || !fileName || typeof fileName !== 'string')
      return;

    // ✅ Open file in new tab
    window.open(fileUrl, '_blank');

    // ✅ Create a download link and click
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();

    // ✅ Redirect after 2s
    setTimeout(() => {
      router.push('/next-page');
    }, 2000);
  }, [fileUrl, fileName, router]);

  return null;
};

export default DownloadPage;
