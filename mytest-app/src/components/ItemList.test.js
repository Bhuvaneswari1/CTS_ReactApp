import React from "react";
import {render,screen} from '@testing-library/react'
import ItemList from "./ItemList";

describe('ItemListComponent',()=>{
    const mockItems = [
        {id:1,name:'Item A'},
        {id:2, name:'Item B'},
        {id:3, name:'Item C'}
    ];
    test('TestCase11: renders a list of items correctly',()=>{
        render(<ItemList items={mockItems} />)

        expect(screen.getByText('Item A')).toBeInTheDocument();
        expect(screen.getByText('Item B')).toBeInTheDocument();
        expect(screen.getByText('Item C')).toBeInTheDocument();

        const listItems = screen.getAllByRole('listitem')
        expect(listItems).toHaveLength(mockItems.length)
    }),
    test('TestCase12: renders empty list message when no items are provided',()=>{
        render(<ItemList items={[]} />)
        expect(screen.queryAllByRole('listitem')).toHaveLength(0) 
    })
})