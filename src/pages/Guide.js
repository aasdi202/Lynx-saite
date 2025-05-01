// src/pages/Guide.js
import React from "react";
import { useTranslation } from "react-i18next";

function Guide() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-10 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">{t("guide_title")}</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{t("guide_wallet_title")}</h2>
        <p>{t("guide_wallet_text")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{t("guide_chat_title")}</h2>
        <p>{t("guide_chat_text")}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{t("guide_token_title")}</h2>
        <p>{t("guide_token_text")}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">{t("guide_language_title")}</h2>
        <p>{t("guide_language_text")}</p>
      </section>
    </div>
  );
}

export default Guide;
