import type { RootState } from "@/common/store";
import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";


export const ProfilePage: React.FC = () => {
    const { isAuthenticated, username } = useSelector((state: RootState) => state.auth);
    return (
        <Box textAlign="center" mt={10}>
            <Typography variant="h4">Профиль</Typography>
            {isAuthenticated && <Typography variant="h5">{username}</Typography>}
            <Button onClick={() => {}} sx={{ mt: 4 }} variant="outlined">
                Выйти
            </Button>
        </Box>
    );
}