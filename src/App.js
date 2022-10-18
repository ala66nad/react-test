import { useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";

function App() {

    const [fruits, setFruits] = useState([
        { id: 1, name: "Pomme" },
        { id: 2, name: "Fraise" },
        { id: 3, name: "Poire" }

    ]);

    const hDelete = (fruit) => {
        setFruits([...fruits].filter(f => f.id !== fruit.id));
    }

    const hAdd = (fruit) => {
        const fruitsCopy = [...fruits];
        fruitsCopy.push(fruit);
        setFruits(fruitsCopy);
    }

    return (
        <div className="container">
            <h1>Liste de fruits</h1>
            <ul>                
                {fruits.map( fruit => <Fruit key={fruit.id} fruit={fruit} onClick={() => hDelete(fruit)} />)}
            </ul>
            <FruitForm hAdd={hAdd} />
        </div>
    );
}

export default App;
