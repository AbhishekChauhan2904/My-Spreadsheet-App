import { useSpreadsheet } from '../Spreadsheet';
import { useState, useEffect } from 'react';
import Cell from './Cell';

export default function Grid() {
  const { grid } = useSpreadsheet();
  const [page, setPage] = useState(0);
  const [columns, setColumns] = useState(10); 

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setColumns(5); // For small screens like mobile devices
      } else if (window.innerWidth < 768) {
        setColumns(7); // For medium screens like tablets
      } else {
        setColumns(10); // For larger screens like desktops
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);

    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const pageSize = columns * 10; // 10 rows per page
  const handleNextPage = () => {
    if ((page + 1) * pageSize < grid.length) setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const paginatedGrid = grid.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <div>
      <div className={`grid grid-cols-${columns} gap-1 p-4`}>
        {paginatedGrid.map((cellValue, index) => (
          <Cell key={index} index={page * pageSize + index} value={cellValue} />
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={handlePrevPage} disabled={page === 0} className="btn">Previous</button>
        <button onClick={handleNextPage} disabled={(page + 1) * pageSize >= grid.length} className="btn">Next</button>
      </div>
    </div>
  );
}
