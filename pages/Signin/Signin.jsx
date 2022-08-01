import React from "react";
import './Signin.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Signin } from "../../srevices/UserService";
import { Container } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function SignIn() {
    const navigate = useNavigate();
    const [signinObj, setSignObj] = React.useState({ email: "", password: "" })
    const [regexObj, setRegexObj] = React.useState({
        emailBorder: false, emailHelper: "",
        passwordBorder: false, passwordHelper: ""
    })
    /*const [number, setNumber] = React.useState(0)*/

    const takeEmail = (event) => {
        setSignObj(prevState => ({ ...prevState, email: event.target.value }))
        //  setNumber(12)
        //setSignObj({email:event.target.value})
    }
    const takePassword = (event) => {
        setSignObj(prevState => ({ ...prevState, password: event.target.value }))
        // setSignObj({password:event.target.value})
    }

    const submit = () => {
        console.log(signinObj)
        let emailTest = emailRegex.test(signinObj.email)
        let passwordTest = passwordRegex.test(signinObj.password)
        console.log(emailTest, passwordTest)
        if (emailTest === false) {
            setRegexObj(prevState => ({ ...prevState, emailBorder: true, emailHelper: "enter correct email" }))
        } else if (emailTest === true) {
            setRegexObj(prevState => ({ ...prevState, emailBorder: false, emailHelper: " " }))
        }
        if (passwordTest === false) {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: true, passwordHelper: " " }))
        } else if (passwordTest === true) {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: false, passwordHelper: " " }))
        }
        if (emailTest === true && passwordTest === true) {
            Signin(signinObj)
                .then((resp) => { console.log(resp); navigate('/Dashbord'); localStorage.setItem('token', resp.data.id) })
                .catch((error) => { console.log(error) })
        }
    }


    return (
        // <Container className="rootContiner">

            <Container className="mainSection">
                <div className="sub-mainbox">
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <h3 className="t1">G</h3>
                        <h3 className="t2">o</h3>
                        <h3 className="t3">o</h3>
                        <h3 className="t4">g</h3>
                        <h3 className="t5">l</h3>
                        <h3 className="t6">e</h3>
                    </div>
                </div>
                <div className="section_Two">
                    <div className="sign_in" style={{ display: 'flex', justifyContent: 'center' }}>
                        <h3>Sign in</h3>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p>to continue to Gmail</p>
                    </div>
                    <div className="textFild" >
                        <TextField className="emailorphone1" id="outlined-basic" error={regexObj.emailBorder} helperText={regexObj.emailHelper} onChange={takeEmail} label="email" variant="outlined" />
                        <TextField className="pass1" id="outlined-basic" error={regexObj.passwordBorder} onChange={takePassword} label="pssword" variant="outlined" />

                    </div>
                    <div className="pass">

                    </div>
                    <div className="forgot" style={{ position: 'relative' }}>
                        <Button>Forgot email?</Button>
                    </div>
                    <div style={{ position: 'relative', left: 5 }}>
                        <p className="n">Not your computer? Use Guest mode to sign in privately.</p>
                    </div>
                    <div className="learn_more">
                        <Button>Learn more</Button>
                    </div>
                    <div className="create_account" style={{}}>
                        <Button color="secondary" className="creatMed">Create account</Button>
                    </div>
                    <div className="nextButton" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button className="button_text" onClick={submit} variant="contained" href="#contained-buttons">
                            Next
                        </Button>
                    </div>
                </div>

            </Container>
        //  </Container> 
    );
}

export default SignIn;


