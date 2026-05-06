import { useCallback, useState } from 'react';
import type { ContractFormData } from './types/contract';
import { initialFormData } from './types/contract';
import { FormPanel } from './components/FormPanel';
import { DocumentPreview } from './components/DocumentPreview';
import { usePrintShortcut } from './hooks/usePrintShortcut';

function App() {
  const [data, setData] = useState<ContractFormData>(initialFormData);

  const handleChange = useCallback(
    <K extends keyof ContractFormData>(key: K, value: ContractFormData[K]) => {
      setData((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const handleReset = useCallback(() => setData(initialFormData), []);

  const handlePrint = useCallback(() => window.print(), []);

  usePrintShortcut(handlePrint);

  return (
    <div className="app-shell">
      <FormPanel
        data={data}
        onChange={handleChange}
        onReset={handleReset}
        onPrint={handlePrint}
      />
      <DocumentPreview data={data} />
    </div>
  );
}

export default App;
