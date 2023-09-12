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
            <form onSubmit={() => {}}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                {firstName.length < 2 ? (
                    <p>First Name must be at least 2 characters</p>
                ) : null }
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} />
                </div>
                {lastName.length < 2 ? (
                    <p>Last Name must be at least 2 characters</p>
                ) : null }
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                {email.length < 5 ? (
                    <p>Email must be at least 5 characters</p>
                ) : null }
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                </div>
                {password.length < 8 ? (
                    <p>Password must be at least 8 characters</p>
                ) : null }
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                {confirmPassword !== password ? <p>Passwords must match</p> : null}
            </form>
            </>
    );
};
    
export default UserForm;
