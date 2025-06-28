import type { AppDispatch, RootState } from "@/common/store";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setCommand } from "../slices/commandSlice.slice";
import { addCommandToExecutingList } from "@/features/manipulator";

// export const CommandInput: React.FC = () => {
//   const { allowedCommands } = useSelector((state: RootState) => state.command);

//   const dispatch = useDispatch<AppDispatch>();
//   const { control, handleSubmit, reset } = useForm({
//     defaultValues: {
//       command: "",
//     },
//   });

//   const onSubmit = (data: { command: string }) => {
//     // const optimized = optimizeCommands(data.command);

//     dispatch(setCommand(data.command));
//     dispatch(addCommandToExecutingList(data.command));

//     reset();
//   };

//   const validateCommand = (value: string) => {
//     const allowedNames = allowedCommands.map(cmd => cmd.name).join("");
//     const regex = new RegExp(`^[${allowedNames}]+$`, "i");

//     return regex.test(value)
//       ? true
//       : `Допустимы только символы: ${allowedNames.split("").join(", ")}`;
//   };

//   return (
//     <Box display="flex" flexDirection="column" gap={2} maxWidth={400} mx="auto" mt={5}>
//       <Typography variant="h6" textAlign="center">
//         Введите команды манипулятору
//       </Typography>

//       <Controller
//         control={control}
//         name="command"
//         rules={{ required: true, validate: validateCommand }}
//         render={({ field, fieldState }) => (
//           <TextField
//             {...field}
//             label="Команды (ЛПВНОБ)"
//             error={!!fieldState.error}
//             helperText={fieldState.error?.message}
//             inputProps={{ style: { textTransform: "uppercase" } }}
//           />
//         )}
//       />

//       <Button variant="contained" onClick={handleSubmit(onSubmit)}>
//         Добавить на исполнение
//       </Button>
//     </Box>
//   );
// };

export const CommandInput: React.FC = () => {
  const { allowedCommands } = useSelector((state: RootState) => state.command);
  const dispatch = useDispatch<AppDispatch>();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: { command: "" },
  });

  const onSubmit = (data: { command: string }) => {
    dispatch(setCommand(data.command));
    dispatch(addCommandToExecutingList(data.command));
    reset();
  };

  const validateCommand = (value: string) => {
    const allowed = allowedCommands.map(cmd => cmd.name).join("");
    const regex = new RegExp(`^[${allowed}]+$`, "i");
    return regex.test(value) ? true : `Допустимы только: ${allowed.split("").join(", ")}`;
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      maxWidth={400}
      mx="auto"
      bgcolor="#1e1e1e"
      p={3}
      borderRadius={2}
      boxShadow="0 0 15px rgba(0,255,255,0.05)"
    >
      <Typography variant="h6" textAlign="center" color="primary">
        Введите команды манипулятору
      </Typography>

      <Controller
        control={control}
        name="command"
        rules={{ required: true, validate: validateCommand }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Команды (ЛПВНОБ)"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            inputProps={{ style: { textTransform: "uppercase", color: "#fff" } }}
            fullWidth
            sx={{
              input: { bgcolor: "#333", borderRadius: 1 },
              label: { color: "#ccc" },
              "& .MuiInputBase-root": { color: "#fff" },
            }}
          />
        )}
      />

      <Button type="submit" variant="contained" onClick={handleSubmit(onSubmit)}>
        Добавить на исполнение
      </Button>
    </Box>
  );
};
