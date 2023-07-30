import './Login.css';
import Form from "../Form/Form"
import { useState } from 'react';

function Login(props) {

    const [userEmail, setUserEmail] = useState('');
    const [userMobile, setUserMobile] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <Form submitHandler={submitHandler}>
            <div>
                <label htmlFor='userEmail'> Email </label>
                <input type='email' id='userEmail' placeholder='Enter email' name='email' onChange={e => setUserEmail(e.target.value)} value={userEmail} />
            </div>

            <div>
                <label htmlFor='userMobile' > Mobile  </label>
                <input type='phone' id='userMobile' placeholder='Enter Phone number' name='mobile' onChange={e => setUserMobile(e.target.value)} value={userMobile} />
            </div>
            <div>
                <input type='submit' />
            </div>
        </Form>
    );
}

export default Login;
