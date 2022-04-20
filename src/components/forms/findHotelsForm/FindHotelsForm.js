import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { setSearchData, getHotels } from "../../../redux/actions/actionCreator";
import Button from '../../button/Button';
import Input from '../../input/Input';

import dateApiFormat from "../../../auxiliary_fn/date_api";
import './findHotelsForm.scss';



const FindHotelsForm = () => {
    const {city, checkIn, days} = useSelector(state => state.searchData);
    const dispatch = useDispatch();

    const handleHotels = () => {
        dispatch(getHotels());
    };

    useEffect(() => {
        handleHotels();
    }, [])

    const handleSearchData = (name , value) => {
        if (name === 'days') {
            dispatch(setSearchData({
                days: value,
                checkOut: checkIn.addDays(+value)
            }))
            dispatch(getHotels())
        } else if (name === 'checkIn') {
            dispatch(setSearchData({
                checkIn: new Date(value),
                checkOut: new Date(value).addDays(+days)
            }))
        }
        else {dispatch(setSearchData({[name]: value}))};
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Input  type={'text'}
                    stateKey={'city'}
                    name={'Локация'}
                    defaultValue={city}
                    handleSearchData={handleSearchData}/>

            <Input  type={'date'}
                    stateKey={'checkIn'}
                    name={'Дата заселения'}
                    defaultValue={dateApiFormat(checkIn)}
                    handleSearchData={handleSearchData}/>

            <Input  type={'text'}
                    stateKey={'days'}
                    name={'Количество дней'}
                    defaultValue={days}
                    handleSearchData={handleSearchData}/>

            <Button inner={'Найти'} onClicked={handleHotels}/>
        </form>
    )
}
export default FindHotelsForm;