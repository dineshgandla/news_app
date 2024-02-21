import React,{useContext} from 'react'
import './newsDetails.css'
import { useParams } from 'react-router-dom'
import {NewsContext} from '../../context/NewsContext'

function NewsDetails() {
  const {id} = useParams();
  const NewsData = useContext(NewsContext);
  const selectedNews = NewsData.newsData.find(news => news.id === id);
  const {title, description, urlToImage, date_posted,author} = selectedNews;
  if(!selectedNews){
    return <div> Not found</div>
  }

  
  return (
    <div>
      
      <div className="newsDetails">
        <img className='detailImg' src={urlToImage} alt='details'/>
        <h2>{title}</h2>
        <div className="info">
            
            <p>{author}</p>
            <p>Published On : {date_posted}</p>
        </div>
        <div className="details">
          {/* <p className='detailContent'>{description}</p> */}
            <div className='detailContent'>{description.split('\n\n').map((paragraph,index) => (
              <p key={index}>&emsp; {paragraph.split('\n').map((line, index) =>index > 0 ? (<span>
                            <br />
                            {line}
                        </span>) : line
              )}</p>
            ))}</div>
        </div>
      </div>
    </div>
  )
}

export default NewsDetails
