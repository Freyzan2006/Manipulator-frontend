// import React from "react";
// import { Typography, Box } from "@mui/material";
// import { Command } from "@/features/command";
// import { Manipulator } from "@/features/manipulator";

// export const HomePage: React.FC = () => {

//   return (
//     <Box textAlign="center" mt={10} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={3}>
//         <Typography variant="h4">Добро пожаловать в интерфейс управления</Typography>

//         <Command />
//         <Manipulator  />

//     </Box>
//   );
// };

import React from "react";
import { Typography, Box, Paper, Divider } from "@mui/material";
import { Command } from "@/features/command";
import { Manipulator } from "@/features/manipulator";
import ScienceIcon from "@mui/icons-material/Science";

export const HomePage: React.FC = () => {
  return (
    <Box
      px={3}
      py={5}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={4}
      sx={{
        backgroundColor: "#121212", // тёмная тема
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <Box display="flex" alignItems="center" gap={2}>
        <ScienceIcon fontSize="large" color="primary" />
        <Typography variant="h4" component="h1">
          Панель управления манипулятором
        </Typography>
      </Box>

      <Typography variant="subtitle1" color="gray">
        Лаборатория X-12, сектор B
      </Typography>

      <Divider sx={{ width: "100%", maxWidth: 800, borderColor: "#444" }} />

      <Paper elevation={3} sx={{ p: 3, width: "100%", maxWidth: 800, bgcolor: "#1e1e1e" }}>
        <Command />
      </Paper>

      <Paper elevation={3} sx={{ p: 3, width: "100%", maxWidth: 800, bgcolor: "#1e1e1e" }}>
        <Manipulator />
      </Paper>
    </Box>
  );
};

export default HomePage;
