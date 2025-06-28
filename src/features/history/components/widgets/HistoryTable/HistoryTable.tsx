// import React from "react";
// import {
//   Box,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TableRow,
// } from "@mui/material";
// import { useSelector } from "react-redux";
// import type { RootState } from "@/common/store";

// const columns = [
//   { id: "raw", label: "Исходная команда", minWidth: 150 },
//   { id: "optimized", label: "Оптимизированная", minWidth: 150 },
//   { id: "startedAt", label: "Начало", minWidth: 170 },
//   { id: "finishedAt", label: "Конец", minWidth: 170 },
//   { id: "beforePosition", label: "До", minWidth: 120 },
//   { id: "afterPosition", label: "После", minWidth: 120 },
//   { id: "beforeSamples", label: "Образцы до", minWidth: 150 },
//   { id: "afterSamples", label: "Образцы после", minWidth: 150 },
// ];

// export function HistoryTable() {
//   const history = useSelector((state: RootState) => state.history.entries);

//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (_: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper sx={{ width: "100%", overflow: "hidden", bgcolor: "#1e1e1e", color: "white" }}>
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader>
//           <TableHead>
//             <TableRow>
//               {columns.map(col => (
//                 <TableCell
//                   key={col.id}
//                   style={{ minWidth: col.minWidth }}
//                   sx={{ backgroundColor: "#2c2c2c", color: "white", fontWeight: "bold" }}
//                   align="center"
//                 >
//                   {col.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {history.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
//               <TableRow
//                 key={row.id}
//                 hover
//                 sx={{
//                   "&:hover": {
//                     backgroundColor: "#333",
//                   },
//                 }}
//               >
//                 <TableCell align="center" sx={{ color: "white" }}>
//                   {row.raw}
//                 </TableCell>
//                 <TableCell align="center" sx={{ color: "white" }}>
//                   {row.optimized}
//                 </TableCell>
//                 <TableCell align="center" sx={{ color: "white" }}>
//                   {new Date(row.startedAt).toLocaleString()}
//                 </TableCell>
//                 <TableCell align="center" sx={{ color: "white" }}>
//                   {new Date(row.finishedAt).toLocaleString()}
//                 </TableCell>
//                 <TableCell align="center" sx={{ color: "white" }}>
//                   {row.beforePosition.join(", ")}
//                 </TableCell>
//                 <TableCell align="center" sx={{ color: "white" }}>
//                   {row.afterPosition.join(", ")}
//                 </TableCell>

//                 {/* Сетка до */}
//                 <TableCell align="center">
//                   <SampleGrid samples={row.beforeSamples} />
//                 </TableCell>

//                 {/* Сетка после */}
//                 <TableCell align="center">
//                   <SampleGrid samples={row.afterSamples} />
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={history.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//         sx={{ color: "white", bgcolor: "#2c2c2c" }}
//       />
//     </Paper>
//   );
// }

import React from "react";
import { useSelector } from "react-redux";
import { Paper, Table, TableBody, TableContainer, TablePagination } from "@mui/material";
import type { RootState } from "@/common/store";
import { HistoryTableHead } from "./HistoryTableHead";
import { HistoryTableRow } from "./HistoryTableRow";

export function HistoryTable() {
  const history = useSelector((state: RootState) => state.history.entries);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", bgcolor: "#1e1e1e", color: "white" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <HistoryTableHead />
          <TableBody>
            {history.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
              <HistoryTableRow key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={history.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ color: "white", bgcolor: "#2c2c2c" }}
      />
    </Paper>
  );
}
