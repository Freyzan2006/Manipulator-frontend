import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import type { RootState } from "@/common/store";



import ScienceIcon from '@mui/icons-material/Science';


import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';




export const ManipulatorGrid: React.FC = () => {
  

  const { position, gridSize, samples, heldSample } = useSelector(
    (state: RootState) => state.manipulator
  );


  return (
    <Box textAlign="center" >
      <Typography variant="h6">Положение: [{position[0]}, {position[1]}]</Typography>
      <Typography variant="subtitle1" mt={2}>
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
                bgcolor={isActive ? "lightblue" : "grey.300"}
                border="1px solid black"
                borderRadius={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {sample  && <ScienceIcon fontSize="small" color="primary" />}
                { isActive && <PrecisionManufacturingIcon fontSize="small" color={heldSample ? "error" : "primary"} />}
               
              </Box>

            );
        })}
      </Box>




    </Box>
  );
};
