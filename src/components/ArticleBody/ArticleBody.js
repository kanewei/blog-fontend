import React from 'react'
import './ArticleBody.css'

const articleBody = props =>
  <article>
    <h4 className='text-center'>{props.data.title}</h4>
    <p className='text article-body'>{props.data.body}</p>
    <p className='time text'>Posted by {props.data.author} at {props.data.postTime}</p>
    {(props.data.modified
      ? <p className='time text'>Modified at {props.data.modifyTime}</p>
      : ''
    )}

  </article>

export default articleBody
