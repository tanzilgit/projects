import React, {useState, useEffect} from 'react'
import axios from 'axios'


export function FetchAsync() {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetchAsyncAxios()
    }, [])

    const fetchAsyncAxios = async () => {
       try {
           const result = await axios.get('https://shopnewage.com/collections/garage/products.json');
        //    const result2 = await axios.get('2 api');
        //    const result3 = await axios.get('3 api'); 
        
        // etc
           setItems(result.data.products)
       } 
       
       catch (error) {
           console.log(error)
           
       } 
    }
    console.log(items)

    return (
        <div>
            <div>
                {
                    items.map((item, index) => 
                    
                        <p key={index}>{item.title}</p>
                    )
                }
            </div>
        </div>
    )
}

