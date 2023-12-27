import "./DetailPage.css";
import { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct/CardProduct";
import productMock from "../../mock/product.json";
import { json, useParams } from "react-router-dom";

const DetailPage = () => {
    const [productos, setProductos] = useState([]);

    let { id } = useParams();

    const pedirProductosId = () => {
        return new Promise((resolve) => {

            const producto = productMock.find((el) => el.id === id);
            resolve(producto)
        })
    }
    useEffect(() => {
        pedirProductosId(json(id))
            .then((res) => {
                setProductos(res)
            })
        }, [id])

  return (
    <div className="DetailContainer">
        <h1>Detalle de productos</h1>
        {productos && <CardProduct producto={productos} /> }
    </div>
    )
}

export default DetailPage;