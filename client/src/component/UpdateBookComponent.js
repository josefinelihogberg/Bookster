import React from 'react';
import { useState } from 'react';
import InputComponent from './InputComponent';

const UpdateBookComponent = () => {
    const [ book, setBook ] = useState('');


  return (
    <div>
        <form>
            <InputComponent fieldName="Title" customName="Title"/>
            <InputComponent fieldName="Author" customName="Author"/>
            <InputComponent fieldName="Quantity" customName="Quantity"/>

            <button type="submit">Save changes</button>
            <button type="reset">Discard changes</button>
        </form>
    </div>
  )
}

export default UpdateBookComponent
