"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const TicketForm = () => {

    const router = useRouter();

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    
    const handleSubmit = async (e) => {
        console.log("Submitted successfully ");
        e.preventDefault();
        const res = await fetch("/api/Tickets", {
            method: "POST",
            body: JSON.stringify({ formData }),
            headers: {
                "Content-Type": "application/json"
            },
        });

        if(!res.ok){
            throw new Error("Failed to Create Ticket")
        }

        router.refresh();
        router.push("/")
    };
    

   

    const startingTicketData = {
        title: "",
        description: "",
        category: "",
        priority: 1, 
        progress: 0,
        status: "not started",
        active: "Hardware Problem",
    };

    const [formData, setFormData] = useState(startingTicketData);

    return (
        <div className='flex justify-center'>
            <form className='flex flex-col gap-3 w-1/2' method='post' onSubmit={handleSubmit}>
                <h3>Create Your Ticket</h3>
                <label htmlFor="title">Ticket</label>
                <input id="title" name='title' type="text" onChange={handleChange} required={true} value={formData.title} />
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" onChange={handleChange} required={true} value={formData.description} rows="5"></textarea>
                <label htmlFor="category">Category</label>
                <select name="category" value={formData.category} onChange={handleChange} >
                    <option value="Hardware Problem">Hardware Problem</option>
                    <option value="Software Problem">Software Problem</option>
                    <option value="Project">Project</option>
                </select>
                <label htmlFor="priority">Priority</label>
                <div>
                    <input id="priority-1" name='priority' type='radio' onChange={handleChange} value={1} checked={formData.priority == 1}  />
                    <label htmlFor="priority-1">1</label>
                    <input id="priority-2" name='priority' type='radio' onChange={handleChange} value={2} checked={formData.priority == 2}  />
                    <label htmlFor="priority-2">2</label>
                    <input id="priority-3" name='priority' type='radio' onChange={handleChange} value={3} checked={formData.priority == 3}  />
                    <label htmlFor="priority-3">3</label>
                    <input id="priority-4" name='priority' type='radio' onChange={handleChange} value={4} checked={formData.priority == 4}  />
                    <label htmlFor="priority-4">4</label>
                    <input id="priority-5" name='priority' type='radio' onChange={handleChange} value={5} checked={formData.priority == 5}  />
                    <label htmlFor="priority-5">5</label>
                </div>
                
                <label htmlFor="progress">Progress</label>
                <input type="range" id="progress" name="progress" value={formData.progress} min="0" max="100" onChange={handleChange}/>
                <label htmlFor="status">Status</label>
                <select name="status" id="status" value={formData.status} onTouchStart={handleChange}>
                <option value="not started">Not Started</option>     
                <option value="started">Started</option> 
                <option value="done">Done</option> 
                </select>

                <input type="submit" className='btn' value="Create Ticket" />
            </form>
        </div>
    );
}

export default TicketForm;
