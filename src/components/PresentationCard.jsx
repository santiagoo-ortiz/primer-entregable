import information from "./Information.json"



const PresentationCard = ( ) => {


    return (
        <div className="Pcard">
            <h1> Nombre persona </h1>

            <img src="" alt="" />

            <ol>
                {information.map((user, index)=>{return <li key={index}> {user.email} </li> })}
                {information.map((user, index)=>{return <li key={index}> {user.phone} </li> })}
                {information.map((user, index)=>{return <li key={index}> {user.location.country} </li> })}
            </ol>

            <button> Cambiar </button>



        </div>
    )
}

export default PresentationCard