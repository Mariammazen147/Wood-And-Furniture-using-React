import { useEffect, useState } from "react"
import Banner from "./Banner";
import { useParams, useSearchParams } from "react-router-dom";

const ProductDetails = ()=>{
    const [test,setTest]= useState(0)
    const params = useParams()
    const [searchParams,setSearchParams] = useSearchParams()
    
    console.log(params);
    console.log('search: ',searchParams);
    console.log('price: ',searchParams.getAll('price'));


    

    console.log('hello');
    
    useEffect(()=>{
        console.log('welcome');

    },[test])

    return<>
    <Banner />
     <button onClick={()=>{
        searchParams.append('key','asdasd')
        setSearchParams(searchParams)
        setTest((prev)=>{
            console.log(prev);
            return prev +1
            
        })
    }}>click me</button>
    </>
}

export default ProductDetails