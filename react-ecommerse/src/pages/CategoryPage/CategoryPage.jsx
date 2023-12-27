import "./CategoryPage.css";
import { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct/CardProduct";
import productMock from "../../mock/product.json";
import { json, useParams } from "react-router-dom";

const CategoryPage = () => {
    const [productos, setProductos] = useState([]);

    let { categoryId } = useParams();

    const pedirProductosId = () => {
        return new Promise((resolve) => {

            const producto = productMock.filter((el) => el.category === categoryId);
            resolve(producto)
        })
    }
    useEffect(() => {
        pedirProductosId(json(categoryId))
            .then((res) => {
                setProductos(res)
            })
        }, [categoryId])

    return (
        <div>
            <div className="CategoryTitle">
                <h1>{`${categoryId}`}</h1>
            </div>
             <div className="ContainerCategory">
                { productos.map((producto) => {
                    return (
                        <div>
                            {<CardProduct producto={producto} /> }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryPage;