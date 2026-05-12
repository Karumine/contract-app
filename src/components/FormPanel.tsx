import type { FC, ChangeEvent } from 'react';
import type { ContractFormData, TransferMethod } from '../types/contract';
import logo from '../assets/Logo_Agile Assets_CMYK.png';
import { CustomDatePicker } from './CustomDatePicker';

interface FormPanelProps {
  data: ContractFormData;
  onChange: <K extends keyof ContractFormData>(
    key: K,
    value: ContractFormData[K]
  ) => void;
  onReset: () => void;
  onPrint: () => void;
  sidebarWidth: number;
  onFocusSection: (section: string) => void;
}

export const FormPanel: FC<FormPanelProps> = ({
  data,
  onChange,
  onReset,
  onPrint,
  sidebarWidth,
  onFocusSection,
}) => {
  const handleInput =
    <K extends keyof ContractFormData>(key: K) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      onChange(key, e.target.value as ContractFormData[K]);
    };

  return (
    <aside className="form-panel">
      <div className="form-header">
        <div className="brand">
          <div className="brand-mark">
            <img src={logo} alt="Logo" />
          </div>
          <div className="brand-text">Agile Assets</div>
        </div>
        <h1>ระบบจัดทำเอกสารขอเบิกใช้สินเชื่อ</h1>
        <p>เอกสารแนบท้ายหมายเลข 6 และ 7</p>
      </div>

      <div className="form-body">
        {/* Section 1: ข้อมูลทั่วไป */}
        <section className="section" onFocus={() => onFocusSection('section-1')}>
          <div className="section-title">
            <span className="num">1</span> ข้อมูลทั่วไป
          </div>
          <div className="field-row">
            <div className="field">
              <label>ครั้งที่</label>
              <input
                type="text"
                value={data.drawCount}
                onChange={handleInput('drawCount')}
                placeholder="เช่น 1"
              />
            </div>
            <div className="field">
              <label>ใบที่</label>
              <input
                type="text"
                value={data.paperNo}
                onChange={handleInput('paperNo')}
                placeholder="เช่น 1/1"
              />
            </div>
          </div>
          <div onFocus={() => onFocusSection('section-1')}>
            <CustomDatePicker
              label="วันที่ทำเอกสาร"
              value={data.docDate}
              onChange={(val) => onChange('docDate', val)}
            />
          </div>
          <div className="field">
            <label>สัญญาเลขที่</label>
            <input
              type="text"
              value={data.contractNo}
              onChange={handleInput('contractNo')}
              placeholder="เช่น AGA/17-PL112025"
            />
          </div>
          <div className="field">
            <label>ชื่อสัญญา (ในวงเล็บ)</label>
            <input
              type="text"
              value={data.contractAlias}
              onChange={handleInput('contractAlias')}
              placeholder="เช่น สัญญาให้สินเชื่อ"
            />
          </div>
        </section>

        {/* Section 2: คู่สัญญา */}
        <section className="section" onFocus={() => onFocusSection('section-1')}>
          <div className="section-title">
            <span className="num">2</span> คู่สัญญา
          </div>
          <div className="field">
            <label>ผู้ให้สินเชื่อฝ่ายที่ 1</label>
            <input
              type="text"
              value={data.lender1}
              onChange={handleInput('lender1')}
              placeholder="ชื่อบริษัทผู้ให้สินเชื่อฝ่ายที่ 1"
            />
          </div>
          <div className="field">
            <label>ผู้ให้สินเชื่อฝ่ายที่ 2</label>
            <input
              type="text"
              value={data.lender2}
              onChange={handleInput('lender2')}
              placeholder="ชื่อบริษัทผู้ให้สินเชื่อฝ่ายที่ 2 (ถ้ามี)"
            />
          </div>
          <div className="field">
            <label>ผู้ขอเบิกสินเชื่อ (บริษัท)</label>
            <input
              type="text"
              value={data.borrowerName}
              onChange={handleInput('borrowerName')}
              placeholder="ชื่อบริษัทผู้ขอเบิกสินเชื่อ"
            />
          </div>
        </section>

        {/* Section 3: รายละเอียดเงินกู้ */}
        <section className="section" onFocus={() => onFocusSection('section-2')}>
          <div className="section-title">
            <span className="num">3</span> รายละเอียดการเบิกเงิน
          </div>
          <div onFocus={() => onFocusSection('section-2')}>
            <CustomDatePicker
              label="(ก) วันที่เบิกใช้สินเชื่อ"
              value={data.drawDate}
              onChange={(val) => onChange('drawDate', val)}
            />
          </div>
          <div className="field">
            <label>(ข) จำนวนเงิน (บาท ไม่รวม VAT)</label>
            <input
              type="text"
              value={data.amount}
              onChange={handleInput('amount')}
              placeholder="เช่น 20,000,000"
            />
          </div>
          <div className="field">
            <label>(ค) ค่าธรรมเนียม 0.5% (บาท)</label>
            <input
              type="text"
              value={data.fee}
              onChange={handleInput('fee')}
              placeholder="ระบุจำนวนเงินค่าธรรมเนียม"
            />
          </div>
          <div className="field">
            <label>(ง) วัตถุประสงค์การใช้สินเชื่อ</label>
            <textarea
              value={data.purpose}
              onChange={handleInput('purpose')}
              placeholder="ระบุวัตถุประสงค์การใช้เงิน"
            />
          </div>
        </section>

        {/* Section 4: วิธีโอนเงิน */}
        <section className="section" onFocus={() => onFocusSection('section-4')}>
          <div className="section-title">
            <span className="num">4</span> (จ) วิธีโอนเงิน
          </div>
          <div className="field">
            <label>วิธีการ</label>
            <select
              value={data.transferMethod}
              onChange={(e) =>
                onChange('transferMethod', e.target.value as TransferMethod)
              }
            >
              <option value="cashier">แคชเชียร์เช็ค (Cashier Cheque)</option>
              <option value="company-cheque">เช็คนามสั่งจ่ายล่วงหน้า</option>
              <option value="transfer">โอนเงินไปที่บัญชี</option>
              <option value="other">วิธีการอื่น ๆ</option>
            </select>
          </div>
          <div className="field">
            <label>ชื่อธนาคาร</label>
            <input
              type="text"
              value={data.transferBank}
              onChange={handleInput('transferBank')}
              placeholder="ชื่อธนาคาร"
            />
          </div>
          <div className="field-row">
            <div className="field">
              <label>เลขที่บัญชี (ถ้าโอน)</label>
              <input
                type="text"
                value={data.transferAccount}
                onChange={handleInput('transferAccount')}
                placeholder="ระบุเลขที่บัญชี"
              />
            </div>
            <div className="field">
              <label>ชื่อบัญชี / ผู้รับสั่งจ่าย</label>
              <input
                type="text"
                value={data.transferAccountName}
                onChange={handleInput('transferAccountName')}
                placeholder="ชื่อเจ้าของบัญชี / ผู้รับสั่งจ่าย"
              />
            </div>
          </div>
          <div className="field">
            <label>ระบุวิธีอื่น (ถ้าเลือก "อื่น ๆ")</label>
            <input
              type="text"
              value={data.transferOther}
              onChange={handleInput('transferOther')}
              placeholder="ระบุวิธีโอนเงินอื่น ๆ"
            />
          </div>
        </section>

        {/* Section 5: เงื่อนไขการชำระ */}
        <section className="section" onFocus={() => onFocusSection('section-5')}>
          <div className="section-title">
            <span className="num">5</span> เงื่อนไขการชำระ
          </div>
          <div className="field">
            <label>(ฉ) อัตราดอกเบี้ย ร้อยละ ___ ต่อเดือน</label>
            <input
              type="text"
              value={data.interestRate}
              onChange={handleInput('interestRate')}
              placeholder="เช่น 1.25"
            />
          </div>
          <div className="field">
            <label>(ช) ระยะเวลาชำระดอกเบี้ย</label>
            <input
              type="text"
              value={data.interestPeriod}
              onChange={handleInput('interestPeriod')}
              placeholder="เช่น ชำระทุกสิ้นเดือน หรือ เมื่อครบกำหนด"
            />
          </div>
          <div onFocus={() => onFocusSection('section-5')}>
            <CustomDatePicker
              label="(ซ) วันที่ชำระคืนเงินต้น"
              value={data.repayDate}
              onChange={(val) => onChange('repayDate', val)}
            />
          </div>
          <div className="field">
            <label>(ฌ) เอกสารระหว่างผู้ขอเบิกและบริษัท</label>
            <textarea
              value={data.docDetail}
              onChange={handleInput('docDetail')}
              placeholder="ระบุรายละเอียดเอกสารแนบ"
            />
          </div>
        </section>

        {/* Section 6: ผู้ลงนาม */}
        <section className="section" onFocus={() => onFocusSection('section-6')}>
          <div className="section-title">
            <span className="num">6</span> ผู้ลงนาม
          </div>
          <div className="field">
            <label>ชื่อ-สกุล ผู้ลงนาม</label>
            <input
              type="text"
              value={data.signerName}
              onChange={handleInput('signerName')}
              placeholder="ระบุชื่อ-นามสกุล ผู้ลงนาม"
            />
          </div>
          <div className="field">
            <label>ตำแหน่ง</label>
            <input
              type="text"
              value={data.signerRole}
              onChange={handleInput('signerRole')}
              placeholder="เช่น กรรมการผู้มีอำนาจลงนาม"
            />
          </div>
        </section>

        {/* Section 7: เอกสารหมายเลข 7 */}
        <section className="section" onFocus={() => onFocusSection('section-7')}>
          <div className="section-title">
            <span className="num">7</span> เอกสารแนบท้ายหมายเลข 7
          </div>
          <div onFocus={() => onFocusSection('section-7')}>
            <CustomDatePicker
              label="วันที่รับสินเชื่อ"
              value={data.receiveDate}
              onChange={(val) => onChange('receiveDate', val)}
            />
          </div>
          <div className="field">
            <label>จำนวนเงินที่รับ (บาท)</label>
            <input
              type="text"
              value={data.receiveAmount}
              onChange={handleInput('receiveAmount')}
              placeholder="เช่น 20,000,000"
            />
          </div>
          <div onFocus={() => onFocusSection('section-7')}>
            <CustomDatePicker
              label="อ้างถึงเอกสารขอเบิกใช้สินเชื่อวันที่"
              value={data.refDrawDate}
              onChange={(val) => onChange('refDrawDate', val)}
            />
          </div>
          {data.lender2 && (
            <div className="field">
              <label>ผู้ให้สินเชื่อ (สำหรับหน้า 3)</label>
              <select
                value={data.receiveLender}
                onChange={(e) =>
                  onChange('receiveLender', e.target.value as '1' | '2' | 'both')
                }
              >
                <option value="1">ผู้ให้สินเชื่อฝ่ายที่ 1 ({data.lender1})</option>
                <option value="2">ผู้ให้สินเชื่อฝ่ายที่ 2 ({data.lender2})</option>
                <option value="both">ทั้งคู่ (ฝ่ายที่ 1 / ฝ่ายที่ 2)</option>
              </select>
            </div>
          )}
        </section>
      </div>

      <div className="action-bar" style={{ width: sidebarWidth }}>
        <button
          className="btn btn-secondary"
          onClick={() => {
            if (window.confirm('ล้างข้อมูลทั้งหมดและคืนค่าเริ่มต้น?')) onReset();
          }}
        >
          ↻ รีเซ็ต
        </button>
        <button className="btn btn-primary" onClick={onPrint}>
          ⎙ พิมพ์เอกสาร
        </button>
      </div>
    </aside>
  );
};
