export let required=(value)=>{
    // debugger
    if (value){return undefined}
    else {return "requred text"}
}

// export let maxLength=(value)=>{
//     if (value.length>4){return undefined}
//     else {return `Maximum length is ${value.length}`}
// }

export let maxLengthCreator=(maxL)=>{
    return (value)=>{
        if (value.length<maxL){return undefined}
        else {return `Maximum length is ${maxL}`}
    }
}

export const maxLength30=maxLengthCreator(30)