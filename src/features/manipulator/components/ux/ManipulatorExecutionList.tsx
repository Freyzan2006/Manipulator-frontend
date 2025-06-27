import type { RootState } from "@/common/store";
import { Box, Button, Card, CardActions, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getCurrentCommandIndex } from "../../utils/manipulator.util";
import { NavLink } from "react-router-dom";
import { optimizeCommands } from "@/features/command";
import { useMemo } from "react";




import { ManipulatorController } from "./ManipulatorController";



export const ManipulatorExecutionList: React.FC = () => {
    



    const { executingList, currentExecutingIndex } = useSelector((state: RootState) => state.manipulator);

    const currentCmdIndex = getCurrentCommandIndex(executingList, currentExecutingIndex);
    

    const optimizedList = useMemo(() => {
        return executingList.map(optimizeCommands);
    }, [executingList]);
   

    return (
        <Box style = {{ overflow: "auto", maxHeight: 500, display: "flex", flexDirection: "column", gap: "5px", alignItems: "center", padding: "5px" }}>


                <Card sx={{ minWidth: 275, bgcolor: "" }} variant="outlined">
                    <CardContent sx = {{ overflow: "auto", maxHeight: 400 }}>
                        <Typography variant="h6">Команды на исполнение:</Typography>
                        <List style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            {executingList.length ? (
                                optimizedList.map((optCmd, index) => (
                                <ListItem
                                    key={index}
                                    disableGutters
                                    style={{
                                    backgroundColor: index === currentCmdIndex ? "lightblue" : "white",
                                    border: "1px solid black",
                                    borderRadius: "5px",
                                    textAlign: "center",
                                    }}
                                >
                                    <ListItemText primary={`${index + 1} - ${optCmd}`} />
                                </ListItem>
                                ))
                            ) : (
                                <Typography>Пока команд на исполнение нету</Typography>
                            )}
                        </List>
                    </CardContent>
                    <CardActions>
                        <Button size="small">
                            <NavLink to="/history"> История команд</NavLink>
                        </Button>
                        
                    </CardActions>
                </Card>

                <ManipulatorController />



        </Box>
    )
};