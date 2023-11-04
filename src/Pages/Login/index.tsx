import { TextField } from "@mui/material";
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const navigation = useNavigate();
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
return (

<>
<div className="container">
   <div className="row" >
      <div className="col-md-6">
         <div className="divflex">          
            <div className="LoginBox gapFlex flex-column">
            <h1 className="signLabel">Sign In</h1>
            <div className="account gapFlex"><span>New user?</span><span className="linkColor">Create an account</span></div>
             
                <TextField id="UserName" placeholder="User Name or Email" variant="outlined" />
                <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                    </IconButton>
                </InputAdornment>
                }
                placeholder="Password"
                /> 

                <FormGroup>
                    <FormControlLabel
                    control={
                    <Checkbox  name="KeepME" />
                    }
                    label="Keep me signed in"
                    />      
                </FormGroup>

                <Button onClick={()=> navigation('/home')} className="SignButton" variant="contained">
                Sign In
                </Button>  

                <div>
                    <div className="signTextWrapMain mt-3">
                    <div className="signBarWrap"></div>
                    <div className="signTextWrap">Keep me signed in</div>
                    <div className="signBarWrap"></div>
                    </div>
                </div>

               <div>
                <div className="socialMediaWarp mt-3">
                    <div><img src="/public/g.svg"/> </div>
                    <div><img src="/public/f.svg"/> </div>
                    <div><img src="/public/i.svg"/> </div>
                    <div><img src="/public/x.svg"/> </div>
                </div>

           </div>
            </div>
         
            
         </div>      
       
      </div>
      <div className="col-md-6 d-none  d-sm-none d-md-block">
      <div className="divflex">
        <img src="/public/loginImage.svg"/>
        </div>
      </div>
   </div>
</div>
    </>
);
};

export default Login;