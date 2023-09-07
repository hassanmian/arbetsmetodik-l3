function Ingredient(props) {
    return (
        <li>✔ {props.name}: {props.quantity} {props.unit}</li>
    )
}

export default Ingredient;