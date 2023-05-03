export const downloadPdf = async (urlPDF) => {
  const response = await fetch(urlPDF);
  const blob = await response.blob();
  const file = new File([blob], "archivo.pdf", { type: "application/pdf" });
  return file;
};
