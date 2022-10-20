import {useState} from "react";


export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            current number: {counter}
            <button onClick={handleIncrement}>
                +
            </button>
            <button onClick={handleDecrement}>
                -
            </button>
        </div>
    )
}