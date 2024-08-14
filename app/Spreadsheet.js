'use client';

import { createContext, useContext, useState } from 'react';

const SpreadsheetContext = createContext();

export function useSpreadsheet() {
  return useContext(SpreadsheetContext);
}

export function SpreadsheetProvider({ children }) {
  const [grid, setGrid] = useState(
    Array(1000).fill({ value: '', alignment: 'left', fontSize: 'text-base' })
  );
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');

  const updateCell = (index, newValue) => {
    if (!validateCell(index, newValue.value)) {
      alert('Invalid input');
      return;
    }
    const newGrid = [...grid];
    const cell = { ...newGrid[index], ...newValue };
    newGrid[index] = cell;
    setHistory([...history, grid]);
    setGrid(newGrid);
    setFuture([]);
  };

  const validateCell = (index, value) => {
    if (index % 2 === 0 && isNaN(value)) return false;
    return true;
  };

  const setAlignment = (alignment) => {
    const newGrid = grid.map(cell => ({ ...cell, alignment }));
    setHistory([...history, grid]);
    setGrid(newGrid);
    setFuture([]);
  };

  const setFontSize = (fontSize) => {
    const newGrid = grid.map(cell => ({ ...cell, fontSize }));
    setHistory([...history, grid]);
    setGrid(newGrid);
    setFuture([]);
  };

  const undo = () => {
    if (history.length > 0) {
      const previous = history[history.length - 1];
      setHistory(history.slice(0, history.length - 1));
      setFuture([grid, ...future]);
      setGrid(previous);
    }
  };

  const redo = () => {
    if (future.length > 0) {
      const next = future[0];
      setHistory([...history, grid]);
      setFuture(future.slice(1));
      setGrid(next);
    }
  };

  const getFilteredGrid = () => {
    if (!searchFilter) return grid;
    return grid.map(cell =>
      cell.value.includes(searchFilter) ? { ...cell, highlight: true } : { ...cell, highlight: false }
    );
  };

  return (
    <SpreadsheetContext.Provider value={{
      grid: getFilteredGrid(),
      updateCell,
      setAlignment,
      setFontSize,
      undo,
      redo,
      setSearchFilter
    }}>
      {children}
    </SpreadsheetContext.Provider>
  );
}
