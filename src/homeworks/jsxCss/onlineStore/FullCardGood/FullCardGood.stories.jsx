import FullCardGood from "./FullCardGood";

export default  {
    title: "Homework2/OnlineStore/FullCardGood",
    component: FullCardGood,
    argTypes: {
        sum: {
            type: "number",
        } ,
        img: {
            type: "array",
        } ,
        name: {
            type: "string",
        } ,
        desc: {
            type: "string",
        } ,
        categoryName: {
            type: "string",
        }
    }
}

export const primary = {
    args: {
        sum: 120,
        img: [
            'https://www.advertme.ru/wp-content/uploads/2017/09/345479-1.jpg',
            'https://mld-index.md/wp-content/uploads/2023/04/online-magazin-removebg-preview-577x400-1.png',
            'https://stat.uz/images/photo_2022-11-01_15-04-59--kopiya.jpg',
            'https://ih1.redbubble.net/image.343726246.4611/st,small,507x507-pad,600x600,f8f8f8.u6.jpg',
            'https://i.pinimg.com/736x/bd/b3/f6/bdb3f69ba34e4c69d40cdb47128aa034.jpg'
        ],
        name: "Матовая гидрогелевая пленка на экран телефона",
        desc: `Разнообразный и богатый опыт консультация с широким активом в значительной степени
         обуславливает создание форм развития. Таким образом рамки и место обучения кадров в
          значительной степени обуславливает создание системы обучения кадров, соответствует
           насущным потребностям. Не следует, однако забывать, что реализация намеченных плановых
            заданий позволяет оценить значение существенных финансовых и административных условий
            . Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности 
            в значительной степени обуславливает создание систем массового участия.`,
        categoryName: "лекарства",
    }
};