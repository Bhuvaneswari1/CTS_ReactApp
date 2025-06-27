import React from "react";
import {render, screen, rerender} from '@testing-library/react'
import Login from "./Login";

describe('LoginMessage component',()=>{
    test('TestCase8: renders login message when not logged in',()=>{
        render(<Login isLoggedIn={false} />)
        expect(screen.getByTestId('guest-message')).toBeInTheDocument();
        expect(screen.queryByTestId('welcome-message')).not.toBeInTheDocument();
    }),
    test('TestCase9: renders welcome message when logged in',()=>{
        render(<Login isLoggedIn={true} username="Bob" />)
        expect(screen.getByTestId('welcome-message')).toBeInTheDocument();
        expect(screen.getByText('Welcome back, Bob!')).toBeInTheDocument();
        expect(screen.queryByTestId('guest-message')).not.toBeInTheDocument();
    })
    test('TestCase 10: update message when isLoggedIn prop changes',()=>{
        const {rerender} = render(<Login isLoggedIn={false} />)
        expect(screen.getByTestId('guest-message')).toBeInTheDocument();

        rerender(<Login isLoggedIn={true} username="Charlie" />)
        expect(screen.getByTestId('welcome-message')).toBeInTheDocument();
        expect(screen.getByText('Welcome back, Charlie!')).toBeInTheDocument();
        expect(screen.queryByTestId('guest-message')).not.toBeInTheDocument();
    })
})