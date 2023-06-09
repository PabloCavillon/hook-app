const { todoReducer } = require("../../../components/08-useReducer/todoReducer");
const { demoTodos } = require("../../fixtures/demoTodos");


describe('Pruebas en todoReducer', () => {

    test('Debe de retornar el estado por defecto', () => {

        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);

    })

    test('Debe de agregar un todo', () => {

        const newTodo = {
            id:3,
            desc:'Aprender Express',
            done:false
        }

        const action = {
            type:'add',
            payload:newTodo
        }

        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);

    })

    test('Debe de borrar un todo', () => {

        const action = {
            type:'delete',
            payload:2
        }

        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[0]]);

    })

    test('Debe de hacer el TOGGLE del TODO', () => {
        const action = {
            type:'toggle',
            payload:2
        }

        const state = todoReducer(demoTodos, action);
        expect(state[1].done).toBe(true);
        expect(state[0]).toBe(demoTodos[0]);

    })


})