const flagBaseUrl = "https://flagcdn.com/24x18";

export const getFlagUrl = (countryCode) => {
  return `${flagBaseUrl}/${countryCode}.png`;
};
