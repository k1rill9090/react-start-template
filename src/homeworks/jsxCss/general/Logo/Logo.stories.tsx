import type { Meta } from "@storybook/react";
import Logo from "./Logo";


const meta: Meta<typeof Logo> = {
    title: "Homework2/General/Logo",
    component: Logo,
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
        children: "some logo"
    }
};