import React from "react";
import type { Meta } from "@storybook/react";
import Header from "./Header";


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
    args: {
        children:
            <div>
            <button>button1</button>
            <button>button2</button>
            <button>button3</button>
        </div>
    }
};