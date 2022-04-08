import { useSelector } from "react-redux";

import './findHotelsForm.scss';
import Button from '../../button/Button';
import Input from '../../input/Input';

const FindHotelsForm = () => {
    const state = useSelector(state => state)
    
    return (
            <form>
                <Input type={'text'} name={'Локация'} value={state.request.city}/>
                <Input type={'date'} name={'Дата заселения'} value={state.request.date}/>
                <Input type={'text'} name={'Количество дней'} value={state.request.days}/>
                <Button inner={'Найти'}/>
            </form>
    )
}

export default FindHotelsForm;