import React, { useState } from 'react';
import axios from 'axios';
import './service-css.css';

const CreateUser = () => {
    const [username, setUsername] = useState('');
    const [email, setUseremail] = useState('');

    // const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = { username, email };
        const customConfig = {  headers: { 'Content-Type': 'application/ld+json' }};

        axios.post('http://localhost/api/users', newPost, customConfig)
            .then(response => {
                console.log(`New Post Created with ID: ${response.data.id}`);
            })
            .catch(error => {
                console.error('Error creating a post:', error);
            })
        };

        




    //     axios.post('http://localhost/api/users', newPost)
    //         .then(response => {
    //             console.log(`New Post Created with ID: ${response.data.id}`);
    //         })
    //         .catch(error => {
    //             console.error('Error creating a post:', error);
    //         });
    // };

    return (
        <form onSubmit={handleSubmit} className='creat-user-block'>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="user name" />
            <input type="text" value={email} onChange={(e) => setUseremail(e.target.value)} placeholder="email" />
            {/* <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body"></textarea> */}
            <button type="submit">Create User</button>
        </form>
    );
};

export default CreateUser;