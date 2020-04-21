const ADD_POST = 'ADD-POST'
const INPUT_POST_TEXT = 'INPUT-POST-TEXT'

const profileReducer = (state, action) => {
  switch(action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        postContent: state.newPostText,
        likes: 0
      }
    
      state.posts.push(newPost)
      state.newPostText = ''
      return state
    case INPUT_POST_TEXT:
      state.newPostText = action.newPostText
      return state
    default:
      return state
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const onInputTextActionCreator = (textPost) => 
({type: INPUT_POST_TEXT, newPostText: textPost})

export default profileReducer