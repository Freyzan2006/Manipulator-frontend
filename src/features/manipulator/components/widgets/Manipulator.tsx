import { Box, Typography, Paper } from "@mui/material";
import { ManipulatorGrid } from "../ux/ManipulatorGrid";
import { ManipulatorExecutionList } from "../ux/ManipulatorExecutionList";

export const Manipulator: React.FC = () => {
  return (
    <Box maxWidth={1000} mx="auto" mt={4}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 2,
          bgcolor: "#1e1e1e",
          boxShadow: "0 0 15px rgba(0,255,255,0.05)",
        }}
      >
        <Typography variant="h5" color="primary" textAlign="center" mb={3}>
          Панель управления манипулятором
        </Typography>

        <Box
          width="100%"
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="start"
          gap={3}
          flexWrap="wrap"
        >
          <ManipulatorGrid />
          <ManipulatorExecutionList />
        </Box>
      </Paper>
    </Box>
  );
};

export default Manipulator;
