import React, { Component } from 'react';
import { Button, } from 'reactstrap';
import axios from 'axios'

import "../Historique.css"

class Histo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isToggle: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (id) => {
        this.setState({ isToggle: this.state.isToggle === id ? -1 : id });
    }

    getRandom = async () => {
        const res = await axios.get(
            'http://localhost:4242/api/convstatusclose'
        )
        this.setState({ data: res.data })
    }
    componentDidMount() {
        this.getRandom()
    }
    render() {
        let datas = this.state.data.reverse().map(chat => {
            return (
                <div key={chat.id} className="histo">
                    <div className="chatHisto">
                        <Button onClick={() => { this.handleClick(chat.id) }}> Conversation {chat.id}</Button>
                    </div>
                    <div style={{ display: this.state.isToggle === chat.id ? 'block' : 'none' }} className="chatHistorique">
                        <p> Comment t appelles tu ? <br /> {chat.name} </p>
                        <p> Quel est ton jeu video favori ? <br /> {chat.game} </p>
                        <p> Quelle est ta meilleure xp ?<br /> {chat.lv} </p>
                        <p>  Un bnet ? Un steam ? Un pseudo à donner ? <br /> {chat.pseudo} </p>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {datas}
            </div>
        )
    }
}

export default Histo