import { Card, CardContent } from "@mui/material";

interface ICardProps {
  children: React.ReactNode;
}

/**
 * Карточка
 * @component
 * @name CardItem
 * @returns {JSX.Element}
 */
export const CardItem: React.FC<ICardProps> = ({ children }) => {
  return (
    <Card
      sx={{
        maxWidth: 600,
        width: "100%",
        bgcolor: "#2b2b2b",
        borderRadius: 3,
        boxShadow: "0 0 15px rgba(0, 255, 255, 0.1)",
        color: "#fff",
      }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
};
