import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState(""); 
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    	setFirstName("");
        setLastName("");
    	setEmail("");
    	setPassword("");
        setConfirmPassword("");
    };
    
    return(
        <>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <input type="submit" value="Create User" />
            </form>
                <h3>Your Form Data</h3>
                <div>
                    <label>First Name: { firstName } </label>
                </div>
                <div>
                    <label>Last Name: { lastName }</label>
                </div>
                <div>
                    <label>Email: { email }</label> 
                </div>
                <div>
                    <label>Password: { password }</label> 
                </div>
                <div>
                    <label>Confirm Password: { confirmPassword }</label>
                </div>
            </>
    );
};
    
export default UserForm;
