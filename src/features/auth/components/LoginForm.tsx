// import React from "react";
// import { useForm, type SubmitHandler } from "react-hook-form";
// import { Box, Button, TextField, Typography } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { login } from "../slices/authSlice.slice";
// import type { AppDispatch } from "@/common/store";

// interface LoginFormData {
//   username: string;
//   password: string;
// }

// export const LoginForm: React.FC = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
//     defaultValues: {
//       username: "admin",
//       password: "admin"
//     }
//   });

//   const dispatch = useDispatch<AppDispatch>();

//   const onSubmit: SubmitHandler<LoginFormData> = (data) => {
//     dispatch(login(data));
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit(onSubmit)}
//       display="flex"
//       flexDirection="column"
//       gap={2}
//       maxWidth={300}
//       margin="auto"
//       mt={10}
//     >
//       <Typography variant="h5" textAlign="center">Вход в систему</Typography>

//       <TextField
//         label="Логин"
//         {...register("username", { required: "Введите логин" })}
//         error={!!errors.username}
//         helperText={errors.username?.message}
//       />

//       <TextField
//         label="Пароль"
//         type="password"
//         {...register("password", { required: "Введите пароль" })}
//         error={!!errors.password}
//         helperText={errors.password?.message}
//       />

//       <Button type="submit" variant="contained">Войти</Button>
//     </Box>
//   );
// };

import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Box, Button, TextField, Typography, Paper, Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch } from "react-redux";
import { login } from "../slices/authSlice.slice";
import type { AppDispatch } from "@/common/store";

interface LoginFormData {
  username: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      username: "admin",
      password: "admin",
    },
  });

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<LoginFormData> = data => {
    dispatch(login(data));
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#1e1e1e"
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          maxWidth: 400,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          bgcolor: "#2b2b2b",
          color: "white",
          borderRadius: 2,
        }}
      >
        <Box textAlign="center">
          <Avatar sx={{ bgcolor: "primary.main", mx: "auto", mb: 1 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Вход в систему</Typography>
        </Box>

        <TextField
          label="Логин"
          fullWidth
          {...register("username", { required: "Введите логин" })}
          error={!!errors.username}
          helperText={errors.username?.message}
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{ style: { color: "white" } }}
        />

        <TextField
          label="Пароль"
          type="password"
          fullWidth
          {...register("password", { required: "Введите пароль" })}
          error={!!errors.password}
          helperText={errors.password?.message}
          InputLabelProps={{ style: { color: "white" } }}
          InputProps={{ style: { color: "white" } }}
        />

        <Button type="submit" variant="contained" fullWidth onClick={handleSubmit(onSubmit)}>
          Войти
        </Button>
      </Paper>
    </Box>
  );
};
