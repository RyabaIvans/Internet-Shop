import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addItems} from "../redux/slice/cartSlice";
import {v4} from "uuid";


type PropsType = {
    id: any,
    name: string,
    price: number,
    sizes: number[],
    imageUrl: string,
    types: number[],
    count: number,
    param: string

}


const PizzaBlock = (props: PropsType) => {

    const dispatch = useDispatch()
    const [count, setCount] = useState(0)
    const [categoryIndex, setCategoryIndex] = useState(0)
    const [sizeIndex, setSizeIndex] = useState(0)
    const typePizza = ['тонкое', 'традиционное']
    const onClickhundler = () => {

    }
    const id = props.id
    const title = props.name
    const price = props.price
    const image = props.imageUrl
    const size = props.sizes
    const param: string = v4()

    const addToCart = () => {
        const items = {
            id,
            title,
            price,
            image,
            type: typePizza[categoryIndex],
            size: size[sizeIndex],
            countItems: props.count,
            param
        }
        dispatch(addItems(items))
        setCount(count + 1)
    }


    return (
        <div className="pizza-block-wrapper">
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src={props.imageUrl}
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">{props.name}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {
                            props.types.map((el, index) =>
                                <li key={index} onClick={() => setCategoryIndex(el)}
                                    className={categoryIndex === index ? "active" : ""}>{typePizza[el]}</li>
                            )
                        }
                        {/*<li className="active">тонкое</li>*/}
                        {/*<li>традиционное</li>*/}
                    </ul>
                    <ul>
                        {props.sizes.map((el, index) =>
                            <li key={index} onClick={() => setSizeIndex(index)}
                                className={sizeIndex === index ? "active" : ""}>{el}</li>
                        )}

                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от {props.price} грн</div>
                    <div onClick={addToCart} className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        <i>{count}</i>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PizzaBlock;