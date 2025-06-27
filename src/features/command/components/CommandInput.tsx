import type { AppDispatch, RootState } from "@/common/store";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setCommand } from "../slices/commandSlice.slice";
import { addCommandToExecutingList } from "@/features/manipulator";





export const CommandInput: React.FC = () => {
  const { allowedCommands } = useSelector((state: RootState) => state.command);

  const dispatch = useDispatch<AppDispatch>();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      command: "",
    },
  });

  const onSubmit = (data: { command: string }) => {
    // const optimized = optimizeCommands(data.command); 

    dispatch(setCommand(data.command));
    dispatch(addCommandToExecutingList(data.command));   

    reset();
  };

  const validateCommand = (value: string) => {
    const allowedNames = allowedCommands.map(cmd => cmd.name).join("");
    const regex = new RegExp(`^[${allowedNames}]+$`, "i");

    return regex.test(value)
      ? true
      : `Допустимы только символы: ${allowedNames.split("").join(", ")}`;
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} maxWidth={400} mx="auto" mt={5}>
      <Typography variant="h6" textAlign="center">
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
            inputProps={{ style: { textTransform: "uppercase" } }}
          />
        )}
      />

      <Button variant="contained" onClick={handleSubmit(onSubmit)}>
        Добавить на исполнение
      </Button>
    </Box>
  );
};
