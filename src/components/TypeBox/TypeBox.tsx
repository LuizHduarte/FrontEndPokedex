import './style.css'


type TypeProps ={
    type: string,
    color: string
}

export function TypeBox(props: TypeProps){

    const navigateToType = () => {
        // 👇️ navigate to /
        window.location.href = `/type/${props.type}`
    };

    return(
        <span id="typeBox" onClick={navigateToType} style={{
            backgroundColor : props.color
        }}>{props.type}</span>
    )
}