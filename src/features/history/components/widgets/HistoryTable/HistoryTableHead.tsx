import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";

const columns = [
  { id: "raw", label: "Исходная команда", minWidth: 150 },
  { id: "optimized", label: "Оптимизированная", minWidth: 150 },
  { id: "startedAt", label: "Начало", minWidth: 170 },
  { id: "finishedAt", label: "Конец", minWidth: 170 },
  { id: "beforePosition", label: "До", minWidth: 120 },
  { id: "afterPosition", label: "После", minWidth: 120 },
  { id: "beforeSamples", label: "Образцы до", minWidth: 150 },
  { id: "afterSamples", label: "Образцы после", minWidth: 150 },
];

export const HistoryTableHead: React.FC = () => (
  <TableHead>
    <TableRow>
      {columns.map(col => (
        <TableCell
          key={col.id}
          style={{ minWidth: col.minWidth }}
          sx={{ backgroundColor: "#2c2c2c", color: "white", fontWeight: "bold" }}
          align="center"
        >
          {col.label}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

export default HistoryTableHead;
