import { Box, Button } from "@mui/material";
import { useState } from "react";

interface ICardSelectProps {
  cards: React.ReactNode[];
}

/**
 * Компонент для выбора карточки
 * @component
 * @name CardSelect
 * @returns {JSX.Element}
 */
export const CardSelect: React.FC<ICardSelectProps> = ({ cards }) => {
  const [current, setCurrent] = useState(0);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={3} width={"100%"}>
      <Box display="flex" gap={1} flexWrap="wrap" justifyContent="center">
        {cards.map((_, index) => (
          <Button
            key={index}
            variant={index === current ? "contained" : "outlined"}
            onClick={() => setCurrent(index)}
            sx={{
              borderRadius: 2,
              minWidth: 40,
              backgroundColor: index === current ? "primary.main" : "#333",
              color: index === current ? "#fff" : "#ccc",
              "&:hover": {
                backgroundColor: index === current ? "primary.dark" : "#444",
              },
            }}
          >
            {index + 1}
          </Button>
        ))}
      </Box>

      <Box mt={2} width="100%" display="flex" justifyContent="center" alignItems="center">
        {cards[current]}
      </Box>
    </Box>
  );
};
