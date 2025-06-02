import { useState } from 'react';

export default function ContactID({ onAdd }) {
  const [contactId, setContactId] = useState('');

  const handleAdd = () => {
    if (!contactId.trim()) return;
    onAdd(contactId.trim());
    setContactId('');
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        value={contactId}
        onChange={(e) => setContactId(e.target.value)}
        placeholder="آی‌دی مخاطب را وارد کنید"
        className="border px-2 py-1 rounded w-full mb-2"
      />
      <button
        onClick={handleAdd}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        اضافه‌کردن مخاطب
      </button>
    </div>
  );
}
