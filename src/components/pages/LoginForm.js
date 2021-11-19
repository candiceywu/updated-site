import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginForm.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';

function LoginForm ({ login, error }) {

    const [details, setDetails] = useState({password:""});

    const submitHandler = e => {
        e.preventDefault();

        login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>login from loginformjs</h2>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}>
                    </input>
                </div>
                <input type="submit" value="login"></input>
            </div>
        </form>
    )
}

export default LoginForm;

// export default function Login() {


//     const [password, setPassword] = useState("");
//     const isLoggedIn = false;

//     function validateForm() {
//         return password === 'CandoandLianCDMX';
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//     }

//     return (
//         <div className="App">
//             <div className="login-container">
//                 {isLoggedIn ? (
//                     <>
//                         <Router>
//                             <Route path='/' exact component={Home} />
//                         </Router>
//                     </>
//                 ) : (
//                     <div className="Login">
//                         <Form onSubmit={handleSubmit}>
//                             <Form.Group size="lg" controlId="password">
//                                 <Form.Label>Password</Form.Label>
//                                 <Form.Control
//                                     autoFocus
//                                     type="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                 />
//                             </Form.Group>
//                             <Button block size="lg" type="submit" disabled={!validateForm()}>
//                                 Login
//                             </Button>
//                         </Form>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }