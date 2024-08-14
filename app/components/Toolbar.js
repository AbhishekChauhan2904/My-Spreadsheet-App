'use client';

import React, { useState } from 'react';
import { useSpreadsheet } from '../Spreadsheet';

export default function Toolbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const { setAlignment, setFontSize, undo, redo, setSearchFilter } = useSpreadsheet();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setSearchFilter(e.target.value);
  };

  return (
    <div className="flex flex-wrap space-x-2 space-y-2 p-2 justify-center md:justify-start">
      <button className="btn" onClick={() => undo()} style={{marginLeft:'10px', marginTop:"8px"}}>Undo</button>
      <button className="btn" onClick={() => redo()}>Redo</button>
      <button className="btn" onClick={() => setAlignment('left')}>Left</button>
      <button className="btn" onClick={() => setAlignment('center')}>Center</button>
      <button className="btn" onClick={() => setAlignment('right')}>Right</button>
      <button className="btn" onClick={() => setFontSize('text-sm')}>Small</button>
      <button className="btn" onClick={() => setFontSize('text-base')}>Medium</button>
      <button className="btn" onClick={() => setFontSize('text-lg')}>Large</button>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        className="border p-2 rounded flex-grow md:flex-grow-0"
       />
    </div>
  );
}
