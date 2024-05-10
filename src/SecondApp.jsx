import React, { useEffect } from 'react';

const SecondApp=()=>{
  const API='https://apidojo-booking-v1.p.rapidapi.com/currency/get-exchange-rates?base_currency=USD&languagecode=en-us';
  const fetchUser=async (url)=>{
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(()=>{
    fetchUser(API);
  },[])
  return (
    <>
      <h1>hello</h1>
    </>
  );
}
export default SecondApp;