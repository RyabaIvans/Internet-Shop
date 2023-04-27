import React, {useEffect} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/Sceleton";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination/Pagination";
import {useSelector} from "react-redux";
import {setCategoryId, setPageCount} from "../redux/slice/filterSlice";
import {useNavigate} from "react-router-dom";
import {fetchUserById} from "../redux/slice/productSlice";
import {useAppDispatch} from "../redux/store";


const Home = () => {
    const dispatch = useAppDispatch()
    const searchValue: any = useSelector<any>(state => state.filterSlice.searchValue)
    const categoryType: any = useSelector<any>(state => state.filterSlice.categoryId)
    const sort: any = useSelector<any>(state => state.filterSlice.sort)
    const currentPage: any = useSelector<any>(state => state.filterSlice.pageCount)
    const items: any = useSelector<any>(state => state.productSlice.items)
    const status: any = useSelector<any>(state => state.productSlice.status)


    const qs = require('qs');
    const navigate = useNavigate()

    const onChangeCategory = (id: number) => {
        dispatch(setCategoryId(id))
    }
    const onChangePagination = (n: number) => {
        dispatch(setPageCount(n))
    }


    const search = searchValue ? `search=${searchValue}` : ''


    const axiosPizza = async () => {
        dispatch(fetchUserById({currentPage, categoryType, search, sort}))
    }

    useEffect(() => {
            axiosPizza()
        }
        , [categoryType, sort, searchValue, currentPage]
    )

    useEffect(() => {
            const queryStr = qs.stringify({
                    sort: sort.sortProperty,
                    categoryType,
                    currentPage
                }, {addQueryPrefix: true}
            )
            navigate(`${queryStr}`)

        }, [categoryType, sort, currentPage]
    )


// filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
    const pizzas = items.map((el: object, index: number) => < PizzaBlock key={index} param={''} count={1} id={''}
                                                                         name={''}
                                                                         price={0}
                                                                         sizes={[]}
                                                                         imageUrl={''}
                                                                         types={[]} {...el}/>)
    const skeletons = [...new Array(6)].map((b, index) => <Skeleton key={index}/>)
    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories categories={categoryType} setCategory={onChangeCategory}/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {
                        status === 'success'
                            ? pizzas
                            : skeletons
                    }


                </div>
                <Pagination onChangePage={onChangePagination}/>
            </div>
        </>
    );
};

export default Home;