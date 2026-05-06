import type { FC } from 'react';
import type { ContractFormData } from '../types/contract';
import { Page1 } from './Page1';
import { Page3 } from './Page3';

interface DocumentPreviewProps {
  data: ContractFormData;
}

export const DocumentPreview: FC<DocumentPreviewProps> = ({ data }) => (
  <main className="preview-panel">
    <div className="preview-header">
      <div className="label">— ตัวอย่างเอกสาร —</div>
      <div className="page-indicator">
        <span>1</span>
        <span>2</span>
      </div>
    </div>

    <div className="document">
      <Page1 data={data} />
      <Page3 data={data} />
    </div>
  </main>
);
