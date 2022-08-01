import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import SignIn from '../../pages/Signin/Signin'
import SignUp from '../../pages/login/signup'
import Dashbord from '../dashbord/Dashbord'

function Routers(){
    return(
        <div>
             <Router>
                <Routes>
                    <Route exact path="/" element={<SignIn />} />
                        <Route path="SignUp" element={<SignUp />} />
                        <Route path='Dashbord' element={<Dashbord />} />
                </Routes>
            </Router>

        </div>
    )
}

export default Routers