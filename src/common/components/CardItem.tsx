import { Card, CardContent } from "@mui/material"


interface ICardProps {
    children: React.ReactNode
}

export const CardItem: React.FC<ICardProps> = ({ children }) => {



    return (
        <Card sx={{ maxWidth: 500, width: "100%" }}>
            <CardContent>
                { children }
            </CardContent>
        </Card>
    )
}