import { Box, Button } from "@mui/material";
import { HistoryTable } from "./HistoryTable/HistoryTable";
import { NavLink } from "react-router-dom";

export const History: React.FC = () => {
  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center" gap={3}>
      <HistoryTable />
      <Button
        size="small"
        variant="outlined"
        component={NavLink}
        to="/"
        color="info"
        sx={{ alignSelf: "flex-end" }}
      >
        Назад
      </Button>
    </Box>
  );
};

export default History;
