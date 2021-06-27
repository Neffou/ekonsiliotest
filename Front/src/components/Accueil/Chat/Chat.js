import React, { Component } from 'react';
import { Button } from 'reactstrap';


import "../Accueil.css"
import axios from 'axios';

import { FaPencilAlt } from 'react-icons/fa';


class Chat extends Component {
    constructor(props) {
        super(props);
        this.onChangegame = this.onChangegame.bind(this);
        this.onChangename = this.onChangename.bind(this);
        this.onChangelv = this.onChangelv.bind(this);
        this.onChangepseudo = this.onChangepseudo.bind(this);

        this.state = {
            data: [],
            name: '',
            game: '',
            lv: '',
            pseudo: '',
            status: 'close',
            isToggle: false,
            isToggleput: false,

        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClickput = this.handleClickput.bind(this);
    }


    handleClick = (id) => {
        this.setState({ isToggle: this.state.isToggle === id ? -1 : id });
    }

    handleClickput = (id) => {
        this.setState({ isToggleput: this.state.isToggleput === id ? -1 : id });
    }


    handleChange = (e) => {

        this.setState({ [e.target.name]: e.target.value });
    }

    onChangegame(e) {
        this.setState({ game: e.target.value })
    }

    onChangename(e) {
        this.setState({ name: e.target.value })
    }
    onChangelv(e) {
        this.setState({ lv: e.target.value })
    }
    onChangepseudo(e) {
        this.setState({ pseudo: e.target.value })
    }

    putstatus = (e, chat) => {
        e.preventDefault();
        const config = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: chat.id, status: this.state.status }),
        };
        const url = "http://localhost:4242/api/putstatus";
        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`ajouté avec l'ID ${res}!`);
                }
            }).catch(e => {
                console.error(e);
            }).finally(() => this.setState({ redirect: true }));
    }

    putname = (e, chat) => {
        e.preventDefault();
        const config = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: chat.id, name: this.state.name }),
        };
        const url = "http://localhost:4242/api/putname";
        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`ajouté avec l'ID ${res}!`);
                }
            }).catch(e => {
                console.error(e);
            }).finally(() => this.setState({ redirect: true }));
    }
    putgame = (e, chat) => {
        e.preventDefault();
        const config = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: chat.id, game: this.state.game, }),
        };
        const url = "http://localhost:4242/api/putgame";
        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`ajouté avec l'ID ${res}!`);
                }
            }).catch(e => {
                console.error(e);
            }).finally(() => this.setState({ redirect: true }));
    }
    putlv = (e, chat) => {
        e.preventDefault();
        const config = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: chat.id, lv: this.state.lv, }),
        };
        const url = "http://localhost:4242/api/putlv";
        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`ajouté avec l'ID ${res}!`);
                }
            }).catch(e => {
                console.error(e);
            }).finally(() => this.setState({ redirect: true }));
    }
    putpseudo = (e, chat) => {
        e.preventDefault();
        const config = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: chat.id, pseudo: this.state.pseudo, }),
        };
        const url = "http://localhost:4242/api/putpseudo";
        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`ajouté avec l'ID ${res}!`);
                }
            }).catch(e => {
                console.error(e);
            }).finally(() => this.setState({ redirect: true }));
    }
    getRandom = async () => {
        const res = await axios.get(
            'http://localhost:4242/api/convstatus'
        )
        this.setState({ data: res.data })
    }
    componentDidMount() {
        this.getRandom()
    }
    render() {
        let datas = this.state.data.map(chat => {
            return (
                <div key={chat.id} className="chat">
                    <div className="chatC">
                        <Button onClick={() => { this.handleClick(chat.id) }}> Conversation {chat.id}</Button>
                    </div>
                    <div style={{ display: this.state.isToggle === chat.id ? 'block' : 'none' }} className="chatChat">
                        <form className="chatstatus" onSubmit={(e) => this.putstatus(e, chat)}>
                            <Button close />
                        </form>
                        <form className="chatForm" onSubmit={(e) => this.putname(e, chat)}>
                            <div>
                                <p> Comment t appelles tu ? </p>
                            </div>
                            <div className="chatpencil">
                                <p className="chatFormText"> {chat.name} </p>
                                <Button onClick={() => { this.handleClickput(chat.name) }}>
                                    <FaPencilAlt />
                                </Button>
                            </div>
                            <div style={{ display: this.state.isToggleput === chat.name ? 'block' : 'none' }} >
                                <input type="text"
                                    id="name"
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                    name="name"
                                />
                                <input type="submit" value="modifier" />
                            </div>
                        </form>
                        <form className="chatForm" onSubmit={(e) => this.putgame(e, chat)}>
                            <div>
                                <p> Quel est ton jeu video favori ?</p>
                            </div>
                            <div className="chatpencil">
                                <p className="chatFormText"> {chat.game} </p>
                                <Button onClick={() => { this.handleClickput(chat.game) }}>
                                    < FaPencilAlt />
                                </Button>
                            </div>
                            <div style={{ display: this.state.isToggleput === chat.game ? 'block' : 'none' }} >
                                <input type="text"
                                    id="game"
                                    onChange={this.handleChange}
                                    value={this.state.game}
                                    name="game"
                                />
                                <input type="submit" value="modifier" />
                            </div>
                        </form>
                        <form className="chatForm" onSubmit={(e) => this.putlv(e, chat)}>
                            <div>
                                <p> Quelle est ta meilleure xp ?</p>
                            </div>
                            <div className="chatpencil">
                                <p className="chatFormText"> {chat.lv} </p>
                                <Button onClick={() => { this.handleClickput(chat.lv) }}>
                                    < FaPencilAlt />
                                </Button>
                            </div>
                            <div style={{ display: this.state.isToggleput === chat.lv ? 'block' : 'none' }} >
                                <input type="text"
                                    id="lv"
                                    onChange={this.handleChange}
                                    value={this.state.lv}
                                    name="lv"
                                />
                                <input type="submit" value="modifier" />
                            </div>
                        </form>
                        <form className="chatForm" onSubmit={(e) => this.putpseudo(e, chat)}>
                            <div>
                                <p> Un bnet ? Un steam ? Un pseudo à donner ? </p>
                            </div>
                            <div className="chatpencil">
                                <p className="chatFormText"> {chat.pseudo} </p>

                                <Button onClick={() => { this.handleClickput(chat.pseudo) }}>
                                    < FaPencilAlt />
                                </Button>
                            </div>
                            <div style={{ display: this.state.isToggleput === chat.pseudo ? 'block' : 'none' }} >
                                <input type="text"
                                    id="pseudo"
                                    onChange={this.handleChange}
                                    value={this.state.pseudo}
                                    name="pseudo"
                                />
                                <input type="submit" value="modifier" />
                            </div>
                        </form>
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

export default Chat