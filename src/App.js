import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import BlogBuilder from './containers/BlogBuilder/BlogBuilder'
import Post from './containers/Post/Post'
import Article from './containers/SingleArticle/SingleArticle'
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/post' render={(props) => <Post {...props} isEditing={false} />} />
            <Route path='/article/:articleId/edit' render={(props) => <Post {...props} isEditing />} />
            <Route path='/article/:articleId' component={Article} />
            <Route path='/' exact component={BlogBuilder} />
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App
