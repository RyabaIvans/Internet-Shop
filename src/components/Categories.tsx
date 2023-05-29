import React from "react";

type PropsType = {
  categories: number;
  setCategory: (n: number) => void;
};

function Categories(props: PropsType) {
  const categoryArray = ["Все", "Светлое", "Темное", "Безалкольное"];

  const onClickCategoryHandler = (n: number) => {
    props.setCategory(n);
  };

  return (
    <div className="categories">
      <ul>
        {categoryArray.map((el, index) => (
          <li
            key={index}
            onClick={() => onClickCategoryHandler(index)}
            className={props.categories === index ? "active" : ""}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories