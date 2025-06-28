import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

import type { RootState } from "@/common/store";
import { useSelector } from "react-redux";
import { meanColors } from "../data/instruction.data";

/**
 * Компонент CommandInstructions - справка по командам
 * @component
 * @name CommandInstructions
 * @returns {JSX.Element}
 */
export const CommandInstructions: React.FC = () => {
  const { allowedCommands } = useSelector((state: RootState) => state.command);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      maxWidth={400}
      mx="auto"
      mt={2}
      bgcolor="#1e1e1e"
      p={3}
      borderRadius={2}
      boxShadow="0 0 15px rgba(0,255,255,0.05)"
    >
      <Typography variant="h6" textAlign="center" color="primary">
        Виды команд
      </Typography>

      <List sx={{ maxHeight: 150, overflow: "auto", bgcolor: "#2b2b2b", borderRadius: 1 }}>
        {allowedCommands.map(cmd => (
          <ListItem key={cmd.name} disableGutters disablePadding divider>
            <ListItemText
              primary={`Команда "${cmd.name}"`}
              secondary={cmd.description}
              primaryTypographyProps={{ color: "white" }}
              secondaryTypographyProps={{ color: "#ccc" }}
            />
          </ListItem>
        ))}
      </List>

      <Typography variant="subtitle1" color="primary">
        Обозначения на поле
      </Typography>

      <List sx={{ maxHeight: 150, overflow: "auto", bgcolor: "#2b2b2b", borderRadius: 1 }}>
        {meanColors.map(({ name, description, icon: Icon, props }) => (
          <ListItem key={name} disableGutters disablePadding divider>
            <ListItemText
              primary={name}
              secondary={description}
              primaryTypographyProps={{ color: "white" }}
              secondaryTypographyProps={{ color: "#ccc" }}
            />
            <Icon {...props} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
