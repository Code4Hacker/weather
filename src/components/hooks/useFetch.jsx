// import React,{ useEffect, useState } from "react";
// export const Fetcher = (url) => {
//     let array = new Array();
//     const [add, setAdd ] = useState([]);
//     const fetch_url = async () => {
//         const response = await fetch(url);
//         const respond = await response.json();
//         setAdd(respond);
//     }
//     useEffect(() => { 
//         fetch_url(url);
//     }, []);

//     return {add};
// }