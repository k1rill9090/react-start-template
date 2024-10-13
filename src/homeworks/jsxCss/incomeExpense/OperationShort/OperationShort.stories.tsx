import React from "react";
import type { Meta } from "@storybook/react";
import OperationShort from "./OperationShort";


const meta: Meta<typeof OperationShort> = {
    title: "Homework2/IncomeExpense/OperationShort",
    component: OperationShort,
    argTypes: {
        name: {
            type: "string",
            defaultValue: "some name"
        } ,
        sum: {
            type: "number",
            defaultValue: 10
        } ,
        desc: {
            type: "string",
            defaultValue: "some desc"
        } ,
        categoryName: {
            type: "string",
            defaultValue: "some category"
        } ,
    }
}

export default meta

export const primary = {
    args: {
        name: "Покупка",
        sum: 120,
        desc: `Разнообразный и богатый опыт консультация с широким активом в значительной степени
         обуславливает создание форм развития. Таким образом рамки и место обучения кадров в
          значительной степени обуславливает создание системы обучения кадров, соответствует
           насущным потребностям. Не следует, однако забывать, что реализация намеченных плановых
            заданий позволяет оценить значение существенных финансовых и административных условий
            . Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности 
            в значительной степени обуславливает создание систем массового участия.`,
        categoryName: "Масла",
    }
};