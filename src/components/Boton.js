function Boton({ tipo, handleBoton }) {
    return (
        <div 
        className="boton"
        onClick={handleBoton}
        >
            {tipo.toUpperCase()}
        </div>
    )
}

export default Boton;