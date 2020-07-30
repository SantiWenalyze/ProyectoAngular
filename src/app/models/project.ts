
export class Project{
    constructor(
        public _id: string,
        public name: string,
        public description: string,
        public category: string,
        public year: number,
        public langs: string,
        public image: string
    ){}
}




// PLANTILLA OBJETO PROYECTO

// {
//     _id: "5f19549f637f6b2c10aa28d1",
//     name: "facebook.com",
//     description: "Red social",
//     category: "desarrollo web y movil",
//     year: 2004,
//     langs: "PHP, Android",
//     image: null,
//     __v: 0
//     }