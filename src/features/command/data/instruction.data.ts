import type { MeanColor } from "../types/command.type";

import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ScienceIcon from "@mui/icons-material/Science";

/**
 * @description список возможных элементов на карте манипулятора
 * @param name Название
 * @param icon Иконка
 * @param props Свойства иконки
 */
export const meanColors: MeanColor[] = [
  {
    name: "взят образец",
    description: "-",
    icon: PrecisionManufacturingIcon,
    props: { fontSize: "small", color: "error" },
  },
  {
    name: "Образец",
    description: "-",
    icon: ScienceIcon,
    props: { fontSize: "small", color: "primary" },
  },
  {
    name: "Манипулятор",
    description: "-",
    icon: PrecisionManufacturingIcon,
    props: { fontSize: "small", color: "primary" },
  },
];
