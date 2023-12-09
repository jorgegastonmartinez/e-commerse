// importo la app react
import React from "react";
// importo la hoja de style
import "./App.css";
// Importacion de components
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import NavBar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/IemListContainer/ItemListContainer";

// importo img de los productos
import tortilla from "./assets/tortilla-de-papas.jpg";
import bocataAtun from "./assets/bocata-de-atun.jpg";
import bocataPollo from "./assets/bocata-de-pollo.jpg";
import bocataTortilla from "./assets/bocata-de-tortilla.jpg";
import bocataJamonCrudo from "./assets/bocata-jamon-crudo.jpg";
import bocataVegeta from "./assets/bocata-vegeta.jpg";
import cafeYmedialunas from "./assets/cafe-con-leche-y-medialunas.jpg";
import cappuccino from "./assets/cappuccino.jpg";
import churrosChoco from "./assets/combo-churros-choco.jpg";
import comboMix from "./assets/combo-mix.jpg";
import desayunoArgentino from "./assets/desayuno-argentino.jpg";
import ensaladaAtun from "./assets/ensalada-de-atun.jpg";
import ensaladaPollo from "./assets/ensalada-de-pollo.jpg";
import ensaladaVegeta from "./assets/ensalada-vegeta.jpg";
import latte from "./assets/latte.jpg";
import medialuna from "./assets/medialuna.jpg";
import tostadasConQyM from "./assets/tostadas-con-queso-mermelada.jpg";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />

                <NavBar />

                <ItemListContainer />

                <div className="ContainerCard">
                    <ProductCard 
                        img={tortilla}
                        productTitle="TORTILLA DE PAPAS"
                        productDescription="Papa, cebolla, morron colorado, huevos, perejil, ajo y aceite de oliva"
                        productPrice="$3.700"
                    />
                    <ProductCard 
                        img={bocataAtun}
                        productTitle="BOCATA DE ATÚN"
                        productDescription="baguette, atún, rúcula, pepinillos agridulces, pesto y tomate natural"
                        productPrice="$4.600"
                    />
                    <ProductCard 
                        img={bocataPollo}
                        productTitle="BOCATA DE POLLO"
                        productDescription="baguette, pollo asado,rúcula, queso con hierbas y tomates secos"
                        productPrice="$4.000"
                    />
                    <ProductCard 
                        img={bocataTortilla}
                        productTitle="BOCATA DE TORTILLA"
                        productDescription="baguette, tortilla de papas, alioli y tomates secos"
                        productPrice="$4.000"
                    />
                    <ProductCard 
                        img={bocataJamonCrudo}
                        productTitle="BOCATA DE JAMÓN CRUDO"
                        productDescription="baguette, jamón crudo, queso, rúcula, pesto y tomates secos"
                        productPrice="$5.000"
                    />
                    <ProductCard 
                        img={bocataVegeta}
                        productTitle="BOCATA VEGETA"
                        productDescription="baguette, berenjena, zucchini, queso, rúcula y pesto"
                        productPrice="$3.000"
                    />
                    <ProductCard 
                        img={cafeYmedialunas}
                        productTitle="CAFÉ CON LECHE Y MEDIALUNAS"
                        productDescription="café latte y 2 medialunas de manteca"
                        productPrice="$1.800"
                    />
                    <ProductCard 
                        img={cappuccino}
                        productTitle="CAPPUCCINO"
                        productDescription="café espresso, leche texturizada, cacao y canela"
                        productPrice="$1.500"
                    />
                    <ProductCard 
                        img={churrosChoco}
                        productTitle="CHURROS CON CHOCOLATE"
                        productDescription="3 churros y chocolate San Ginés"
                        productPrice="$2.000"
                    />
                    <ProductCard 
                        img={comboMix}
                        productTitle="COMBO MIX"
                        productDescription="2 churros, 1 porra y chocolate San Ginés"
                        productPrice="$2.000"
                    />
                    <ProductCard 
                        img={desayunoArgentino}
                        productTitle="DESAYUNO ARGENTINO"
                        productDescription="café latte, tostadas de pan, dulce de leche y manteca"
                        productPrice="$3.000"
                    />
                    <ProductCard 
                        img={ensaladaAtun}
                        productTitle="ENSALADA DE ATÚN"
                        productDescription="Papa, cebolla, morron colorado, huevos, perejil, ajo y aceite de oliva"
                        productPrice="$4.600"
                    />
                    <ProductCard 
                        img={ensaladaPollo}
                        productTitle="ENSALADA DE POLLO"
                        productDescription="Papa, cebolla, morron colorado, huevos, perejil, ajo y aceite de oliva"
                        productPrice="$4.500"
                    />
                    <ProductCard 
                        img={ensaladaVegeta}
                        productTitle="ENSALADA VEGETA"
                        productDescription="mix de hojas verdes, vinagreta,atún, tomate, huevo, pepinillos agridulces y aceitunas"
                        productPrice="$3.000"
                    />
                    <ProductCard 
                        img={latte}
                        productTitle="LATTE"
                        productDescription="café espresso y leche texturizada"
                        productPrice="$1.400"
                    />
                    <ProductCard 
                        img={medialuna}
                        productTitle="MEDIALUNAS"
                        productDescription="2 medialunas de manteca"
                        productPrice="$900"
                    />
                    <ProductCard 
                        img={tostadasConQyM}
                        productTitle="TOSTADAS CON QUESO Y MERMELADA"
                        productDescription="tostadas de baguette integral, queso crema y mermelada"
                        productPrice="$2.000"
                    />
                </div>
            </div>
        );
    }
}

export default App;