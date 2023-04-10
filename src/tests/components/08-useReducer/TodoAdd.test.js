import React from 'react';
const { shallow } = require("enzyme")
const { TodoAdd } = require("../../../components/08-useReducer/TodoAdd")


describe('Pruebas en <TodoAdd.js/>', () => {

    const handleAddTodo = jest.fn();
    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={handleAddTodo}
        />
    )

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('No debe de llamar handleAddTodo', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({preventDefault(){}});

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    })

    test('Debe de llamar la funcion hanldeAddTodo', () => {

        const value = 'Aprender React';
        wrapper.find('input').simulate('change', { 
            target:{
                value,
                name:'description'
            }
        })

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({preventDefault(){}});

        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            id:expect.any(Number),
            desc:value,
            done:false
        });

        expect(wrapper.find('input').prop('value')).toBe('');
    })



})
