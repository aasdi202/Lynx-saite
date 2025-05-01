import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-4">{t("about.title")}</h2>
      <p className="text-lg leading-7">{t("about.content")}</p>
    </section>
  );
}

export default About;
