import React, { useEffect } from 'react';

const App=()=>{
  const API='https://jsonplaceholder.typicode.com/users';
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
export default App;