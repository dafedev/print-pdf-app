import React, { useEffect } from "react";
import { downloadPdf } from "./Utils";

function App() {
  const urlPDF = "http://localhost:3001/pdf";

  const printPdf = async () => {
    const pdfFile = await downloadPdf(urlPDF);
    const fileURL = URL.createObjectURL(pdfFile);
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = fileURL;
    document.body.appendChild(iframe);
    iframe.contentWindow.print();
  };

  useEffect(() => {
    printPdf();
  }, []);

  return <></>;
}

export default App;
