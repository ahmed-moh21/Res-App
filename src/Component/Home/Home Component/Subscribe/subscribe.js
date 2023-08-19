import { useState } from 'react';
import "./subscribe.css";
import { BsFillCursorFill, BsEmojiLaughing } from "react-icons/bs";


export default function Subscribe() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');

    } else {
      setError(null);

      let mySend = document.getElementById("iconSend");
      mySend.classList.add("ic-s-display");
    }

    setMessage(event.target.value);
  };

  return (
    <div className='sub-page'>
      <div className='sub-mes'>
        <p>
          Subscribe to newsletter to get updates {";)"}
        </p>
      </div>
      <div className='email-sub'>
        <div>
          <input
            className='in-put'
            id="message"
            name="message"
            placeholder='Enter your e mail'
            value={message}
            onChange={handleChange}
          />
          <BsFillCursorFill
            onClick={() => {
              /* handel successfull message and disabled input */

              let myMessage = document.getElementById("sucss");
              myMessage.classList.add("sucss-email-display");

              let myInput = document.getElementById("message");
              myInput.setAttribute('disabled', '');
              myInput.value = " "
            }}
            id='iconSend' className='ic-se' />

        </div>

        {error && <h2 className='error-mes'>{error}</h2>}

        <div id='sucss' className='sucss-email'>
          YOUR E-mail HAS BEEN SENT  <BsEmojiLaughing className='ic-s' />
        </div>
      </div>
    </div>
  );
}
