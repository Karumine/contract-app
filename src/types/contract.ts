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
  receiveLender: '1' | '2' | 'both';
}

export const initialFormData: ContractFormData = {
  drawCount: '',
  paperNo: '',
  docDate: new Date().toISOString().split('T')[0],
  contractNo: '',
  contractAlias: 'สัญญาให้สินเชื่อ',

  lender1: '',
  lender2: '',
  borrowerName: '',

  drawDate: new Date().toISOString().split('T')[0],
  amount: '',
  fee: '',
  purpose: '',

  transferMethod: 'cashier',
  transferBank: '',
  transferAccount: '',
  transferAccountName: '',
  transferOther: '',

  interestRate: '',
  interestPeriod: '',
  repayDate: '',
  docDetail: '',

  signerName: '',
  signerRole: '',

  receiveDate: new Date().toISOString().split('T')[0],
  receiveAmount: '',
  refDrawDate: '',
  receiveLender: '1',
};
