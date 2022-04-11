import { useSelector, useDispatch } from "react-redux";

import { setSearchData } from "../../../redux/actions/actionCreator";
import './findHotelsForm.scss';
import Button from '../../button/Button';
import Input from '../../input/Input';


const FindHotelsForm = () => {
    const data = useSelector(state => state.searchData)

    const dispatch = useDispatch();

    const handleSearchData = (name , value) => {
      dispatch(setSearchData({[name]: value}));
    };


    return (
            <form>
                <Input  type={'text'}
                        stateKey={'city'}
                        name={'Локация'}
                        defaultValue={data.city}
                        handleSearchData={handleSearchData}/>

                <Input  type={'date'}
                        stateKey={'date'}
                        name={'Дата заселения'}
                        defaultValue={data.checkIn}
                        handleSearchData={handleSearchData}/>

                <Input  type={'text'}
                        stateKey={'days'}
                        name={'Количество дней'}
                        defaultValue={data.days}
                        handleSearchData={handleSearchData}/>

                <Button inner={'Найти'}/>

            </form>
    )
}
export default FindHotelsForm;