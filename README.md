# ระบบจัดทำเอกสารขอเบิกใช้สินเชื่อ

React + TypeScript + Vite สำหรับสร้างเอกสารแนบท้ายหมายเลข 6 และ 7 ของ Agile Assets Co., Ltd.

## โครงสร้างโปรเจค

```
contract-app/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── main.tsx              # React entry point
    ├── App.tsx               # Root component (state management)
    ├── types/
    │   └── contract.ts       # TypeScript types + initial data
    ├── hooks/
    │   └── usePrintShortcut.ts  # Ctrl+P shortcut hook
    ├── components/
    │   ├── FormPanel.tsx     # Sidebar form (controlled inputs)
    │   ├── DocumentPreview.tsx  # Preview wrapper
    │   ├── Letterhead.tsx    # Letterhead (top + bottom)
    │   ├── Page1.tsx         # หน้า 1 - หนังสือขอเบิกใช้สินเชื่อ
    │   ├── Page2.tsx         # หน้า 2 - คำรับรอง + ลายเซ็น
    │   └── Page3.tsx         # หน้า 3 - เอกสารการรับสินเชื่อ
    └── styles/
        └── global.css        # Global styles + print rules
```

## วิธีติดตั้งและรัน

```bash
# ติดตั้ง dependencies
npm install

# รัน dev server (เปิดที่ http://localhost:3000)
npm run dev

# Build สำหรับ production
npm run build

# Preview production build
npm run preview
```

## Type Safety

ทุก field ของฟอร์มถูก type ไว้ใน `src/types/contract.ts`:

```typescript
export interface ContractFormData {
  drawCount: string;
  paperNo: string;
  // ... ฯลฯ
  transferMethod: TransferMethod; // 'cashier' | 'company-cheque' | 'transfer' | 'other'
}
```

`onChange` handler ใช้ generic เพื่อให้ key และ value ตรงประเภทกันเสมอ:

```typescript
const handleChange = <K extends keyof ContractFormData>(
  key: K,
  value: ContractFormData[K]
) => setData((prev) => ({ ...prev, [key]: value }));
```

## ฟีเจอร์

- 📝 ฟอร์มกรอกข้อมูล 25+ ฟิลด์ จัดกลุ่มเป็น 7 หมวด
- 👁️ พรีวิวเอกสารแบบ real-time (A4)
- ✅ Checkbox อัตโนมัติตามวิธีโอนเงินที่เลือก
- 🖨️ พิมพ์ออกกระดาษ A4 (Ctrl+P หรือกดปุ่ม)
- 🔄 ปุ่มรีเซ็ตคืนค่าเริ่มต้น
- 📱 Responsive (มือถือ/แท็บเล็ตจะเปลี่ยนเป็น layout เดียว)

## หมายเหตุ

- ข้อมูลเริ่มต้นเป็นข้อมูลตัวอย่าง สามารถแก้ใน `src/types/contract.ts` ที่ `initialFormData`
- หน้าเอกสารใช้ขนาด A4 (210mm x 297mm) พร้อม print stylesheet ที่ซ่อน sidebar เวลาพิมพ์
