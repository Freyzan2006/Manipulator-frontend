import React from "react";
import { Typography, Box } from "@mui/material";
import { Command } from "@/features/command";
import { Manipulator } from "@/features/manipulator";







export const HomePage: React.FC = () => {
  

  return (
    <Box textAlign="center" mt={10} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={3}>
        <Typography variant="h4">Добро пожаловать в интерфейс управления</Typography>

        
        <Command />
        <Manipulator  />
        
      
      

      
    </Box>
  );
};
