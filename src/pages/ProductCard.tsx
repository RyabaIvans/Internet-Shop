import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import '../scss/components/app.scss';
import axios from "axios";
import s from './ProductCard.module.scss'


type ItemType = {
    imageUrl: string,
    name: string,
    price: number
}

const ProductCard = () => {
    let {id} = useParams();
    const [data, setData] = useState<ItemType>()

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await axios.get(`https://642e703d8ca0fe3352cf841b.mockapi.io/items/${id}`)
                return setData(res.data)
            } catch (err) {
                alert(err)
            }
        }

        fetchProduct()
    }, [])
    console.log(data)

    if (!data) {
        return <>"Загрузка товара"</>
    }

    return (
        <div className="container">
            <div className={s.main}>
                <div><img src={data.imageUrl} alt="" width='500px' height='500px'/></div>
                <div className={s.grow}>
                    <div className={s.secondBlock}><h1>{data.name}</h1></div>
                    <div className={s.secondBlock}><h3>{data.price} uah</h3></div>
                    <div className={s.secondBlock}>
                        томатний соус, сир, мисливські ковбаски, салямі, цибуля, помідор,
                        зелень, орегано

                    </div>
                </div>

            </div>


        </div>
    );
};

export default ProductCard;