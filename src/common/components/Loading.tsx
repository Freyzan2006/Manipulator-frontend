import { Box, CircularProgress } from "@mui/material";

export const Loading = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
      <CircularProgress color="primary" size={60} />
    </Box>
  );
};
