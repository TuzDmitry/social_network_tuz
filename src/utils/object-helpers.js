

export const updateObjectInArray=(array,itemId,objPropName,objWithNewProps)=>{
    return array.map(user => {
        if (itemId === user[objPropName]) {
            return {...user, ...objWithNewProps}
        }
        return user;
    })
}