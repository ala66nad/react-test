
const Fruit = (props) => {

    const { fruit, onClick } = props;    
    
    return (
        <li>
            {fruit.name} 
            <button onClick={onClick}>x</button>
        </li>
    );
};

export default Fruit;