import React, { Component } from 'react';
import axios from 'axios';

class PostBotChat extends Component {
    constructor(props) {
        super(props);
        const { steps } = this.props;
        const { submit, name, game, lv, pseudo, } = steps;
        this.state = { submit, name, game, lv, pseudo, status: 'live', };
    }
    componentDidMount() {
        const userObject = {
            submit: this.state.submit.value,
            name: this.state.name.value,
            game: this.state.game.value,
            lv: this.state.lv.value,
            pseudo: this.state.pseudo.value,
            status: this.state.status,
        };
        axios.post(`http://localhost:4242/api/newconversations`, userObject)
            .then(res => {
                console.log(res.status)
            }).catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div>les informations ont été correctement envoyées</div>
        );
    }
};

export default PostBotChat;