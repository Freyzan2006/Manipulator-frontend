import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../slices/authSlice.slice";
import type { AppDispatch } from "@/common/store";


export const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: any) => {
    dispatch(login(data));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      display="flex"
      flexDirection="column"
      gap={2}
      maxWidth={300}
      margin="auto"
      mt={10}
    >
      <Typography variant="h5" textAlign="center">Вход в систему</Typography>

      <TextField
        label="Логин"
        {...register("username", { required: true })}
        error={!!errors.username}
        helperText={errors.username && "Введите логин"}
        value={"admin"}
      />

      <TextField
        label="Пароль"
        type="password"
        {...register("password", { required: true })}
        error={!!errors.password}
        helperText={errors.password && "Введите пароль"}
        value={"admin"}
      />

      <Button type="submit" variant="contained">Войти</Button>
    </Box>
  );
};
