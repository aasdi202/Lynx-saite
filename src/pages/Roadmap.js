import React from "react";
import { useTranslation } from "react-i18next";

function Roadmap() {
  const { t } = useTranslation();

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-4">{t("roadmap.title")}</h2>
      <ul className="list-disc list-inside space-y-4 text-lg leading-7">
        {t("roadmap.steps", { returnObjects: true }).map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </section>
  );
}

export default Roadmap;
