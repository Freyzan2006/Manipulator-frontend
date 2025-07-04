import { useMemo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  Button,
  CardActions,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { getCurrentCommandIndex } from "../../utils/manipulator.util";
import { optimizeCommands } from "@/features/command";
import { ManipulatorController } from "./ManipulatorController";
import type { RootState } from "@/common/store";

export const ManipulatorExecutionList: React.FC = () => {
  const theme = useTheme();
  const { executingList, currentExecutingIndex } = useSelector(
    (state: RootState) => state.manipulator
  );

  const currentCmdIndex = getCurrentCommandIndex(executingList, currentExecutingIndex);

  const items = useMemo(() => {
    return executingList.map((raw, idx) => ({
      raw,
      optimized: optimizeCommands(raw),
      isCurrent: idx === currentCmdIndex,
    }));
  }, [executingList, currentCmdIndex]);

  return (
    <Paper
      elevation={3}
      sx={{
        maxHeight: 500,
        overflow: "auto",
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        bgcolor: "#2b2b2b",
        borderRadius: 2,
        color: "white",
        width: 350,
      }}
    >
      <Typography variant="h6" color="primary" textAlign="center">
        Команды на исполнение
      </Typography>

      <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {items.length > 0 ? (
          items.map(({ raw, optimized, isCurrent }, index) => (
            <ListItem
              key={index}
              disableGutters
              sx={{
                bgcolor: isCurrent ? theme.palette.info.light : "#424242",
                border: isCurrent ? "2px solid #00e5ff" : "1px solid #555",
                borderRadius: 1,
                justifyContent: "center",
              }}
            >
              <ListItemText
                primary={`${index + 1} → ${raw}`}
                secondary={`Оптимизировано: ${optimized}`}
                primaryTypographyProps={{
                  textAlign: "center",
                  color: isCurrent ? "black" : "white",
                  fontWeight: isCurrent ? "bold" : "normal",
                }}
                secondaryTypographyProps={{
                  textAlign: "center",
                  color: "lightgray",
                  fontSize: "0.8rem",
                }}
              />
            </ListItem>
          ))
        ) : (
          <Typography color="gray" textAlign="center">
            Пока команд на исполнение нет
          </Typography>
        )}
      </List>

      <CardActions sx={{ justifyContent: "center" }}>
        <Button variant="outlined" component={NavLink} to="/history" color="info">
          История команд
        </Button>
      </CardActions>

      <ManipulatorController />
    </Paper>
  );
};
