import { useState } from 'react';
import adminService from '../service/adminService';
import InputComponent from './abstract/InputComponent';


const UpdateBookComponent = () => {
    const [ book, setBook ] = useState('');

    const submitHandler = async (e) => {
        
        let resp = await adminService.addBook(book);
        
        console.log(resp);
        }
    

    const handleChange = ({ name, value}) => {
        setBook({...book, [name]: value});
        console.log(book);
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <h3>Add Book</h3>
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