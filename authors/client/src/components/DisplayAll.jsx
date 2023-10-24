import { useEffect } from 'react'
import { useState } from 'react'
import { React } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const DisplayAll = () => {

    const {id} = useParams()
    const [allAuthors, setAllAuthors] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res => {
            console.log(res)
            setAllAuthors(res.data.authors)
            console.log(Array.isArray(res.data.authors)) 
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const handleDelete = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                console.log("success deleting author");
                console.log(res)
                const filteredAuthors = allAuthors.filter((author) => {
                    return author._id !== authorId;
                });
                setAllAuthors(filteredAuthors);
                })
            .catch(err => {
                console.log("error deleting author", err.response);
            })
    }

    return (
        <div>
            <h2>We have quotes by:</h2>
            { 
                allAuthors.map((author) => (
                    <div key={author._id}>
                        <p>Name: {author.name}</p>
                        <Link to={`/oneAuthor/${author._id}`}>Details</Link>
                        <Link to={'/authors/' + author._id}>
                            <button>Edit an author</button>
                        </Link>
                        <button onClick={(e) => handleDelete(author._id)} style={{backgroundColor: 'red'}}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAll
