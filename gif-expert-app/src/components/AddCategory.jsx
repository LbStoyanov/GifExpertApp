import { useState } from "react"


const AddCategory = ( { addCategory } ) => {

    const [inputValue, setInputValue] = useState('')


    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        
        if (inputValue.trim().length === 0) return;

        addCategory(inputValue.trim());

        setInputValue('');
    }

    return (
        <form onSubmit={ (event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Search GIFs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}

export default AddCategory

