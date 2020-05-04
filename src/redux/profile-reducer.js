const ADD_POST = 'ADD-POST';
const INPUT_POST_TEXT = 'INPUT-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, postContent: 'Installed Node.js', likes: 3},
    {id: 2, postContent: 'Installed create-react-app', likes: 5},
    {id: 3, postContent: 'Launched a project', likes: 8},
    {id: 4, postContent: 'Learning React', likes: 1},
  ],
  newPostText: '',
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        postContent: state.newPostText,
        likes: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    case INPUT_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newPostText
      };
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const onInputTextActionCreator = (textPost) => 
({type: INPUT_POST_TEXT, newPostText: textPost});

export default profileReducer;