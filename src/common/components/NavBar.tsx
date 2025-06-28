import React from "react";
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/features/auth/slices/authSlice.slice";
import type { AppDispatch, RootState } from "../store";
import { NavLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import { SideBar } from "@common/components/SideBar";

/**
 * Компонент навигации
 */
export const NavBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const handleMenu = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLogout = () => {
    dispatch(logout());
    handleClose();
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#1f1f1f" }}>
        <Toolbar>
          {isAuthenticated && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
              onClick={() => setSidebarOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            {isAuthenticated ? "Панель управления" : "Вход в систему"}
          </Typography>

          {isAuthenticated && (
            <>
              <IconButton size="large" color="inherit" onClick={handleMenu}>
                <AccountCircle />
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem component={NavLink} to="/profile" onClick={handleClose}>
                  Профиль
                </MenuItem>
                <MenuItem onClick={handleLogout}>Выйти</MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>

      <SideBar open={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};
