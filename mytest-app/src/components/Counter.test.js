import React from "react";
import {render,screen, fireEvent} from '@testing-library/react'
import Counter from "./Counter";

describe('Counter component',()=>{
    test('TestCase5: renders with initial count of 0',()=>{
        render(<Counter />)
        expect(screen.getByText('Count: 0')).toBeInTheDocument();
    });
    test('TestCase6: increments count by clicking "Increment" button',()=>{
        render(<Counter />)
        const incrementButton = screen.getByRole('button',{name: /increment/i});
        fireEvent.click(incrementButton) //Simulate a click
        expect(screen.getByText('Count: 1')).toBeInTheDocument();

        fireEvent.click(incrementButton) //Click again
        expect(screen.getByText('Count: 2')).toBeInTheDocument();
    });

    test('TestCase7: decrements count by clicking "Decrement" button',()=>{
        render(<Counter />)
        const decrementButton = screen.getByRole('button',{name:/decrement/i});
        fireEvent.click(decrementButton)
        expect(screen.getByText('Count: -1')).toBeInTheDocument();
    })
})