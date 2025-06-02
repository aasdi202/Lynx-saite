-import React from 'react';
+import React from 'react';
+import Header from './Header';

 const Layout = ({ children }) => {
   return (
-    <div className="min-h-screen bg-gray-100 text-gray-900">
-      <header className="p-4 shadow-md bg-white text-xl font-bold">
-        LYNX Dashboard
-      </header>
+    <div className="min-h-screen bg-gray-100 text-gray-900">
+      <Header />
       <main className="p-4">
         {children}
       </main>
     </div>
   );
 };

export default Layout;
