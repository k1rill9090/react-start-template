import Logo from "./Logo";

export default  {
    title: "Homework2/Logo",
    component: Logo,
    argTypes: {
        children: {
            type: "string",
            defaultValue: "some value"
        } 
    }
}

export const primary = {
    args: {
        children: "some logo"
    }
};