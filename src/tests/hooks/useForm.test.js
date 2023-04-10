const { renderHook, act } = require("@testing-library/react-hooks");
const { useForm } = require("../../hooks/useForm");

describe('Pruebas en el useForm', () => {

    const initialForm = {
        name: 'Pablo',
        email: 'pabloa.cavillon@gmail.com'
    };

    test('Debe de regresar un formulario por defecto', () => {

        const {result} = renderHook(() => useForm(initialForm));
        const [formValues, handleInputChange, reset] = result.current;

        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    })

    test('Debe de cambiar el valor del formulario (solo name)', () => {

        const {result} = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Laura'
                }
            });
        })

        const [formValues] = result.current;
        
        expect(formValues).toEqual({...initialForm, name:'Laura'});

    })

    test('Debe de reestablecer el formulario con RESET', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Laura'
                }
            });

            reset();
        })

        const [formValues] = result.current;
        
        expect(formValues).toEqual(initialForm);
    })
    

})