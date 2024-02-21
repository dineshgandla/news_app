import { createContext, useEffect, useReducer , } from "react";
import reducer from '../reducer/NewsReducer'
import news from '../data.json'
import { useNavigate } from "react-router-dom";
const NewsContext = createContext();

const initialState = {
    newsData:[],
    loggedIn:false,
    detailsPageOpen:false,
    title:"News App",
    userRegistred:[]
    
  }

const allNews  = news.news;
const NewsProvider = ({children}) =>{
    const [state , dispatch ] = useReducer(reducer , initialState)
    useEffect(()=>{
        dispatch({type:'SET_API_DATA',payload:allNews})
    },[])
    const handleHome =()=>{ 
        dispatch({type:'SET_API_DATA', payload:allNews});
      }
      const handleSports =()=>{
        const filteredNews = allNews.filter(post => post.category === 'sports'); 
        dispatch({type:'SET_SPORTS', payload:filteredNews});
      }
      const handleEducation =()=>{
        const filteredNews = allNews.filter(post => post.category === 'education'); 
        dispatch({type:'SET_EDUCATION', payload:filteredNews});
      }
      const handleBusiness =()=>{
        const filteredNews = allNews.filter(post => post.category === 'business'); 
        dispatch({type:'SET_BUSINESS', payload:filteredNews})
      }
      const handleSearch = (e) =>{
        const searchInput = e.target.value; 
        const filteredNews = allNews.filter(news => news.title.toLowerCase().includes(searchInput.toLowerCase()))
        dispatch({type:'SET_SEARCH', payload:filteredNews})
      }
      const handleLogIn = () =>{
        dispatch({type:'SET_LOGIN'})

      }
      const handleLogOut = () =>{
        dispatch({type:'SET_LOGOUT'});

      }
      const handleDetailsPageOpen  = () =>{
        dispatch({type:'SET_DETAILSPAGEOPEN'})

      }
      const handleDetailsPageClose  = () =>{
        dispatch({type:'SET_DETAILSPAGECLOSE'})

      }
      const handleFooterAlert = (name) =>{
        alert(`You are trying to access ${name} page`)
      }

      const registrationDetails = () =>{
        
      }
      

    return(
        
        <NewsContext.Provider value={{...state, handleBusiness , handleHome , handleEducation ,handleSports , handleSearch ,handleLogOut, handleLogIn , handleDetailsPageOpen, handleDetailsPageClose , handleFooterAlert }}>
            {children}
        </NewsContext.Provider>
    )
}



export { NewsProvider , NewsContext};