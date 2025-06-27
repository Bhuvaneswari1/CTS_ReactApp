import React from "react";
import {render, screen, fireEvent} from '@testing-library/react'
import TextInput from "./TextInput";

describe('TextInputComponent',()=>{
    test('renders label and input field',()=>{
        render(<TextInput label="Name" id="name" value="" onChange={()=>{}} />)
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
        expect(screen.getByRole('textbox',{name:'Name'})).toBeInTheDocument();
    })
    test('displays error message when provided',()=>{
        const errorMessage = "Name is required";
        render(<TextInput label="Name" id="name" value="" onChange={()=>{}} error={errorMessage} />);
        expect(screen.getByText(errorMessage)).toBeInTheDocument()
        expect(screen.getByRole('textbox',{name:'Name'})).toHaveAttribute('aria-invalid','true')
        expect(screen.getByRole('textbox',{name:'Name'})).toHaveAttribute('aria-describedby','name-error')
    })
})