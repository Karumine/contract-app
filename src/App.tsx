import { useCallback, useState, useEffect, useRef } from 'react';
import type { ContractFormData } from './types/contract';
import { initialFormData } from './types/contract';
import { FormPanel } from './components/FormPanel';
import { DocumentPreview, DocumentPreviewHandle } from './components/DocumentPreview';
import { usePrintShortcut } from './hooks/usePrintShortcut';

function App() {
  const [data, setData] = useState<ContractFormData>(initialFormData);
  const [sidebarWidth, setSidebarWidth] = useState(460);
  const [isResizing, setIsResizing] = useState(false);
  const [zoom, setZoom] = useState(1);
  const previewRef = useRef<DocumentPreviewHandle>(null);

  const handleChange = useCallback(
    <K extends keyof ContractFormData>(key: K, value: ContractFormData[K]) => {
      setData((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handleReset = useCallback(() => setData(initialFormData), []);
  const handlePrint = useCallback(() => window.print(), []);

  usePrintShortcut(handlePrint);

  const startResizing = useCallback(() => setIsResizing(true), []);
  const stopResizing = useCallback(() => setIsResizing(false), []);

  const resize = useCallback(
    (e: MouseEvent) => {
      if (isResizing) {
        const newWidth = Math.max(300, Math.min(e.clientX, 800));
        setSidebarWidth(newWidth);
      }
    },
    [isResizing]
  );

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', stopResizing);
    }
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [isResizing, resize, stopResizing]);

  const handleFocusSection = useCallback((section: string) => {
    previewRef.current?.scrollToSection(section);
  }, []);

  return (
    <div
      className="app-shell"
      style={{ gridTemplateColumns: `${sidebarWidth}px 6px 1fr` }}
    >
      <FormPanel
        data={data}
        onChange={handleChange}
        onReset={handleReset}
        onPrint={handlePrint}
        sidebarWidth={sidebarWidth}
        onFocusSection={handleFocusSection}
      />
      <div className="resizer" onMouseDown={startResizing} />
      <DocumentPreview
        ref={previewRef}
        data={data}
        zoom={zoom}
        onZoomChange={setZoom}
      />
    </div>
  );
}

export default App;
