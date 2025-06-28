import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import HistoryIcon from "@mui/icons-material/History";
import { NavLink } from "react-router-dom";

interface SideBarProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { text: "Главная", path: "/", icon: <HomeIcon /> },
  { text: "Профиль", path: "/profile", icon: <PersonIcon /> },
  { text: "История", path: "/history", icon: <HistoryIcon /> },
];

/**
 * Компонент SideBar, левая панель навигации
 * @component
 * @name SideBar
 * @returns {JSX.Element}
 */
export const SideBar: React.FC<SideBarProps> = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 250,
          bgcolor: "#1f1f1f",
          height: "100%",
          color: "white",
        }}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <Typography variant="h6" sx={{ m: 2 }}>
          Меню
        </Typography>
        <Divider sx={{ borderColor: "#444" }} />
        <List>
          {navItems.map(({ text, path, icon }) => (
            <ListItemButton
              key={text}
              component={NavLink}
              to={path}
              sx={{
                color: "white",
                "&.active": {
                  bgcolor: "primary.main",
                  color: "light",
                  fontWeight: "bold",
                },
                "&:hover": {
                  bgcolor: "#333",
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
