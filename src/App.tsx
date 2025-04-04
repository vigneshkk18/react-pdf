import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const file = "/doittoday.pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.5.207/pdf.worker.js`;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function App() {
  return (
    <div className="w-full h-screen py-2 bg-gray-200 grid place-items-center overflow-y-auto">
      <Document
        className="shadow-2xl rounded-lg flex flex-col gap-4"
        file={file}
        onLoadSuccess={console.log}
        onLoadError={console.log}
        onLoadProgress={console.log}
        onLoadedData={console.log}
        onLoadedMetadata={console.log}
        onContextMenu={console.log}
      >
        <Page pageNumber={21} width={window.innerWidth - 100} />
        <Page pageNumber={22} width={window.innerWidth - 100} />
      </Document>
    </div>
  );
}

export default App;
