export const formatThaiDate = (dateString: string): string => {
  if (!dateString || !dateString.includes('-')) return dateString;

  const [year, month, day] = dateString.split('-');
  const thaiMonths = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
  ];

  const thaiYear = parseInt(year) + 543;
  const monthName = thaiMonths[parseInt(month) - 1];

  return `${parseInt(day)} ${monthName} ${thaiYear}`;
};
