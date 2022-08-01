import React from "react";
import './signup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, requirePropFactory } from "@mui/material";
import { Signup } from "../../srevices/UserService";
import img from "../logo/Logo.jpg"
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Box } from "@mui/material";


const firstnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const usernameRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignUp() {


    const [signUpObj, setSignUpObj] = React.useState({ firstName: '', lastName: '', email: '', password: '', service: 'advance' })
    const [objRegex, setRegexObj] = React.useState({
        firstNameBorder: false, firstNameHelper: '', lastNameBorder: false, lastNameHelper: '',
        userNameBorder: false, userNameHelper: '', passwordBorder: false, passwordHelper: ''
    })


    const takeFirstName = (event) => {
        setSignUpObj({ ...signUpObj, firstName: event.target.value })
    }

    const takeLastName = (event) => {
        setSignUpObj({ ...signUpObj, lastName: event.target.value })
    }

    const takeUserName = (event) => {
        setSignUpObj({ ...signUpObj, email: event.target.value })
    }

    const takePassword = (event) => {
        setSignUpObj({ ...signUpObj, password: event.target.value })
    }


    const submitFunction = () => {

        let firstNameTest = firstnameRegex.test(signUpObj.firstName)
        let lastNameTest = lastnameRegex.test(signUpObj.lastName)
        let userNameTest = usernameRegex.test(signUpObj.email)
        let passwordTest = passwordRegex.test(signUpObj.password)
        // let confirmTest = passwordRegex.test(signUpObj.confirm)

        if (firstNameTest === true) {
            setRegexObj(prevState => ({ ...prevState, firstNameBorder: false, firstNameHelper: '' }))
        } else {
            setRegexObj(prevState => ({ ...prevState, firstNameBorder: true, firstNameHelper: "Please enter correct first name" }))
        }

        if (lastNameTest === true) {
            setRegexObj(prevState => ({ ...prevState, lastNameBorder: false, lastNameHelper: '' }))
        } else {
            setRegexObj(prevState => ({ ...prevState, lastNameBorder: true, lastNameHelper: "Please enter correct last name" }))
        }

        if (userNameTest === true) {
            setRegexObj(prevState => ({ ...prevState, userNameBorder: false, userNameHelper: '' }))
        } else {
            setRegexObj(prevState => ({ ...prevState, userNameBorder: true, userNameHelper: "Please choose correct username" }))
        }

        if (passwordTest === true) {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: false, passwordHelper: '' }))
        } else {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: true, passwordHelper: "Use 8 or more characters with a mix of letters, numbers, and symbols" }))
        }



        if (firstNameTest === true && lastNameTest === true && userNameTest === true && passwordTest === true) {
            Signup(signUpObj)
                .then((resp) => { console.log(resp) })
                .catch((error) => { console.log(error) })
        }
    }


    return (

        <Container className="rootContainer">
            <div className="main-Conts" >
                <div className="sub-main">
                    <div className="goolelogo">
                        <h3 className="t1">G</h3>
                        <h3 className="t2">o</h3>
                        <h3 className="t3">o</h3>
                        <h3 className="t4">g</h3>
                        <h3 className="t5">l</h3>
                        <h3 className="t6">e</h3>
                    </div>
                    <div className="signin">
                        <h3>Create your Google Account</h3>
                    </div>
                    <div className="text">
                        <p>to continue to Gmail</p>
                    </div>
                    <div class="Name">
                        <TextField id="outlined-basic" error={objRegex.firstNameBorder} helperText={objRegex.firstNameHelper} onChange={takeFirstName} label="First name" variant="outlined" size="small" />
                        <TextField id="outlined-basic" error={objRegex.lastNameBorder} helperText={objRegex.lastNameHelper} onChange={takeLastName} label="Last name" variant="outlined" size="small" />
                    </div>
                    <div className="username">
                        <TextField error={objRegex.userNameBorder} helperText={objRegex.userNameHelper} onChange={takeUserName} fullWidth label="Username" id="fullWidth" size="small" />
                    </div>
                    <div className="mail">
                        <p>@gmail.com</p>
                    </div>
                    <div className="char">
                        <p className="char1">You can use letters numbers & periods</p>
                    </div>
                    <div class="pass">
                        <TextField id="outlined-basic" error={objRegex.passwordBorder} helperText={objRegex.passwordHelper} onChange={takePassword} label="Password" variant="outlined" size="small" />
                        <TextField id="outlined-basic" error={objRegex.passwordBorder} helperText={objRegex.passwordHelper} onChange={takePassword} label="Confirm" variant="outlined" size="small" />
                    </div>
                    <div className="logintext1">
                        <p className="s-text">Use 8 or more characters with a mix of letters numbers & symbols</p>
                    </div>
                    <div className="showPassword">
                        <Button>< CheckBoxIcon /></Button>
                        <p className="B">Show password</p>

                    </div>
                    <div className="instead">
                        <Button>Sign in instead</Button>
                    </div>
                    <div className="button">
                        <Button onClick={submitFunction} variant="contained" href="#contained-buttons">
                            Next
                        </Button>
                    </div>
                </div>

                <div className="Sub-main2">
                    <div className="img">
                        <img src={img} style={{ height: '35vh', width: '80%', marginLeft: '3.5rem', marginTop: '5rem' }} alt="" />
                    </div>
                    <div className="text-logo">
                        <p className="allGoogle">One account. All of Google working for you.</p>
                    </div>

                </div>

            </div>
        </Container>

    );
}

export default SignUp;