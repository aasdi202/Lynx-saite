import Upload from '@/components/Upload';
import { useAuth } from '@/core/auth-context';

export default function UploadPage() {
  const { user } = useAuth();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">📤 آپلود فایل</h1>
      {user ? <Upload user={user} /> : <p>لطفاً وارد شوید</p>}
    </div>
  );
}
