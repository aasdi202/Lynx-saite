import React from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-4">{t("contact.title")}</h2>
      <p className="mb-4">{t("contact.description")}</p>

      <div className="space-y-4">
        <p>{t("contact.email")}: <a href="mailto:lynx.project2025@gmail.com" className="text-blue-600">lynx.project2025@gmail.com</a></p>
        <p>{t("contact.telegram")}: <a href="https://t.me/lynxproject2025" className="text-blue-600">@lynxproject2025</a></p>
        <p>{t("contact.whatsapp")}: <a href="https://wa.me/123456789" className="text-blue-600">+1 234 567 89</a></p>
      </div>
    </section>
  );
}

export default Contact;
