import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="p-4 shadow-md bg-white text-xl font-bold">
        LYNX Dashboard
      </header>
      <main className="p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
