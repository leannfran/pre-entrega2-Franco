const ItemCart = ({item}) => {
    return (
        <div className='flex'>
            <img src={`/img/${item.img}`} alt={`imagen de ${item.nombre}`}/>
            <div>
                <h5>{item.nombre}</h5>
                <p>cantidad: {item.cantidad}</p>
                <p className="text-xl font-bold text-gray-800 mt-10 mb-3">Precio unitario: ${new Intl.NumberFormat("de-DE").format(item.precio)}</p>
                <p>sub total: ${new Intl.NumberFormat("de-DE").format(item.precio * item.cantidad)}</p>
                <button> eliminar producto</button>
            </div>
        </div>
    );
}

export default ItemCart;
