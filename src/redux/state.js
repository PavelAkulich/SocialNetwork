import profileReduser from './profile-reduser';
import dialogsReduser from './dialogs-reduser';
import sidebarReduser from './sidebar-reduser';

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 0, message: "Hello", likesCount: 23 },
                { id: 1, message: "Hi", likesCount: 4 },
                { id: 1, message: "Hey", likesCount: 11 },
            ],
            newPostText: "",
        },
        dialogsPage: {
            messagesData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "Yo" },
                { id: 3, message: "Hey" },
                { id: 4, message: "Hello" },
            ],
            dialogsData: [
                { id: 1, name: "Pasha" },
                { id: 2, name: "Ilya" },
                { id: 3, name: "Lesha" },
                { id: 4, name: "Andrey" },
                { id: 5, name: "Kirill" },
            ],
            newMessageBody: ''
        },
        sidebar: {
            friendsData: [
                {
                    id: "0",
                    image:
                        "https://www.wallpaperup.com/uploads/wallpapers/2016/04/04/922941/b10213790b1a7e1ea8b00293076e4032-1000.jpg",
                    name: "Pasha",
                },
            ],
        },
    },

    _callSubscriber() {
        console.log("efef");
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReduser(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}
export default store;