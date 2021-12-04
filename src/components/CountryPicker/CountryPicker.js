import React , {useState , useEffect} from 'react';
import "./countrypicker.css"
import {fatchCountries} from "../../api"

const CountryPicker = ({handelCountryChange}) => {
    const[country,setCountry]=useState([]);

    useEffect(() => {
        const fetchCountry = async ()=>{ 
            setCountry(await fatchCountries());
        }
        fetchCountry();
    }, [setCountry]);

   
    return (
        <div className="country-picker"> 
            <div className="custom-select">
                <form defaultValue="" onChange={(e) =>handelCountryChange(e.target.value)}> 
                    <select>
                    <option value="">Global</option>
                    {country.map((country,i)=><option key={i} value={country}>{country}</option>)}
                    </select>
                </form>
            </div>
	    </div>
    );
};

export default CountryPicker;
