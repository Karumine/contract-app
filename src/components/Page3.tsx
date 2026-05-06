import type { FC } from 'react';
import type { ContractFormData } from '../types/contract';
import { LetterheadTop, LetterheadBottom } from './Letterhead';

interface Page3Props {
  data: ContractFormData;
}

export const Page3: FC<Page3Props> = ({ data }) => (
  <div className="page">
    <LetterheadTop />

    <div className="body-content">
      <div className="doc-title-block">
        <div className="doc-label">เอกสารแนบท้ายหมายเลข 7</div>
        <div className="doc-name">เอกสารการรับสินเชื่อ</div>
      </div>

      <div className="date-line">
        วันที่ <span className="underline-field">{data.receiveDate}</span>
      </div>

      <div className="subject-block">
        <div className="label-col">เรื่อง</div>
        <div className="content-col">
          การรับสินเชื่อตามสัญญาให้สินเชื่อหมุนเวียน แบบมีเงื่อนไข สัญญาเลขที่{' '}
          <span className="highlight-ref">{data.contractNo}</span> (&ldquo;<span className="highlight-ref">{data.contractAlias}</span>&rdquo;)
        </div>
      </div>

      <div className="subject-block">
        <div className="label-col">เรียน</div>
        <div className="content-col">
          <strong className="highlight-ref">{data.lender1}</strong> ในฐานะผู้ให้สินเชื่อฝ่ายที่ 1 และ
          <br />
          <strong className="highlight-ref">{data.lender2}</strong> ในฐานะผู้ให้สินเชื่อฝ่ายที่ 2
        </div>
      </div>

      <div className="page-3-body">
        <p>
          ตามที่ข้าพเจ้า <span className="highlight-ref">{data.borrowerName}</span>{' '}
          ได้ขอเบิกสินเชื่อต่อบริษัท อาไจล์ แอสเซ็ทส์ จำกัด ในฐานะผู้ให้สินเชื่อฝ่ายที่ 1 /
          บริษัท ฐิติกร จำกัด (มหาชน) ในฐานะผู้ให้สินเชื่อฝ่ายที่ 2 เป็นจำนวน{' '}
          <span className="inline-fill">{data.receiveAmount}</span> บาท
          ดังรายละเอียดปรากฏตามหนังสือขอเบิกใช้สินเชื่อ ฉบับลงวันที่{' '}
          <span className="inline-fill">{data.refDrawDate}</span>
        </p>

        <p>
          ในวันที่ <span className="inline-fill">{data.receiveDate}</span>{' '}
          ข้าพเจ้าได้รับสินเชื่อตามสัญญาให้สินเชื่อเป็นจำนวนเงิน{' '}
          <span className="inline-fill">{data.receiveAmount}</span> บาท จากบริษัท อาไจล์
          แอสเซ็ทส์ จำกัด ในฐานะผู้ให้สินเชื่อฝ่ายที่ 1 / บริษัท ฐิติกร จำกัด (มหาชน)
          ในฐานะผู้ให้สินเชื่อฝ่ายที่ 2 ไว้ถูกต้องเรียบร้อยแล้ว จึงลงลายมือชื่อไว้เป็นสำคัญ ณ
          วัน เดือน ปี ที่กล่าวข้างต้น
        </p>
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
