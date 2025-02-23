
import { useEffect, useState } from 'react';
import { getCountryOfDespatch } from '../../../../services/declarationService';


const CountriesList = () => {
 
  const [countries, setCountries] = useState([]); // State to hold countries

  
  useEffect(() => {
    getCountryOfDespatch()
      .then((response) => {
        setCountries(response); 
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });
  }, []);



  console.log(countries);
  

  return (
   <ul>
    {countries.length > 0 && countries.map((r) => <li key={r._id}>{r.countryCode}</li>)}
   </ul>
  );
}



export default CountriesList;
