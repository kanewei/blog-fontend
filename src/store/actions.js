
export const createPost = (postData, toPath) => {
  fetch('http://localhost:8080/blog/post', { method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: postData.title.value,
      author: postData.author.value,
      body: postData.body.value
    })
  })
    .then(res => {
      if (res.status !== 201) {
        throw new Error('Failed to create post.')
      }
      return res.json()
    })
    .then(() => {
      toPath('/')
    })
}

export const getPosts = (dispatch) => {
  fetch('http://localhost:8080/blog/posts', { method: 'GET'
  })
    .then(res => {
      if (res.status !== 200) {
        throw new Error('Failed to get posts.')
      }
      return res.json()
    })
    .then(resData => {
      dispatch(resData.posts)
    })
}

export const getPost = (dispatch, id) => {
  fetch('http://localhost:8080/blog/post/' + id, { method: 'GET'
  })
    .then(res => {
      if (res.status !== 200) {
        throw new Error('Failed to get post.')
      }
      return res.json()
    })
    .then(resData => {
      dispatch(resData.post)
    })
}

export const editPost = (postData, id, toPath) => {
  fetch('http://localhost:8080/blog/post/' + id, { method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: postData.title.value,
      author: postData.author.value,
      body: postData.body.value
    })

  })
    .then(res => {
      if (res.status !== 200) {
        throw new Error('Failed to edit post.')
      }
      return res.json()
    })
    .then(() => {
      toPath.goBack()
    })
}

export const deletePost = (id, toPath) => {
  fetch('http://localhost:8080/blog/post/' + id, { method: 'DELETE'
  })
    .then(res => {
      if (res.status !== 200) {
        throw new Error('Failed to delete post.')
      }
      return res.json()
    })
    .then(() => {
      toPath.goBack()
    })
}
