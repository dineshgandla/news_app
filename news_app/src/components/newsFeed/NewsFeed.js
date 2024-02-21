import React, { useContext } from 'react'
import NewsItem from '../newsItem/NewsItem'
import './newsFeed.css';
import { Link } from 'react-router-dom';
import {NewsContext} from '../../context/NewsContext'

function NewsFeed() {
  const NewsData = useContext(NewsContext)
  const {handleDetailsPageOpen} = NewsData
  return (
    <div className='newsFeed'>
        {
            NewsData.newsData.map((post)=>{
                return <Link key={post.id} className='link'  to={`/newsDetails/${post.id}`} onClick={handleDetailsPageOpen}><NewsItem {...post}/></Link>
            })
        }
    </div>
  )
}

export default NewsFeed
