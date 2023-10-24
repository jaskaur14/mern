import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Form = () => {
    const navigate = useNavigate()
    const [author, setAuthor] = useState({
        name: ''
    })

    const [error, setError] = useState({})

    const handleChange = (e) => {
        setAuthor({...author, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/authors", author)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => {
                console.log(err.response.data.error.errors)
                setError(err.response.data.error.errors)
            })
    }

    return (
        <div>
            <h2>Add a new author:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name: </label>
                    <input type="text" name="name" onChange={handleChange} />
                    {
                        error.name ? <p>{error.name.message}</p> : null
                    }
                </div>
                <button>Submit</button>
                <Link to={"/"}>
                    <button>Cancel</button>
                </Link>
            </form>
        </div>
    )
}

export default Form