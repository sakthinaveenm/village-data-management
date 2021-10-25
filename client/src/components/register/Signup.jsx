import React, {useState} from 'react'
import "./Signup.css"
import { CModal, CModalHeader, CModalTitle, CModalBody} from '@coreui/react'
import Select from 'react-select';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const postData= () => {
        console.log(email);
        console.log(password);
    }

    const [visible, setVisible] = useState(false)

    const options = [
        { value: 'admin', label: 'Admin' },
        { value: 'head', label: 'Family Head' },
        { value: 'memb', label: 'Family Member' },
        { value: 'cash', label: 'Cashier' },
      ];

    return (
        <div className="sign">
            
<form  style={{border:"1px solid #ccc", borderRadius:"30px"}} >
  <div className="container">
    <h1>Login</h1>
    <p>Please fill in this form to Login.</p>
    <hr/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" style={{borderRadius:"30px"}} onChange={(e)=>setEmail(e.target.value)} required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" style={{borderRadius:"30px"}} onChange={(e)=>setPassword(e.target.value)}  required/>

    <div className="clearfix">
      <button type="submit" className="signupbtn" style={{borderRadius:"30px", marginLeft:"100px"}} onClick={postData}>Sign In</button>
    </div>
        
            <div style={{marginLeft:"170px"}}>---   or   ---</div> 

    <div className="clearfix" style={{marginTop:"10px"}}>
      <button type="submit"  className="cancelbtn" style={{borderRadius:"30px", marginLeft:"100px"}}onClick={() => setVisible(!visible)}>Register</button>
    </div>
  </div>
</form>

<CModal visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle>Create a New Account</CModalTitle>
      </CModalHeader>
      <CModalBody>
       
      <form  style={{border:"none", borderRadius:"30px",}} >
  <div className="container">
      <div style={{overflow:"auto"}}>
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>


    <label for="usertype"><b>Usertype</b></label>
    <Select
        options={options}
      />


    <label for="email"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="email" style={{borderRadius:"30px"}}  required/>


    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" style={{borderRadius:"30px"}}  required/>


    <label for="number"><b>Mobile Number</b></label>
    <input type="text" placeholder="Enter Mobile Number" name="number" style={{borderRadius:"30px"}}  required/>


    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" style={{borderRadius:"30px"}}  required/>


    <label for="address"><b>Address</b></label>
    <input type="text" placeholder="Enter Address" name="address" style={{borderRadius:"30px"}}  required/>


    </div>
    <div className="clearfix">
      <button type="submit" className="signupbtn" style={{borderRadius:"30px", marginLeft:"100px", marginTop:"20px"}} onClick={postData}>Sign Up</button>
    </div>
    <div className="clearfix" style={{marginTop:"10px"}}>
      <button type="submit"  className="cancelbtn1" style={{borderRadius:"30px", width:"222px", marginLeft:"100px"}}onClick={() => setVisible(!visible)}>Cancel</button>
    </div>
  </div>
</form>
      </CModalBody>
    </CModal>

        </div>
    )
}

export default Signup
