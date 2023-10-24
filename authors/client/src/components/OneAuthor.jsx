import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const SingleAuthor = () => {

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

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(res => {
            console.log("success deleting author");
            console.log(res)
            navigate("/")
        })
        .catch(err => {
            console.log("error deleting author", err.response);
        })
    }
    // const handleDelete = (authorId) => {
    //     axios.delete('http://localhost:8000/api/authors/' + authorId)
    //         .then(res => {
    //             console.log("success deleting author");
    //             console.log(res)
    //             navigate("/")
    //             const filteredAuthors = allAuthors.filter((author) => {
    //                 return author._id !== authorId;
    //             });
    //             setAllAuthors(filteredAuthors);
    //             })
    //         .catch(err => {
    //             console.log("error deleting author", err.response);
    //         })
    // }

    return (
        <div>
            <h2>Author: {author.name}</h2>
            <button onClick={(e) => handleDelete(author._id)} style={{backgroundColor: 'red'}}>Delete</button>
        </div>
    )
}

export default SingleAuthor