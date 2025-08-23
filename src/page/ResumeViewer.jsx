// src/page/ResumeViewer.jsx
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  FaDownload,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaExpand,
  FaCompress,
} from "react-icons/fa";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// ✅ Local worker import for Vite
import pdfWorker from "pdfjs-dist/build/pdf.worker.js?url";
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

const ResumeViewer = ({ setShowResume }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [fullscreen, setFullscreen] = useState(false);

  const resumeUrl = "/resume.pdf"; // make sure public/resume.pdf exists

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Md_Sajjad_Hossen_Resume.pdf";
    link.click();
  };

  return (
    <div
      className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex flex-col ${
        fullscreen ? "p-0" : "p-4"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-gray-900 border-b border-gray-700">
        <h3 className="text-xl font-bold text-yellow-400">My Resume</h3>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setScale((s) => Math.max(s - 0.2, 0.5))}
            className="p-2 rounded-full text-white hover:bg-gray-800"
          >
            -
          </button>
          <span className="text-white text-sm">{Math.round(scale * 100)}%</span>
          <button
            onClick={() => setScale((s) => Math.min(s + 0.2, 3))}
            className="p-2 rounded-full text-white hover:bg-gray-800"
          >
            +
          </button>
          <button
            onClick={() => setFullscreen(!fullscreen)}
            className="p-2 rounded-full text-white hover:bg-gray-800"
          >
            {fullscreen ? <FaCompress /> : <FaExpand />}
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg"
          >
            <FaDownload /> Download
          </button>
          <button
            onClick={() => setShowResume(false)}
            className="text-white text-2xl hover:text-yellow-400"
          >
            <FaTimes />
          </button>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex-grow flex flex-col items-center justify-center overflow-auto p-4">
        <div className="w-full max-w-4xl flex flex-col items-center">
          <Document
            file={resumeUrl}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            <Page pageNumber={pageNumber} scale={scale} />
          </Document>

          {numPages && (
            <div className="flex items-center justify-center mt-6 space-x-6">
              <button
                onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
                disabled={pageNumber <= 1}
                className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-40"
              >
                <FaArrowLeft />
              </button>

              <span className="text-white">
                Page {pageNumber} of {numPages}
              </span>

              <button
                onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))}
                disabled={pageNumber >= numPages}
                className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-40"
              >
                <FaArrowRight />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;
