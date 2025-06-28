// import { CardItem } from "@/common/components/CardItem"
// import { CommandInput } from "./CommandInput"
// import { CommandInstructions } from "./CommandInstructions"
// import { CardSelect } from "@/common/components/CardSelect"

// export const Command: React.FC = () => {
//     return (
//         <section>
//             <CardSelect
//                 cards={[
//                     <CardItem><CommandInput /></CardItem>,
//                     <CardItem><CommandInstructions /></CardItem>,
//                 ]}
//             />
//         </section>
//     )
// }

import { CardItem } from "@/common/components/CardItem";
import { CommandInput } from "./CommandInput";
import { CommandInstructions } from "./CommandInstructions";
import { CardSelect } from "@/common/components/CardSelect";
import { Typography, Box, Divider } from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";

export const Command: React.FC = () => {
  return (
    <section>
      <Box
        sx={{
          bgcolor: "#1e1e1e",
          borderRadius: 2,
          p: 3,
          boxShadow: 3,
        }}
      >
        <Box display="flex" alignItems="center" gap={2} mb={2}>
          <TerminalIcon color="primary" />
          <Typography variant="h6" color="primary">
            Ввод и справка по командам
          </Typography>
        </Box>

        <Divider sx={{ mb: 2, borderColor: "#333" }} />

        <CardSelect
          cards={[
            <CardItem key="input">
              <CommandInput />
            </CardItem>,
            <CardItem key="instructions">
              <CommandInstructions />
            </CardItem>,
          ]}
        />
      </Box>
    </section>
  );
};
