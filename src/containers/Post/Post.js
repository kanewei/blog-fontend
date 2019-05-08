import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../components/Button/Button'
import './Post.css'
import * as Actions from '../../store/actions'

class Post extends Component {
    state = {
      articleForm: {
        title: {
          value: '',
          valid: false
        },
        author: {
          value: '',
          valid: false
        },
        body: {
          value: '',
          valid: false
        }
      },
      button: {
        name: '',
        handler: null
      },
      formIsValid: false,
      isEditing: false
    };

    componentDidMount () {
      if (this.props.isEditing) {
        this.setState(prevState => {
          const updatedForm = { ...prevState.articleForm,
            title: {
              value: this.props.article.title,
              valid: true
            },
            author: {
              value: this.props.article.author,
              valid: true
            },
            body: {
              value: this.props.article.body,
              valid: true
            }
          }

          let formIsValid = true
          for (const inputName in updatedForm) {
            formIsValid = formIsValid && updatedForm[inputName].valid
          }

          let button = { ...prevState.button,
            name: 'Save',
            handler: this.saveHandler
          }

          return {
            articleForm: updatedForm,
            formIsValid: formIsValid,
            button: button
          }
        })
      } else {
        this.setState(prevState => {
          let button = { ...prevState.button,
            name: 'Post',
            handler: this.postHandler
          }

          return {
            button: button
          }
        })
      }
    }

    inputChangeHandler = (input, value) => {
      this.setState(prevState => {
        let isValid = value.length > 0

        const updatedForm = {
          ...prevState.articleForm,
          [input]: {
            ...prevState.articleForm[input],
            valid: isValid,
            value: value
          }
        }

        let formIsValid = true
        for (const inputName in updatedForm) {
          formIsValid = formIsValid && updatedForm[inputName].valid
        }

        return {
          articleForm: updatedForm,
          formIsValid: formIsValid
        }
      })
    };

    postHandler = e => {
      e.preventDefault()
      // fetch API
      Actions.createPost(this.state.articleForm, this.props.history.push)
    }

    saveHandler = e => {
      e.preventDefault()
      // fetch API
      const postId = this.props.article._id
      Actions.editPost(this.state.articleForm, postId, this.props.history)
    }

    postCancelledHandler = () => {
      this.props.history.goBack()
    }

    render () {
      return (
        <div>
          <form onSubmit={e =>
            this.state.button.handler(e, {
              title: this.state.articleForm.title.value,
              author: this.state.articleForm.author.value,
              body: this.state.articleForm.body.value
            })
          }>
            <div className='from-group'>
              <label>Title</label>
              <input id='title' className='input' placeholder='Title' value={this.state.articleForm.title.value} onChange={e => this.inputChangeHandler(e.target.id, e.target.value, e.target.files)} required />
            </div>
            <div className='from-group'>
              <label>Author</label>
              <input id='author' className='input' placeholder='Author' value={this.state.articleForm.author.value} onChange={e => this.inputChangeHandler(e.target.id, e.target.value, e.target.files)} required />
            </div>
            <div className='from-group'>
              <label>Body</label>
              <textarea id='body' className='input' placeholder='Write something' value={this.state.articleForm.body.value} onChange={e => this.inputChangeHandler(e.target.id, e.target.value, e.target.files)} />
            </div>

            <div className='from-group text-center'>
              <Button type='Submit' variant='primary' size='sm' disabled={!this.state.formIsValid} name={this.state.button.name} />
              <Button variant='outline-secondary' size='sm' name='Cancel' onClick={this.postCancelledHandler} />
            </div>
          </form>
        </div>
      )
    }
}

const mapStateToProps = state => {
  return {
    article: state.singleData
  }
}

export default connect(mapStateToProps)(Post)
