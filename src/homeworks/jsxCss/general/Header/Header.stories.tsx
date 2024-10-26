import React from "react";
import type { Meta } from "@storybook/react";
import Header from "./Header";
import Switch from "../../../ThemeSwitcher/Switch/Switch";


const meta: Meta<typeof Header> = {
    title: "Homework2/General/Header",
    component: Header,
    argTypes: {
        children: {
            type: "string",
            defaultValue: "some value"
        } 
    }
}

export default meta

export const primary = {

};