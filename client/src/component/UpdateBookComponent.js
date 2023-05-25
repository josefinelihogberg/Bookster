import React from 'react';
import { useState } from 'react';
import adminService from '../service/adminService';
import InputComponent from './InputComponent';


const UpdateBookComponent = () => {
    const [ book, setBook ] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();

        let resp = await adminService.addBook(book);
        let data = await resp.json()

        console.log(data);
    }


    const handleChange = ({ name, value}) => {
        setBook({...book, [name]: value});
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <h3>Add/Edit Book</h3>
            <InputComponent fieldName="Title" customName="title" onTextChange={handleChange}/>
            <InputComponent fieldName="Author" customName="author" onTextChange={handleChange}/>
            <InputComponent fieldName="Quantity" customName="quantity" onTextChange={handleChange}/>

            <button type="submit">Save changes</button>
            <button type="reset">Discard changes</button>
        </form>
    </div>
  )
}

export default UpdateBookComponent;
