import { useSelector, useDispatch } from "react-redux";

import { setSearchData } from "../../../redux/actions/actionCreator";
import dateFormat from "../../../date";
import './findHotelsForm.scss';
import Button from '../../button/Button';
import Input from '../../input/Input';


const FindHotelsForm = () => {
    const {city, checkIn, days} = useSelector(state => state.searchData);
    const dispatch = useDispatch();

    const handleSearchData = (name , value) => {
        if (name === 'days') {
                dispatch(setSearchData({
                    days: value,
                    checkOut: value < 1 ? checkIn : checkIn.addDays(+value - 1) // 1-й день включен
                }))
        } else if (name === 'checkIn') {
            dispatch(setSearchData({
                checkIn: new Date(value),
                checkOut: days < 1 ? new Date(value) : new Date(value).addDays(+days - 1) // 1-й день включен
            }))
        }
        else {dispatch(setSearchData({[name]: value}))};
    };
    
//     const checkOutDate = date.addDays(Number(data.days))

    return (
            <form>
                <Input  type={'text'}
                        stateKey={'city'}
                        name={'Локация'}
                        defaultValue={city}
                        handleSearchData={handleSearchData}/>

                <Input  type={'date'}
                        stateKey={'checkIn'}
                        name={'Дата заселения'}
                        defaultValue={dateFormat(checkIn)}
                        handleSearchData={handleSearchData}/>

                <Input  type={'text'}
                        stateKey={'days'}
                        name={'Количество дней'}
                        defaultValue={days}
                        handleSearchData={handleSearchData}/>

                <Button inner={'Найти'}/>

            </form>
    )
}
export default FindHotelsForm;