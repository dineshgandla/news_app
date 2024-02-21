
const NewsReducer = (state, action) =>{
    // console.log('from reducer ',action.payload)
        switch(action.type){
            case 'SET_API_DATA':
                return{
                    ...state,
                    newsData:action.payload
                }
            case 'SET_EDUCATION':
                return{
                    ...state,
                    newsData:action.payload
                }
            case 'SET_SPORTS':
                return{
                    ...state,
                    newsData:action.payload
                }
            case 'SET_BUSINESS':
                return{
                    ...state,
                    newsData:action.payload
                }
            case 'SET_SEARCH':
                return{
                    ...state,
                    newsData:action.payload
                }
            case 'SET_LOGIN':
                return {
                    ...state,
                    loggedIn:true
                }
            case 'SET_LOGOUT':
                return{
                    ...state,
                    loggedIn:false
                }
            case 'SET_DETAILSPAGEOPEN':
                return{
                    ...state,
                    detailsPageOpen:true,
                }
            case 'SET_DETAILSPAGECLOSE':
                return{
                    ...state,
                    detailsPageOpen:false,
                }
            
            default :
                return state
    }

}
export default NewsReducer;