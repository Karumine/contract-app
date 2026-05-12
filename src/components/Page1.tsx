import type { FC } from 'react';
import type { ContractFormData, TransferMethod } from '../types/contract';
import { LetterheadTop, LetterheadBottom } from './Letterhead';
import { formatThaiDate } from '../utils/date';

interface PageProps {
  data: ContractFormData;
}

interface CheckboxOptionProps {
  active: boolean;
  children: React.ReactNode;
}

const CheckboxOption: FC<CheckboxOptionProps> = ({ active, children }) => (
  <div className="doc-checkbox-row">
    <span className={`doc-checkbox${active ? ' checked' : ''}`} />
    <span>{children}</span>
  </div>
);

const FillLine: FC<{
  size?: 'tiny' | 'medium' | 'long' | 'full';
  children: React.ReactNode;
}> = ({ size, children }) => (
  <span className={`fill-line${size ? ` ${size}` : ''}`}>{children || '_________'}</span>
);

export const Page1: FC<PageProps> = ({ data }) => {
  const isMethod = (m: TransferMethod) => data.transferMethod === m;

  // ขึ้นอยู่กับวิธี — ใช้ค่าจริงถ้าตรงกับวิธี ไม่งั้นเป็นเส้นว่าง
  const valueIfMethod = (m: TransferMethod, value: string) =>
    isMethod(m) ? value : '_________';

  return (
    <div className="page">
      <LetterheadTop />

      <div className="body-content" id="page1-content">
        <div className="doc-title-block" id="section-1">
          <div className="doc-label">เอกสารแนบท้ายหมายเลข 6</div>
          <div className="doc-name">
            หนังสือขอเบิกใช้สินเชื่อ ครั้งที่{' '}
            <span className="underline-field">{data.drawCount}</span> ใบที่{' '}
            <span className="underline-field">{data.paperNo}</span>
          </div>
        </div>

        <div className="date-line">
          วันที่ <span className="underline-field">{formatThaiDate(data.docDate)}</span>
        </div>

        <div className="subject-block">
          <div className="label-col">เรื่อง</div>
          <div className="content-col">
            การเบิกสินเชื่อตามสัญญาให้สินเชื่อหมุนเวียน แบบมีเงื่อนไข สัญญาเลขที่{' '}
            <span className="highlight-ref">{data.contractNo}</span> (&ldquo;<span className="highlight-ref">{data.contractAlias}</span>&rdquo;)
          </div>
        </div>

        <div className="subject-block">
          <div className="label-col">เรียน</div>
          <div className="content-col">
            {data.lender2 ? (
              <>
                <strong className="highlight-ref">{data.lender1}</strong> ในฐานะผู้ให้สินเชื่อฝ่ายที่ 1 และ
                <br />
                <strong className="highlight-ref">{data.lender2}</strong> ในฐานะผู้ให้สินเชื่อฝ่ายที่ 2
              </>
            ) : (
              <>
                <strong className="highlight-ref">{data.lender1}</strong> ในฐานะผู้ให้สินเชื่อ
              </>
            )}
          </div>
        </div>

        <div className="numbered-para">
          <div className="num-col">1.</div>
          <div>
            ข้าพเจ้า <span className="highlight-ref">{data.borrowerName}</span> ขออ้างถึงสัญญาให้สินเชื่อ
            และให้คำจำกัดความต่าง ๆ ที่ใช้ในสัญญาให้สินเชื่อ
            ให้มีความหมายเช่นเดียวกันกับบรรดาที่ใช้ในคำขอเบิกใช้สินเชื่อนี้
          </div>
        </div>

        <div className="numbered-para" id="section-2">
          <div className="num-col">2.</div>
          <div>ข้าพเจ้ามีความประสงค์จะเบิกเงินกู้ ดังรายละเอียดต่อไปนี้</div>
        </div>

        <div className="sub-items">
          <div className="sub-item">
            <div className="key">(ก)</div>
            <div className="val">
              วันที่เบิกใช้สินเชื่อ: <FillLine size="long">{formatThaiDate(data.drawDate)}</FillLine>
            </div>
          </div>

          <div className="sub-item">
            <div className="key">(ข)</div>
            <div className="val">
              จำนวนเงิน <FillLine size="medium">{data.amount}</FillLine> บาท (ไม่รวมภาษีมูลค่าเพิ่ม)
            </div>
          </div>

          <div className="sub-item">
            <div className="key">(ค)</div>
            <div className="val">
              ค่าธรรมเนียมในอัตราร้อยละ 0.5 ของจำนวนการเบิกใช้วงเงินในครั้งนี้:{' '}
              <FillLine size="medium">{data.fee}</FillLine> บาท
            </div>
          </div>

          <div className="sub-item">
            <div className="key">(ง)</div>
            <div className="val">
              วัตถุประสงค์การใช้สินเชื่อ: <FillLine size="full">{data.purpose}</FillLine>
            </div>
          </div>

          <div className="sub-item">
            <div className="key">(จ)</div>
            <div className="val transfer-block" id="section-4">
              ส่งมอบเงินโดย (เลือกวิธีการวิธีหนึ่ง)
              <div className="transfer-options">
                <CheckboxOption active={isMethod('cashier')}>
                  แคชเชียร์เช็ค (Cashier Cheque): <strong>ธนาคาร</strong>{' '}
                  <FillLine size="medium">
                    {valueIfMethod('cashier', data.transferBank)}
                  </FillLine>{' '}
                  สั่งจ่ายชื่อ{' '}
                  <FillLine size="medium">
                    {valueIfMethod('cashier', data.transferAccountName)}
                  </FillLine>
                </CheckboxOption>

                <CheckboxOption active={isMethod('company-cheque')}>
                  เช็คธนาคารสั่งจ่ายล่วงหน้า: <strong>ธนาคาร</strong>{' '}
                  <FillLine size="medium">
                    {valueIfMethod('company-cheque', data.transferBank)}
                  </FillLine>{' '}
                  สั่งจ่ายชื่อ{' '}
                  <FillLine size="medium">
                    {valueIfMethod('company-cheque', data.transferAccountName)}
                  </FillLine>
                </CheckboxOption>

                <CheckboxOption active={isMethod('transfer')}>
                  โอนเงินไปที่บัญชี: <strong>ธนาคาร</strong>{' '}
                  <FillLine size="medium">
                    {valueIfMethod('transfer', data.transferBank)}
                  </FillLine>{' '}
                  เลขที่บัญชี{' '}
                  <FillLine size="medium">
                    {valueIfMethod('transfer', data.transferAccount)}
                  </FillLine>
                </CheckboxOption>

                <CheckboxOption active={isMethod('other')}>
                  วิธีการอื่นใด:{' '}
                  <FillLine size="long">
                    {valueIfMethod('other', data.transferOther)}
                  </FillLine>
                </CheckboxOption>
              </div>
            </div>
          </div>

          <div id="section-5">
            <div className="sub-item">
              <div className="key">(ฉ)</div>
              <div className="val">
                อัตราดอกเบี้ย: ร้อยละ <FillLine size="tiny">{data.interestRate}</FillLine> ต่อเดือน
              </div>
            </div>

            <div className="sub-item">
              <div className="key">(ช)</div>
              <div className="val">
                ระยะเวลาชำระดอกเบี้ย: <FillLine size="long">{data.interestPeriod}</FillLine>
              </div>
            </div>

            <div className="sub-item">
              <div className="key">(ซ)</div>
              <div className="val">
                ระยะเวลาชำระคืนเงินต้น: วันที่ <FillLine size="long">{formatThaiDate(data.repayDate)}</FillLine>
              </div>
            </div>

            <div className="sub-item">
              <div className="key">(ฌ)</div>
              <div className="val multiline">
                เอกสารที่เกี่ยวข้องกับลูกค้าของผู้กู้ที่ผู้กู้ส่งมอบให้แก่ผู้ให้สินเชื่อ ซึ่งเป็นเงื่อนไขบังคับก่อนการเบิกใช้สินเชื่อในครั้งนี้ ได้แก่เอกสารระหว่างผู้กู้และบริษัท <FillLine size="long">{data.docDetail}</FillLine>
              </div>
            </div>
          </div>
        </div>

        <p className="pt-2">
          โดยให้ถือว่าข้าพเจ้าได้รับสินเชื่อโดยชอบด้วยกฎหมายแล้วทันที เมื่อเป็นไปตามเงื่อนไขบังคับก่อนการเบิกใช้ของสัญญาให้สินเชื่อ
        </p>

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

        <div className="signature-area" id="section-6">
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
};
