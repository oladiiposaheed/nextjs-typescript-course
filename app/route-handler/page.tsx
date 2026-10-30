'use client';
import Image from "next/image";
import { useState } from "react";


export default function Home() {

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();

        const response = await fetch('route-handler/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                completed: false
            })
        });

        const data = await response.json();

        if (data.success) {
            setMessage('Todo Created ' + data.todo.title);
            setTitle('')
        }
        else {
            setMessage('Failed to create Todo')
        }
    };

    return (
        <div>
            <h2>Create Todo</h2>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="'Enter your title"
                    value={title}
                    onChange = {(e) => setTitle(e.target.value)}
                    required   
                />

                <button type="submit">
                    Submit
                </button>
            </form>

            {
                message && <p>{message}</p>
            }
        </div>
    )
}