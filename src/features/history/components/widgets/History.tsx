import { Box, Button } from "@mui/material";
import { HistoryTable } from "../ux/HistoryTable";
import { NavLink } from "react-router-dom";



export const History: React.FC = () => {
    return (
        <Box maxWidth={800} width={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={3} >
            
            <HistoryTable />
            <Button size="small" variant="outlined">
                <NavLink to="/">Назад</NavLink>
            </Button>
            
        </Box>
    );
};