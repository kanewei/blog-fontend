import React, { Component } from 'react'
import { connect } from 'react-redux'
import Article from '../../components/ArticleBody/ArticleBody'
import Button from '../../components/Button/Button'
import './SingleArticle.css'
import * as actionTypes from '../../store/actionTypes'
import * as Actions from '../../store/actions'

class SingleArticle extends Component {
  componentWillMount () {
    // fetch getPosts
    const postId = this.props.match.params.articleId
    Actions.getPost(this.props.getPost, postId)
  }

    articleBackHandler = () => {
      this.props.history.goBack()
    }

    articleEditHandler = () => {
      this.props.history.push('/article/' + this.props.article.id + '/edit')
    }

    articleDeleteHandler = () => {
      // fecth API
      const postId = this.props.article._id
      Actions.deletePost(postId, this.props.history)
    }

    render () {
      return (
        <div>
          <Article data={this.props.article} />
          <div className='row'>
            <div className='col-md-6'>
              <Button variant='outline-secondary' size='sm' name='Back' onClick={this.articleBackHandler} />
            </div>
            <div className='text-right col-md-12'>
              <Button variant='info' size='sm' name='Edit' onClick={this.articleEditHandler} />
              <Button variant='danger' size='sm' name='Delete' onClick={this.articleDeleteHandler} />
            </div>
          </div>
        </div>
      )
    };
};

const mapStateToProps = state => {
  return {
    article: state.singleData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPost: (post) => dispatch({ type: actionTypes.GET_SINGLE_POST, post: post })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleArticle)
