import Header from "./Header";

export default  {
    title: "Homework2/General/Header",
    component: Header,
    argTypes: {
        children: {
            type: "string",
            defaultValue: "some value"
        } 
    }
}

export const primary = {
    args: {
        children: <div>
            <button>button1</button>
            <button>button2</button>
            <button>button3</button>
        </div>
    }
};