import { Box, Typography } from "@mui/material";
import { ManipulatorGrid } from "../ux/ManipulatorGrid";
import { ManipulatorExecutionList } from "../ux/ManipulatorExecutionList";



export const Manipulator: React.FC = () => {
    

    return (
        <Box maxWidth={800} >
            <Typography variant="h5">Манипулятор</Typography>


            <Box width={"100%"} display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"start"} gap={2} mt={2} flexWrap={"wrap"}>
                <ManipulatorGrid />
                <ManipulatorExecutionList />
            </Box>

        </Box>
    );
};