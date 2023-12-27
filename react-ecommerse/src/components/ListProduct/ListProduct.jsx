import { useEffect, useState } from "react";
import productMock from "../../mock/product.json";
import CardProduct from "../CardProduct/CardProduct";
import "./ListProduct.css";

import { Link } from "react-router-dom";

const ListProduct = () => {

    const [productos, setProductos] = useState([]);

    const pedirProductos = () => {
        return new Promise((resolve) => {
            resolve(productMock)
        })
    }
    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProductos(res)
            })
        }, [])

  return (
    <div className="ContainerCard">
        { productos.map((producto) => {
            return (
                <div key={producto.id}>
                   <Link to={`/detail/${producto.id}`} style={{textDecoration: "none" }}>
                   <CardProduct producto={producto} />
                   </Link>                   
                </div>
                )
            }
        )}
    </div>
  )
}

export default ListProduct;



