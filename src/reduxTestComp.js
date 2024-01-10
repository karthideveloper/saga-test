import {  useDispatch, useSelector } from 'react-redux';
const TestComp=()=>{
    const dispatch = useDispatch();
    const name = useSelector((state) => state.testReducer.name);
    return<h1>{name}</h1>
}
export default TestComp;