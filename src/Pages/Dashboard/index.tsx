import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import MenuList from '../../Components/CountryMenu';
interface Country {
  name: string;
  region:string;
  flag:string
}

const Home = () => {

  const [data, setData] = useState<Country[] | null>(null);

  const [error, setError] = useState<Error | null>(null);

  const [loading, setLoading] = useState<boolean>(true);



 //------------------------------------------------------------------------------------
 //---------------------Restcountries fetchData start ------------------------------
 //------------------------------------------------------------------------------------
  async function fetchData() {
    try {
      const response = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag');
     setData(response.data);
     setLoading(false);
     return response.data;
    } catch (error) {
        setLoading(false);

      throw error;

    }
  }

 //------------------------------------------------------------------------------------
 //---------------------Restcountries fetchData END ------------------------------
 //------------------------------------------------------------------------------------

  useEffect(() => {
   fetchData();
  }, []);



  const countryBoxes = Array.from({ length:8 }, (_, index) => (
    <div key={index} className='col-md-12 col-lg-6'>
      <div className='CounrtyBox'>
        <Box sx={{ width: '100%', padding: '20px' }}>
          <Skeleton animation="wave" />
        </Box>
      </div>
    </div>
  ));

 //---------------------------------------------------------------------------------
//----------------------Skeleton loading function END ------------------------------
 //---------------------------------------------------------------------------------

  return (
    <>
    <div className='container'>
        <div className='row gy-4'>
            <div className='col-6 col-sm-6 mt-5 mb-4'><h1>Countries</h1>
            
            </div>
            <div className='col-6 col-sm-6 col-md-6  mt-5 mb-4 '>
                <div className='d-flex flex-row-reverse'>
                <MenuList setData={setData} setLoading={setLoading}/>             

                </div>
            </div>
           {error && <p>Error: {error.message}</p>} 
            {loading? countryBoxes  :data && (
           <>
          {data.map((country: Country) => (
            <div className='col-md-12 col-lg-6'>
            <div className='CounrtyBox' key={country.name}><div className='imageBox'><span><img src={country.flag}/></span></div><div className='DetailsBox'><h2>{country.name}</h2><p>{country.region}</p></div></div>
            </div>
          ))}
          </>
      )}
      </div>
      </div>
    </>
  );
}

export default Home;
