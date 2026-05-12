import { useRef, useImperativeHandle, forwardRef } from 'react';
import type { ContractFormData } from '../types/contract';
import { Page1 } from './Page1';
import { Page3 } from './Page3';

interface DocumentPreviewProps {
  data: ContractFormData;
  zoom: number;
  onZoomChange: (zoom: number) => void;
}

export interface DocumentPreviewHandle {
  scrollToSection: (sectionId: string) => void;
}

export const DocumentPreview = forwardRef<DocumentPreviewHandle, DocumentPreviewProps>(
  ({ data, zoom, onZoomChange }, ref) => {
    const bodyRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      scrollToSection: (sectionId: string) => {
        const target = bodyRef.current?.querySelector(`#${sectionId}`) as HTMLElement;
        const container = bodyRef.current;
        if (target && container) {
          const targetRect = target.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const relativeTop = targetRect.top - containerRect.top;
          const scrollTarget = container.scrollTop + relativeTop;

          container.scrollTo({
            top: scrollTarget - 20, // offset for padding
            behavior: 'smooth',
          });
        }
      },
    }));
  const handleZoomIn = () => onZoomChange(Math.min(zoom + 0.1, 2));
  const handleZoomOut = () => onZoomChange(Math.max(zoom - 0.1, 0.5));
  const handleZoomReset = () => onZoomChange(1);

  return (
    <main className="preview-panel">
      <div className="preview-header">
        <div className="label">— ตัวอย่างเอกสาร —</div>
        <div className="zoom-controls">
          <button onClick={handleZoomOut} title="ย่อ">-</button>
          <span className="zoom-value">{Math.round(zoom * 100)}%</span>
          <button onClick={handleZoomIn} title="ขยาย">+</button>
          <button onClick={handleZoomReset} className="reset-btn">รีเซ็ต</button>
        </div>
        <div className="page-indicator">
          <span>1</span>
          <span>2</span>
        </div>
      </div>

      <div className="preview-body" ref={bodyRef}>
        <div
          className="document-scroller"
          style={{ '--zoom': zoom } as React.CSSProperties}
        >
          <div className="document">
            <Page1 data={data} />
            <Page3 data={data} />
          </div>
        </div>
      </div>
    </main>
  );
});
