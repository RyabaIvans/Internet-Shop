import React from "react";


type PropsType = {
    categories: number
    setCategory: (n: number) => void
}

function Categories(props: PropsType) {
    const categoryArray = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']


    const onCkickCategoryHundler = (n: number) => {
        props.setCategory(n)
    }

    return (
        <div className="categories">
            <ul>
                {
                    categoryArray.map(
                        (el, index) =>
                            <li key={index} onClick={() => onCkickCategoryHundler(index)}
                                className={props.categories === index ? "active" : ""}>
                                {el}
                            </li>
                    )
                }

            </ul>
        </div>
    )
}

export default Categories