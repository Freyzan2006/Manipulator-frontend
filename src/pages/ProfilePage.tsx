import type { RootState } from "@/common/store";
import { Box, Button, Typography, Paper, Avatar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/features/auth";
import PersonIcon from "@mui/icons-material/Person";

export const ProfilePage: React.FC = () => {
  const { isAuthenticated, username } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          minWidth: 300,
          textAlign: "center",
          bgcolor: "#2b2b2b",
          color: "white",
        }}
      >
        <Avatar sx={{ bgcolor: "primary.main", mx: "auto", mb: 2 }}>
          <PersonIcon />
        </Avatar>
        <Typography variant="h5" gutterBottom>
          Профиль пользователя
        </Typography>
        {isAuthenticated && (
          <Typography variant="h6" color="primary.light">
            {username}
          </Typography>
        )}
        <Button onClick={() => dispatch(logout())} sx={{ mt: 4 }} variant="outlined" color="error">
          Выйти
        </Button>
      </Paper>
    </Box>
  );
};

export default ProfilePage;
