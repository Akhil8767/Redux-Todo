export const add=(data)=>{
  return{
    type:"add",
    payload:{
      id:new Date().getTime().toString(),
      data:data
    }
  }
}

export const deleteTodo=(id)=>{
  return{
    type:'delete',
    id
  }
}

export const removeAll=()=>{
  return{
    type:'remove'
  }
}