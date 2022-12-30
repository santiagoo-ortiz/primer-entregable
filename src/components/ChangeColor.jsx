const ChangeColor = ( {color, email, number, ubication, name, fuente} ) => {



    return (

        

            <div className="container">

                <div className="principal-card"
            style = { {fontFamily: fuente} }
            >

            <h1 className="texto" style = { {color: color} }> {name} </h1>
            <p className="texto" style = { {color: color} }> {email} </p>
            <p className="texto" style = { {color: color} }> {number} </p>
            <p className="texto" style = { {color: color} }> {ubication} </p>
</div>
        </div>

    )


}

export default ChangeColor