import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import PostChatBot from './PostChatBot';
import "../Conversation.css"
class BotChat extends Component {
    render() {
        return (
            <ChatBot
                headerTitle="eKonsilio"
                steps={[
                    {
                        id: 'intro',
                        message: 'Bonjour je suis l assistant virtuel d Areski',
                        trigger: 'Neff'
                    },
                    {
                        id: 'Neff',
                        message: 'tu peux m appeler Neff, et toi comment t appelles tu ? ',
                        trigger: 'name',
                    },
                    {
                        id: 'name',
                        user: true,
                        trigger: 'games'
                    },
                    {
                        id: 'games',
                        message: 'quel est ton jeu video favori ?',
                        trigger: 'game',
                    },
                    {
                        id: 'game',
                        user: true,
                        trigger: 'xp'
                    },
                    {
                        id: 'xp',
                        message: 'Nice, quelle est ta meilleure xp ?',
                        trigger: 'lv',
                    },
                    {
                        id: 'lv',
                        user: true,
                        trigger: 'bnet'
                    },
                    {
                        id: 'bnet',
                        message: 'Un bnet ? Un steam ? Un pseudo à donner ? ',
                        trigger: 'pseudo',
                    },
                    {
                        id: 'pseudo',
                        user: true,
                        trigger: 'q-submit'
                    },
                    {
                        id: 'q-submit',
                        message: 'Merci, tu pourras modifier tes réponses dans l accueil si tu t es trompé',
                        trigger: 'submit'
                    },
                    {
                        id: 'submit',
                        options: [
                            { value: 'y', label: 'envoyer', trigger: 'end-message' },
                        ]
                    },
                    {
                        id: 'no-submit',
                        message: 'les informations ont été correctement envoyées',
                        end: true,
                    },
                    {
                        id: 'end-message',
                        component: <PostChatBot />,
                        asMessage: true,
                        end: true,
                    },
                ]}
            />
        );
    }
}

export default BotChat;

