import { DEC, INC } from "./constant"

export const add = () => {
    return {
        type: INC,
    }
}
export const subtract = () => {
    return {
        type: DEC,
    }
}