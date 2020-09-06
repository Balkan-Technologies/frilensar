import React, { useState } from 'react';
import {Container} from "reactstrap";
import { pdfjs, Document, Page } from 'react-pdf';
import styled from 'styled-components';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function convertToSecureSrc(src) {
  // Niste rupti
  return src.replace('http://', 'https://');
}

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
`;
function PDFViewer({ block }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const { attributes: { url } } = block;

  if (typeof window === 'undefined') {
    return null;
  }
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Wrapper>
      <Document
        file={convertToSecureSrc(url)}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {numPages && [...Array(numPages)].map((i, idx) => (
          <Page size="A4" pageNumber={idx + 1}/>
        ))}
      </Document>
    </Wrapper>
  );
}

export default PDFViewer;
