import React from "react";
import type { Meta } from "@storybook/react";
import Modal from "./Modal";


const typeChildren = {
    description: "Свойство видимости элемента",
    defaultValue: "Строка в качестве параметра",
    options: [
        "string", 
        "JSX"
    ],
    mapping: {
        "string": "Строка в качестве параметра",
        "JSX": 
        <div>
            <p>jsx в качестве параметра</p>
            <input 
                style={{height: "30px", borderRadius: "5px", width: "50%"}}
                placeholder='some input'
            />
        </div>
    },
    control: {
        type: "select"
    }
}


const meta: Meta<typeof Modal> = {
    title: "Homework2/General/Modal",
    component: Modal,
    argTypes: {
        visible: {
            type: "boolean",
            defaultValue: true
        },
        children: typeChildren
    }
}

export default meta

// }

// export default  {
// title: "Homework2/General/Modal",
// component: Modal,
// argTypes: {
//     visible: {
//         type: "boolean",
//         defaultValue: true
//     },
//     children: typeChildren
// }
// }

export const chilrenAsString = {
    args: {
      visible: true,
      children: typeChildren.options[0],
    },
  };