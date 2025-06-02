import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Upload({ user }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleUpload = async () => {
    if (!file || !user) {
      setMessage('🟥 فایل یا کاربر مشخص نیست.');
      return;
    }

    setUploading(true);
    setMessage('');

    const filePath = `${user.id}/${Date.now()}_${file.name}`;

    const { error } = await supabase.storage
      .from('uploads')
      .upload(filePath, file);

    if (error) {
      setMessage('🟥 خطا در آپلود فایل: ' + error.message);
    } else {
      const { data } = supabase.storage.from('uploads').getPublicUrl(filePath);
      setUrl(data.publicUrl);
      setMessage('✅ آپلود موفق!');
    }

    setUploading(false);
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg font-semibold mb-2">📤 آپلود فایل جدید</h2>
      <input type="file" onChange={e => setFile(e.target.files[0])} className="mb-2" />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {uploading ? 'در حال آپلود...' : 'آپلود فایل'}
      </button>

      {message && <p className="mt-2">{message}</p>}
      {url && (
        <p className="mt-2">
          لینک فایل: <a href={url} target="_blank" rel="noreferrer">{url}</a>
        </p>
      )}
    </div>
  );
}
