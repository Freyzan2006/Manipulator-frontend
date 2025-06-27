import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "@/common/store";

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

export function HistoryTable() {
  const history = useSelector((state: RootState) => state.history.entries);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col.id} style={{ minWidth: col.minWidth }}>
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {history
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.raw}</TableCell>
                  <TableCell>{row.optimized}</TableCell>
                  <TableCell>{new Date(row.startedAt).toLocaleString()}</TableCell>
                  <TableCell>{new Date(row.finishedAt).toLocaleString()}</TableCell>
                  <TableCell>{row.beforePosition.join(", ")}</TableCell>
                  <TableCell>{row.afterPosition.join(", ")}</TableCell>


                  <TableCell>
                    <div style={{ display: "grid", gridTemplateColumns: `repeat(${row.beforeSamples[0]?.length || 1}, 1em)`, gap: "2px" }}>
                      {row.beforeSamples.flatMap((rowLine, i) =>
                        rowLine.map((cell, j) => (
                          <div
                            key={`${i}-${j}`}
                            style={{
                              width: "1em",
                              height: "1em",
                              textAlign: "center",
                              border: "1px solid #ccc",
                              fontSize: "0.8em",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <div style={{ width: "100%" }}>{cell}</div>
                          </div>
                        ))
                      )}
                    </div>
                  </TableCell>

                  <TableCell>
                    <div style={{ display: "grid", gridTemplateColumns: `repeat(${row.afterSamples[0]?.length || 1}, 1em)`, gap: "2px" }}>
                      {row.afterSamples.flatMap((rowLine, i) =>
                        rowLine.map((cell, j) => (
                          <div
                            key={`${i}-${j}`}
                            style={{
                              width: "1em",
                              height: "1em",
                              textAlign: "center",
                              border: "1px solid #ccc",
                              fontSize: "0.8em",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <div style={{ width: "100%" }}>{cell}</div>
                          </div>
                        ))
                      )}
                    </div>
                  </TableCell>
                </TableRow>
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
      />
    </Paper>
  );
}
