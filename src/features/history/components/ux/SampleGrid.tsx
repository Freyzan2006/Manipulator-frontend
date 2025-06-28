import { Box } from "@mui/material";

export const SampleGrid = ({ samples }: { samples: string[][] }) => (
  <Box
    display="grid"
    gridTemplateColumns={`repeat(${samples[0]?.length || 1}, 1em)`}
    gap="2px"
    justifyContent="center"
  >
    {samples.flatMap((rowLine, i) =>
      rowLine.map((cell, j) => (
        <Box
          key={`${i}-${j}`}
          sx={{
            width: "1em",
            height: "1em",
            textAlign: "center",
            border: "1px solid #888",
            fontSize: "0.75em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#aaa",
          }}
        >
          {cell}
        </Box>
      ))
    )}
  </Box>
);
