import React, { useState } from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'
interface Country {
    name: string;
    region:string;
    flag:string
  }

  type MenuProps = {
    setData: React.Dispatch<React.SetStateAction<Country[] | null>>; 
    setLoading: React.Dispatch<React.SetStateAction<boolean>>; 
  };
  
  const MenuList: React.FC<MenuProps> = ({setData,setLoading}) => {
    const [active, setActive] = useState<string>('All');
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const options = ["All", "Europe", "Asia"];

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    const [error, setError] = useState<Error | null>(null);
  
 //------------------------------------------------------------------------------------
 //---------------------Restcountries fetchData start ------------------------------
 //------------------------------------------------------------------------------------
  async function fetchData() {
    try {
      const response = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag');
     setData(response.data);
     return response.data;
    } catch (error) {
      throw error;
    }
  }

 //------------------------------------------------------------------------------------
 //---------------------Restcountries fetchData END ------------------------------
 //------------------------------------------------------------------------------------

 
 //------------------------------------------------------------------------------------
 //----------------------Skeleton loading function start ------------------------------
 //------------------------------------------------------------------------------------

  const countryChange = async (e: string) => {
    setLoading(true);
    setActive(e);
    setAnchorEl(null)
    try {
      const dataResult = await fetchData();
      if(e !== 'All'){
        const filteredCountries = (dataResult as Country[]).filter((country) => country.region === e);
        setData(filteredCountries);

      }
      setLoading(false);

    } catch (error) {
        setLoading(false);

      setError(error as Error);

    }
  };

 //-----------------------------------------------------------------------------------
//----------------------Skeleton loading function start ------------------------------
 //-----------------------------------------------------------------------------------
return (

    <>
    {/*Mobile  Menu*/}

      <Box className={'Mobile-Menu d-sm-block d-md-none w-25'} sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} >
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <img src='/public/Icon.svg' />
      </IconButton>
    </Box>

    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={Boolean(anchorEl)}
      onClose={handleClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
       {options.map((option) => (
          <MenuItem  key={option}
            style={{
              borderBottom:  'none',
              borderRadius: 0,
              color: active === option ? '#000' : '#8B8B8B',
            }}
            onClick={() => countryChange(option)}
          >
            {option}
          </MenuItem>
      ))}
    
    </Menu>

    {/*Mobile  Menu END*/}

{/*Desk Top  Menu*/}
    <ul className='menu Desktop-Menu d-none  d-sm-none d-md-block'>    
    {options.map((option) => (
        <li key={option}>
          <Button className='justify-content-start'
            style={{
              borderBottom: active === option ? '2px solid #000' : 'none',
              borderRadius: 0,
              color: active === option ? '#000' : '#8B8B8B',
            }}
            onClick={() => countryChange(option)}
          >
            {option}
          </Button>
        </li>
      ))}


    </ul>

{/*Desk Top  Menu END*/}

  </>
);
};

export default MenuList;