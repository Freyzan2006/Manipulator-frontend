
import { History } from "@/features/history";
import { Box, Typography } from "@mui/material";
import type React from "react";



export const HistoryPage: React.FC = () => {
    return (
        <Box textAlign="center" mt={10} display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography variant="h4">История</Typography>


            <History />
        </Box>
    );
};