import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-4">{t("about.title")}</h2>
      
      {/* Description */}
      <p className="text-lg leading-7 mb-4">{t("about_description")}</p>
      
      {/* Vision */}
      <h3 className="text-2xl font-semibold mb-2">{t("vision_title")}</h3>
      <p className="text-lg leading-7 mb-4">{t("vision_description")}</p>
      
      {/* Principles */}
      <h3 className="text-2xl font-semibold mb-2">{t("principles_title")}</h3>
      <ul className="text-lg leading-7 mb-4">
        {t("principles_list", { returnObjects: true }).map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
      
      {/* Technologies */}
      <h3 className="text-2xl font-semibold mb-2">{t("technologies_title")}</h3>
      <ul className="text-lg leading-7 mb-4">
        {t("technologies_list", { returnObjects: true }).map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
      
      {/* AI */}
      <h3 className="text-2xl font-semibold mb-2">{t("ai_title")}</h3>
      <p className="text-lg leading-7 mb-4">{t("ai_future_title")}</p>
      <ul className="text-lg leading-7 mb-4">
        {t("ai_future_list", { returnObjects: true }).map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
      
      {/* Commitment */}
      <h3 className="text-2xl font-semibold mb-2">{t("commitment_title")}</h3>
      <p className="text-lg leading-7">{t("commitment_description")}</p>
    </section>
  );
}

export default About;
