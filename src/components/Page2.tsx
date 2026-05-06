import type { FC } from 'react';
import type { ContractFormData } from '../types/contract';
import { LetterheadTop, LetterheadBottom } from './Letterhead';

interface Page2Props {
  data: ContractFormData;
}

export const Page2: FC<Page2Props> = ({ data }) => (
  <div className="page">
    <LetterheadTop />

    <div className="body-content">
      <div className="numbered-para">
        <div className="num-col">3.</div>
        <div>
          ข้าพเจ้าขอยืนยันว่า คำรับรองและยืนยันที่ระบุไว้ในข้อ 9. ของสัญญาให้สินเชื่อ
          เป็นความจริงและถูกต้อง ณ วันที่ที่ระบุไว้ในคำขอเบิกใช้สินเชื่อนี้เสมือนหนึ่งว่าคำรับรองและยืนยันดังกล่าวได้ทำขึ้นโดยอ้างอิงถึงข้อเท็จจริง
          และเหตุการณ์ที่เกิดขึ้น หรือที่เป็นอยู่จริง ณ ขณะนี้ และไม่มีกรณีเหตุผิดนัด
          และเหตุการณ์ที่อาจจะนำไปสู่เหตุผิดนัดเกิดขึ้น หรือกำลังจะเกิดขึ้น
          หรือจะมีเหตุผิดนัดหรือเหตุการณ์ที่อาจจะนำไปสู่เหตุผิดนัดเกิดขึ้นเนื่องมาจากการเบิกใช้สินเชื่อที่ให้ในครั้งนี้
        </div>
      </div>

      <div className="signature-area">
        <div className="sig-left">
          <div className="sig-line-stamp">ประทับตราบริษัท (ถ้ามี)</div>
        </div>
        <div className="sig-right">
          <div className="closing">ขอแสดงความนับถือ</div>
          <div className="company-line highlight-ref">{data.borrowerName}</div>
          <div className="sig-line-dotted" />
          <div className="sig-detail">
            <div className="sig-detail-label">ชื่อ:</div>
            <div className="sig-detail-value">{data.signerName}</div>
            <div className="sig-detail-label">ตำแหน่ง:</div>
            <div className="sig-detail-value">{data.signerRole}</div>
          </div>
        </div>
      </div>
    </div>

    <LetterheadBottom />
  </div>
);
