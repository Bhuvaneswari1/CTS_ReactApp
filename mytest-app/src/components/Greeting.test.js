import React from "react";
import {render,screen} from '@testing-library/react'
import Greeting from "./Greeting";

describe('Greeting Component',()=>{
    test('TestCase3: renders "Hello, World!" when no name is provided',() =>{
        render(<Greeting name="World" />);
        expect(screen.getByText(/Hello, World!/i)).toBeInTheDocument();
    });
    test('TestCase4: renders the correct greeting with a given name',()=>{
        render(<Greeting name="John" />);
        expect(screen.getByText('Hello, John!')).toBeInTheDocument();
    })
})