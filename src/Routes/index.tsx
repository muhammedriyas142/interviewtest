import {Routes ,Route} from "react-router-dom";
import Login from "../Pages/Login";
import Home from '../Pages/Dashboard'

const navigator = () => {
return (
<>
    <Routes>
        <Route index element={<Login/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='home' element={<Home/>}/>
    </Routes>
    </>
);
};

export default navigator;