import MyButton from "./MyButton";




export default{

    title:"Components/MyButton",
    component: MyButton,
    parameters: {
        layout:"centered",
    },
    tags:["autodocs"]
}


export const Primary ={
     args:{
        primary:true,
        text:"Primary",
     }
}

export const Secondary ={
    args:{
       primary:false,
       text:"Secondary",
    }
}


export const Small ={
    args:{
        size:"small",
        text:"Small",
    }
}

export const Medium ={
    args:{
        size:"medium",
        text:"Medium",
    }
}

export const Large ={
    args:{
        size:"large",
        text:"Large",
    }
}