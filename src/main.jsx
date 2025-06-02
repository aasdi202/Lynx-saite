import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Mine({ user }) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const { data, error } = await supabase
        .storage
        .from('uploads')
        .list(user.id + '/', { limit: 100, offset: 0 });

      if (error) {
        alert('🟥 دریافت فایل‌ها ناموفق بود');
      } else {
        setFiles(data);
      }
    };

    fetchFiles();
  }, [user]);

  const getPublicUrl = (fileName) => {
    const { data } = supabase.storage.from('uploads').getPublicUrl(`${user.id}/${fileName}`);
    return data.publicUrl;
  };

  return (
    <div>
      <h2>📁 فایل‌های من</h2>
      <ul>
        {files.map(file => (
          <li key={file.name}>
            <a href={getPublicUrl(file.name)} target="_blank" rel="noreferrer">
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
