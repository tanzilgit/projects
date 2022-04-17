import React, {useState, useEffect} from 'react'
import axios from 'axios'

function FetchPromise() {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetchPromiseAxios()
    }, [])

    const fetchPromiseAxios = () => {
        axios.get('https://shopnewage.com/collections/garage/products.json')
        .then(res => {
            setItems(res.data.products)
        })
        .catch(err => {
            console.log(err)
        })
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

export default FetchPromise
