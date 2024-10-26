import { Meta } from "@storybook/react";
import ContextLayout from "./ContextLayout";
import Layout from "../../homeworks/jsxCss/general/Layout/Layout";
import React from "react";

const meta: Meta<typeof ContextLayout> = {
    title: "Homework4_React_Hooks/General/ContextLayout",
    component: ContextLayout
}
export default meta

export const primary = {
    args: {
        children:
        <Layout>
            Принимая во внимание показатели успешности, социально-экономическое развитие говорит о
             возможностях глубокомысленных рассуждений. С учётом сложившейся международной обстановки, 
             разбавленное изрядной долей эмпатии, рациональное мышление является качественно новой ступенью новых 
             принципов формирования материально-технической и кадровой базы. Идейные соображения высшего порядка, 
             а также семантический разбор внешних противодействий обеспечивает широкому кругу (специалистов) участие в 
             формировании стандартных подходов.
        </Layout>
    }
}