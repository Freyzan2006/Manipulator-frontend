import { History } from "@/features/history";
import { Box, Typography, Paper } from "@mui/material";

export const HistoryPage: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="90vh">
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          bgcolor: "#2b2b2b",
          color: "white",
          width: "95%",
          maxWidth: "1200px",
        }}
      >
        <Typography variant="h4" color="primary" gutterBottom textAlign="center">
          История выполнения команд
        </Typography>

        <History />
      </Paper>
    </Box>
  );
};

export default HistoryPage;
