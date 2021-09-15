import React from 'react';
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
    // console.log(props);
    const {chats, activeChat, userName, messages} = props;
    const chat = chats && chats[activeChat];
    console.log(chat)

    const renderMessage = () => {
      const keys = Object.keys(messages);
      // console.log(keys)
      //  alert(keys)
        return keys.map((key, index)=>{
            const message = messages[key];
            const lastMessageKey = index === 0? null : keys[index-1]
            const isMyMessage = userName === message.sender.username;

            <div key={`msg_${index}`} style={{width:'100%'}}>
                <div className='message-block'>

                    {
                        isMyMessage ?
                            <MyMessage/>
                            :<TheirMessage/>
                    }
                </div>
                <div className='message-receipts' style={{marginRight: isMyMessage ?' 20px' : '13px' , marginLeft: isMyMessage ? '20px ':' 10px'}}></div>

            </div>

        })

    }

    renderMessage();
    return (
        <div>Hello message</div>

    )

}

export default ChatFeed;