function CarInfo(props){
    console.log("HEJ!")
    console.log(props)
    return (
        <p>
            {props.brand} - {props.model} <br/>
            Årsmodell: {props.modelYear}
        </p>
    )
}

export default CarInfo;