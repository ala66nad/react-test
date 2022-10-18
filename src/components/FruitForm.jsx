import { useState } from "react";

const FruitForm = ({ hAdd }) => {
    
    const [fruit, setFruit] = useState("");

    const hSubmit = (e) => {
        e.preventDefault();
        hAdd({ id: new Date().getTime(), name: fruit });
        setFruit("");
    }

    const hChange = (e) => {
        setFruit(e.target.value);
    }

    return (
        <form onSubmit={hSubmit}>
            <input value={fruit} type="text" onChange={hChange} placeholder="Ajouter un fruit" />
            <button>A jouter +</button>
        </form>
    );
};

export default FruitForm;