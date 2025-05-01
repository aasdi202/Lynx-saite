import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-center py-6 mt-10">
      <div className="container mx-auto px-4">
        <p className="text-sm">{t("footer_text")}</p>
      </div>
    </footer>
  );
}

export default Footer;
