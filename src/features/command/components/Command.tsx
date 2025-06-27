import { CardItem } from "@/common/components/CardItem"
import { CommandInput } from "./CommandInput"
import { CommandInstructions } from "./CommandInstructions"
import { CardSelect } from "@/common/components/CardSelect"



export const Command: React.FC = () => {
    return (
        <section>
            <CardSelect
                cards={[
                    <CardItem><CommandInput /></CardItem>, 
                    <CardItem><CommandInstructions /></CardItem>, 
                ]} 
            />
        </section>
    )
}