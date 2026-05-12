import { FC, useState, useEffect, useRef } from 'react';
import { formatThaiDate } from '../utils/date';

interface CustomDatePickerProps {
  value: string; // YYYY-MM-DD
  onChange: (value: string) => void;
  label: string;
}

export const CustomDatePicker: FC<CustomDatePickerProps> = ({ value, onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState(new Date(value || new Date()));
  const [showAbove, setShowAbove] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const months = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      setShowAbove(spaceBelow < 350); // Typical height of the picker
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const handleSelectDay = (day: number) => {
    const selectedDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    const isoString = selectedDate.toISOString().split('T')[0];
    onChange(isoString);
    setIsOpen(false);
  };

  const renderDays = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const totalDays = daysInMonth(year, month);
    const startDay = firstDayOfMonth(year, month);
    
    const days = [];
    // Padding for start day
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`pad-${i}`} className="calendar-day empty"></div>);
    }

    const currentSelected = value ? new Date(value) : null;

    for (let d = 1; d <= totalDays; d++) {
      const isSelected = currentSelected && 
                        currentSelected.getFullYear() === year && 
                        currentSelected.getMonth() === month && 
                        currentSelected.getDate() === d;
      
      const isToday = new Date().getFullYear() === year && 
                      new Date().getMonth() === month && 
                      new Date().getDate() === d;

      days.push(
        <div 
          key={d} 
          className={`calendar-day${isSelected ? ' selected' : ''}${isToday ? ' today' : ''}`}
          onClick={() => handleSelectDay(d)}
        >
          {d}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="custom-datepicker" ref={containerRef}>
      <label>{label}</label>
      <div className="datepicker-input" onClick={() => setIsOpen(!isOpen)}>
        <span>{formatThaiDate(value) || 'เลือกวันที่'}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      </div>

      {isOpen && (
        <div className={`datepicker-modal${showAbove ? ' show-above' : ''}`}>
          <div className="datepicker-arrow"></div>
          <div className="calendar-header">
            <button onClick={handlePrevMonth}>&lt;</button>
            <div className="current-month">
              {months[viewDate.getMonth()]} {viewDate.getFullYear() + 543}
            </div>
            <button onClick={handleNextMonth}>&gt;</button>
          </div>
          <div className="calendar-weekdays">
            <span>อา</span><span>จ</span><span>อ</span><span>พ</span><span>พฤ</span><span>ศ</span><span>ส</span>
          </div>
          <div className="calendar-grid">
            {renderDays()}
          </div>
        </div>
      )}
    </div>
  );
};
