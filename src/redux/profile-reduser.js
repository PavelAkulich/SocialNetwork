const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

let initialState = {
    postsData: [
        { id: 0, message: "Hello", likesCount: 23 },
        { id: 1, message: "Hi", likesCount: 4 },
        { id: 1, message: "Hey", likesCount: 11 },
    ],
    newPostText: ""
};

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ""
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}

export default profileReduser;