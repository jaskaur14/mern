import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const EditAuthor = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [author, setAuthor] = useState({
        name: ''
    })
    console.log(id)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res => {
            console.log(res)
            setAuthor(res.data.author)
            console.log(Array.isArray(res.data.authors)) 
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const [error, setError] = useState({})

    const handleChange = (e) => {
        setAuthor({...author, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/authors/${id}`, author)
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
            <h2>Edit Author</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name: </label>
                    <input type="text" name="name" value={author.name} onChange={handleChange} />
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

export default EditAuthor