import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import ScienceIcon from '@mui/icons-material/Science';

import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

import type { SvgIconProps } from "@mui/material/SvgIcon";

const allowedCommands = [
  { name: "Л", description: "Шаг влево" },
  { name: "П", description: "Шаг вправо" },
  { name: "В", description: "Шаг вверх" },
  { name: "Н", description: "Шаг вниз" },
  { name: "О", description: "Взять образец" },
  { name: "Б", description: "Отпустить образец" },
];

type MeanColor = {
  name: string;
  description: string;
  icon: React.ComponentType<SvgIconProps>;
  props?: SvgIconProps;
};

export const CommandInstructions: React.FC = () => {

  const meanColors: MeanColor[] = [
    { name: "взят образец", description: "-", icon: PrecisionManufacturingIcon, props: { fontSize: "small", color: "error" } },
    { name: "Образец", description: "-", icon: ScienceIcon, props: { fontSize: "small", color: "primary" } },
    { name: "Манипулятор", description: "-", icon: PrecisionManufacturingIcon, props: { fontSize: "small", color: "primary" } },
  ];

  return (
    <Box display="flex" flexDirection="column" gap={2} maxWidth={400} mx="auto" mt={5} width={"100%"}>
      <Typography variant="h6" textAlign="center">
        Виды команд
      </Typography>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', position: 'relative', overflow: 'auto', maxHeight: 300 }}>
        {allowedCommands.map((cmd) => (
          <ListItem key={cmd.name} disableGutters>
            <ListItemText
              primary={`Команда "${cmd.name}"`}
              secondary={cmd.description}
            />
          </ListItem>
        ))}
      </List>
      
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', position: 'relative', overflow: 'auto', maxHeight: 300 }}>
        {meanColors.map(({ name, description, icon: Icon, props }) => (
          <ListItem key={name} disableGutters>
            <ListItemText primary={name} secondary={description} />
            <Icon {...props} />
          </ListItem>
        ))}
      </List>
      
    </Box>
  );
};
