

const initialData={
    list:[]
}

const reducer=(state=initialData,action)=>{
    switch (action.type) {
        case "add":
            const {id,data}=action.payload
            return{
                ...state,
                  list:[
                    ...state.list,{
                        id:id,
                        data:data
                    }
                ]
            }
            case "delete":
                // const {id,data}=action.payload

              const newList= state.list.filter((elem)=>elem.id !== action.id)
                return{
                    ...state,
                      list:newList
                }
            
                case "remove": return{
                    ...state,
                    list:[]
                }

            default: return state
    }
}
export default reducer