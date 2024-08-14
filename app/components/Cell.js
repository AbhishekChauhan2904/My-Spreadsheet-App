'use client';

import React from 'react';
import { useSpreadsheet } from '../Spreadsheet';

export default function Cell({ index, value }) {
  const { updateCell } = useSpreadsheet();

  const handleBlur = (e) => {
    updateCell(index, { value: e.target.innerText });
  };

  return (
    <div
      className={`border p-2 min-w-[80px] min-h-[40px] text-center ${value.alignment} ${value.fontSize} ${value.highlight ? 'bg-yellow-200' : ''}`}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
    >
      {value.value}
    </div>
  );
}
