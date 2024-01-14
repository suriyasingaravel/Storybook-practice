import MyInput from "./MyInput";


export default{
    title: "Components/MyInput",
    component: MyInput,
    parameters :{
        layout : "centered"
    },
    tags:["autodocs"]

}


export const Small ={
    args:{
        placeholder :"Hello",
        size:"small"
    }
}

export const Medium ={
    args:{
        placeholder :"Hello",
        size:"medium"
    }
}

export const Large ={
    args:{
        placeholder :"Hello",
        size:"large"
    }
}