import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Mine({ user }) {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .storage
        .from('uploads')
        .list(user.id + '/', { limit: 100 });

      if (error) {
        console.error('خطا در دریافت فایل‌ها:', error.message);
      } else {
        setFiles(data || []);
      }
      setLoading(false);
    };

    if (user?.id) fetchFiles();
  }, [user]);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">📁 فایل‌های من</h2>
      {loading ? (
        <p>در حال بارگذاری فایل‌ها...</p>
      ) : files.length === 0 ? (
        <p>هنوز هیچ فایلی آپلود نکردی.</p>
      ) : (
        <ul className="list-disc list-inside">
          {files.map((file) => (
            <li key={file.name}>
              <a
                className="text-blue-600 underline"
                href={`https://YOUR_PROJECT_ID.supabase.co/storage/v1/object/public/uploads/${user.id}/${file.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {file.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
