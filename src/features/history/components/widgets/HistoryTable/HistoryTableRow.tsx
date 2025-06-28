import React from "react";
import { TableCell, TableRow } from "@mui/material"; // предполагаем

import { SampleGrid } from "../../ux/SampleGrid";
import type { HistoryEntry } from "@/features/history/entity/history.entity";

export const HistoryTableRow: React.FC<{ row: HistoryEntry }> = ({ row }) => (
  <TableRow key={row.id} hover sx={{ "&:hover": { backgroundColor: "#333" } }}>
    <TableCell align="center" sx={{ color: "white" }}>
      {row.raw}
    </TableCell>
    <TableCell align="center" sx={{ color: "white" }}>
      {row.optimized}
    </TableCell>
    <TableCell align="center" sx={{ color: "white" }}>
      {new Date(row.startedAt).toLocaleString()}
    </TableCell>
    <TableCell align="center" sx={{ color: "white" }}>
      {new Date(row.finishedAt).toLocaleString()}
    </TableCell>
    <TableCell align="center" sx={{ color: "white" }}>
      {row.beforePosition.join(", ")}
    </TableCell>
    <TableCell align="center" sx={{ color: "white" }}>
      {row.afterPosition.join(", ")}
    </TableCell>
    <TableCell align="center">
      <SampleGrid samples={row.beforeSamples} />
    </TableCell>
    <TableCell align="center">
      <SampleGrid samples={row.afterSamples} />
    </TableCell>
  </TableRow>
);
