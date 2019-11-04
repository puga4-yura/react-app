

let store = {
    _state : {
        profilePage: {
            postData: [
                {id: 1, text:'hi, how are you', like: 2},
                {id: 2, text:'first post', like: 3},
                {id: 3, text:'second post', like: 5},
                {id: 4, text:'', like: 0},
                {id: 5, text:'', like: 7},
            ],
            newPostText: 'Hello'
        },
        messagePage: {
            dialogItem: [
                {id: 1, name: 'Vasa'},
                {id: 2, name: 'Yura'},
                {id: 3, name: 'Yura'},
                {id: 4, name: 'Ola'},
                {id: 5, name: 'Mark'},
                {id: 6, name: 'Misha'}
            ],
            dialogText: [
                {id: 1, text: 'hi'},
                {id: 2, text: 'how are you'},
                {id: 3, text: 'fine'},
                {id: 4, text: 'YOOO'},
            ],
        }
    },
    getState() {
        return this._state
    },

    renderEntirTree(){
        console.log('fff');
    },

    subscribe (observer) {
        this.renderEntirTree = observer;
    },
    addPost (messagePost){
        let newPost = {id: 6, text: messagePost, like: 4}

        this._state.profilePage.postData.push(newPost);
        this.renderEntirTree(this._state);

    },
    changeText (messageChange){
        debugger
        this._state.profilePage.newPostText = messageChange;
        this.renderEntirTree(this._state);

    }
}


export default store;

window.store = store;