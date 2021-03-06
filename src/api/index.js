import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData= async (country) =>{ 
    let changeableUrl=url; 

    if(country){
        changeableUrl=`${url}/countries/${country}`;
    }

    try {
       const {data: {confirmed,recovered,deaths,lastUpdate}}= await axios.get(changeableUrl);
       
        return {confirmed,recovered,deaths,lastUpdate};

    } catch (error) {
    }
}
//this is code for show card data 
// export const fetchData= async () =>{ 
//     try {
//        const {data: {confirmed,recovered,deaths,lastUpdate}}= await axios.get(url);
       
//         return {confirmed,recovered,deaths,lastUpdate};

//     } catch (error) {
//     }
// }

export const fatchDailyData= async() =>{ 
    try {
        const {data} = await axios.get(`${url}/daily`);
        
        const modifiData=data.map((dailyData)=>({ 
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date:dailyData.reportDate,
        }));
        return  modifiData;
    } catch (error) {
        
    }
};



export const fatchCountries= async ()=>{ 
try {
    const {data: {countries}} = await axios.get(`${url}/countries`);
    return countries.map((country) =>country.name);
} catch (error) {
    
}
    
};