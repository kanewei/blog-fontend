import React, { Component } from 'react'
import { connect } from 'react-redux'

import './BlogBuilder.css'
import Button from '../../components/Button/Button'
import TableRwo from '../../components/TableRow/TableRow'
import * as actionTypes from '../../store/actionTypes'
import * as Actions from '../../store/actions'

class BlogBuilder extends Component {
    createPostHandler = () => {
      this.props.history.push('/post')
    };

    artilcleHandler = (e) => {
      this.props.history.push('/article/' + e)
    }

    componentWillMount () {
      // fetch getPosts
      Actions.getPosts(this.props.getPosts)
    }

    render () {
      return (
        <div>
          <p><Button onClick={this.createPostHandler} variant='primary' size='sm' name='Post' /></p>
          <table className=''>
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {this.props.posts.map(element => (
                <TableRwo data={element} key={element._id} onClick={this.artilcleHandler} />
              ))}
            </tbody>
          </table>
        </div>
      )
    };
};

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPosts: (posts) => dispatch({ type: actionTypes.GET_POSTS, posts: posts })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogBuilder)
