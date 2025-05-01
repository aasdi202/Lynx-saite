import React from "react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">{t("home.title")}</h1>
      <p className="text-lg max-w-2xl">{t("home.description")}</p>
    </section>
  );
}

export default Home;
