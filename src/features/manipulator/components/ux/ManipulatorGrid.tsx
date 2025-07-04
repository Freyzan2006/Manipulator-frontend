import { Box, Typography, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "@/common/store";
import ScienceIcon from "@mui/icons-material/Science";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

export const ManipulatorGrid: React.FC = () => {
  const { position, gridSize, samples, heldSample } = useSelector(
    (state: RootState) => state.manipulator
  );

  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        bgcolor: "#2b2b2b",
        color: "white",
        borderRadius: 2,
        minWidth: 300,
        textAlign: "center",
      }}
    >
      <Typography variant="subtitle1">
        Текущая позиция: [{position[0]}, {position[1]}]
      </Typography>
      <Typography variant="subtitle2" sx={{ mt: 1 }}>
        В клешне: {heldSample || "—"}
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns={`repeat(${gridSize}, 40px)`}
        gap={1}
        justifyContent="center"
        mt={2}
      >
        {Array.from({ length: gridSize * gridSize }, (_, idx) => {
          const x = Math.floor(idx / gridSize);
          const y = idx % gridSize;
          const isActive = x === position[0] && y === position[1];
          const sample = samples?.[x]?.[y];

          return (
            <Box
              key={idx}
              width={40}
              height={40}
              bgcolor={isActive ? "#00bcd4" : "#424242"}
              border={isActive ? "2px solid #00e5ff" : "1px solid #555"}
              borderRadius={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={5}
              position="relative"
            >
              {sample && (
                <ScienceIcon
                  fontSize="small"
                  color="primary"
                  sx={{ position: "absolute", top: 0, left: 0 }}
                />
              )}
              {isActive && (
                <PrecisionManufacturingIcon
                  fontSize="small"
                  color={heldSample ? "error" : "primary"}
                  sx={{ position: "absolute", bottom: 0, right: 0 }}
                />
              )}
            </Box>
          );
        })}
      </Box>
    </Paper>
  );
};
