import React from 'react'
import './newsItem.css';

function NewsItem(props) {
  const {title , description , urlToImage, publishedAt } = props
  const Title = title.length>50? title.slice(0,50)+"...":title
  return (

    <div className='newsItemContainer'>
      <div className="container">
        {
          <img className='newsImg' src={urlToImage} alt='News'/>
        }
        
        <div className="newsItemDetails">
            <h2 className='title'>{Title}</h2>
            <p className='description'>{description.slice(0,90)}</p><button className="read-more">Read more....</button>
            <p className='datePosted'>{publishedAt}</p>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
