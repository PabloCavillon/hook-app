import React from 'react';
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
const { TodoListItem } = require("../../../components/08-useReducer/TodoListItem")

describe('Prueba de <TodoListItem/>', () => {
    
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem 
            todo={demoTodos[0]}
            index={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de llamar la funcion handleDelete', () => {

        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);

    })

    test('Debe de llamar la funcion handleToggle', () => {

        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);

    })

    test('Debe de mostrar el texto correctamente', () => {

        const p = wrapper.find('p').text().trim();
        expect(p).toBe(`${0 + 1}. ${demoTodos[0].desc}`);

    })

    test('Debe de tener la clase complete si el TODO.done = true', () => {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem 
                todo={todo}
            />
        );

        expect(wrapper.find('p').hasClass('complete')).toBe(true);

    })

})