import type { AppDispatch, RootState } from "@/common/store";
import { Box, Button, Slider, Typography,  } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { resetPosition, setSpeed } from "../../slices/manipulatorSlice";
import { useCallback } from "react";
import { executeStackThunk } from "../../thunks/executeStackThunk";




export const ManipulatorController: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { executing, speed } = useSelector((state: RootState) => state.manipulator);

    const handleChange = useCallback(() => dispatch(resetPosition()), [dispatch, resetPosition]);

    return (
        <Box sx ={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Button
                variant="contained"
                onClick={() => dispatch(executeStackThunk())}
                disabled={executing}
                sx={{ mt: 2 }}
            >
                Запустить
            </Button>

            <Button onClick={handleChange}>
                Сбросить
            </Button>

            <Box mt={3}>
                <Typography>Скорость: {speed} мс</Typography>
                <Slider
                    value={speed}
                    onChange={(_, val) => dispatch(setSpeed(val as number))}
                    step={100}
                    min={100}
                    max={1000}
                    disabled={executing}
                />
            </Box>
        </Box>
        
    );
};