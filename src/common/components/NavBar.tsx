// // import * as React from "react";
// // import AppBar from "@mui/material/AppBar";
// // import Box from "@mui/material/Box";
// // import Toolbar from "@mui/material/Toolbar";
// // import Typography from "@mui/material/Typography";
// // import IconButton from "@mui/material/IconButton";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import AccountCircle from "@mui/icons-material/AccountCircle";
// // import MenuItem from "@mui/material/MenuItem";
// // import Menu from "@mui/material/Menu";
// // import { useDispatch, useSelector } from "react-redux";
// // import type { AppDispatch, RootState } from "../store";
// // import { logout } from "@/features/auth/slices/authSlice.slice";
// // import { NavLink } from "react-router-dom";

// // export function NavBar() {
// //   const dispatch = useDispatch<AppDispatch>();
// //   const { isAuthenticated } = useSelector((state: RootState) => state.auth);
// //   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

// //   const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const handleClose = () => {
// //     setAnchorEl(null);
// //   };

// //   const handleLogout = () => {
// //     dispatch(logout());
// //     handleClose();
// //   };

// //   return (
// //     <Box sx={{ flexGrow: 1 }}>
// //       <AppBar position="static">
// //         <Toolbar>
// //           <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
// //             <MenuIcon />
// //           </IconButton>
// //           <Typography variant="h6" sx={{ flexGrow: 1 }}>
// //             {isAuthenticated ? "Управление" : "Вход"}
// //           </Typography>

// //           {isAuthenticated && (
// //             <div>
// //               <IconButton
// //                 size="large"
// //                 aria-label="account"
// //                 aria-controls="menu-appbar"
// //                 aria-haspopup="true"
// //                 onClick={handleMenu}
// //                 color="inherit"
// //               >
// //                 <AccountCircle />
// //               </IconButton>
// //               <Menu
// //                 anchorEl={anchorEl}
// //                 open={Boolean(anchorEl)}
// //                 onClose={handleClose}
// //               >
// //                 <MenuItem onClick={handleClose}>
// //                     <NavLink to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
// //                         Профиль
// //                     </NavLink>
// //                 </MenuItem>

// //                 <MenuItem onClick={handleLogout}>Выйти</MenuItem>
// //               </Menu>
// //             </div>
// //           )}
// //         </Toolbar>
// //       </AppBar>
// //     </Box>
// //   );
// // }

import * as React from "react";
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/features/auth/slices/authSlice.slice";
import type { AppDispatch, RootState } from "../store";
import { NavLink } from "react-router-dom";

// export const NavBar: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { isAuthenticated } = useSelector((state: RootState) => state.auth);
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

//   const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => setAnchorEl(null);

//   const handleLogout = () => {
//     dispatch(logout());
//     handleClose();
//   };

//   return (
//     <AppBar position="static" sx={{ bgcolor: "#1f1f1f" }}>
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
//           {isAuthenticated ? "Панель управления" : "Вход в систему"}
//         </Typography>

//         {isAuthenticated && (
//           <>
//             <IconButton
//               size="large"
//               edge="end"
//               color="inherit"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleMenu}
//             >
//               <AccountCircle />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorEl}
//               anchorOrigin={{ vertical: "top", horizontal: "right" }}
//               keepMounted
//               transformOrigin={{ vertical: "top", horizontal: "right" }}
//               open={Boolean(anchorEl)}
//               onClose={handleClose}
//             >
//               <MenuItem onClick={handleClose} component={NavLink} to="/profile">
//                 Профиль
//               </MenuItem>
//               <MenuItem onClick={handleLogout}>Выйти</MenuItem>
//             </Menu>
//           </>
//         )}
//       </Toolbar>
//     </AppBar>

//   );
// };

import MenuIcon from "@mui/icons-material/Menu";
import { SideBar } from "@/common/components/SideBar"; // путь подкорректируй

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
