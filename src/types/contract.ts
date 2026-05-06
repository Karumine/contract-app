export type TransferMethod = 'cashier' | 'company-cheque' | 'transfer' | 'other';

export interface ContractFormData {
  // ข้อมูลทั่วไป
  drawCount: string;
  paperNo: string;
  docDate: string;
  contractNo: string;
  contractAlias: string;

  // คู่สัญญา
  lender1: string;
  lender2: string;
  borrowerName: string;

  // รายละเอียดเงินกู้
  drawDate: string;
  amount: string;
  fee: string;
  purpose: string;

  // วิธีโอนเงิน
  transferMethod: TransferMethod;
  transferBank: string;
  transferAccount: string;
  transferAccountName: string;
  transferOther: string;

  // เงื่อนไขชำระ
  interestRate: string;
  interestPeriod: string;
  repayDate: string;
  docDetail: string;

  // ผู้ลงนาม
  signerName: string;
  signerRole: string;

  // เอกสารหมายเลข 7
  receiveDate: string;
  receiveAmount: string;
  refDrawDate: string;
}

export const initialFormData: ContractFormData = {
  drawCount: '1',
  paperNo: '1/1',
  docDate: '30 เมษายน 2569',
  contractNo: 'AGA/17-PL112025',
  contractAlias: 'สัญญาให้สินเชื่อ',

  lender1: 'บริษัท อาไจล์ แอสเซ็ทส์ จำกัด',
  lender2: 'บริษัท ฐิติกร จำกัด (มหาชน)',
  borrowerName: 'บริษัท โปรเทคฟิลด์ จำกัด',

  drawDate: '5 พฤษภาคม 2569',
  amount: '20,000,000',
  fee: '100,000',
  purpose: 'เพื่อใช้เป็นเงินทุนหมุนเวียนในการดำเนินธุรกิจของบริษัท',

  transferMethod: 'cashier',
  transferBank: 'ธนาคารกรุงไทย',
  transferAccount: '123-4-56789-0',
  transferAccountName: 'บจก. โปรเทคฟิลด์',
  transferOther: '',

  interestRate: '1.25',
  interestPeriod: 'ชำระทั้งจำนวนเมื่อครบกำหนดชำระเงินต้น',
  repayDate: '1 พฤศจิกายน 2569',
  docDetail: 'หนังสือรับรองบริษัท บอจ.5 และสำเนาบัตรประชาชนผู้มีอำนาจลงนาม',

  signerName: 'นายพรรษา เริงพิทยา',
  signerRole: 'กรรมการผู้มีอำนาจลงนาม',

  receiveDate: '5 พฤษภาคม 2569',
  receiveAmount: '20,000,000',
  refDrawDate: '30 เมษายน 2569',
};
