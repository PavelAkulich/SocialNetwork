import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator} from './../../redux/dialogs-reduser';


const Dialogs = (props) => {

  let state = props.dialogsPage;
  
  let dialogsElements = state.dialogsData.map((dialog) => {           // dialog => <DialogItem name={dialog.name} id={dialog.id} /> то же самое
    return <DialogItem name={dialog.name} id={dialog.id} />
  })

  let messageElements = state.messagesData.map(message => <Message message={message.message} id={message.id} />);

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let newMessageBody = state.newMessageBody;

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={c.messages}>
        <div>
          {messageElements}
        </div>
        <div>
          <div>
            <textarea placeholder="Enter your message" onChange={onNewMessageChange} value={newMessageBody}></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;