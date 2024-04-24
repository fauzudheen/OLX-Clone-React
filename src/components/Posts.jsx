import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import Card from './Card'
import { collection, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

const Posts = () => {

    const [products, setProducts] = useState([])

    const fetchData = async() => {
        const querySnapshot = await getDocs(collection(db, "products"))
        const allPosts = querySnapshot.docs.map((product) => {
            return {
                ...product.data(),
                id: product.id
            }
        })

        setProducts(allPosts)
    }
    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <>
         <div className='bg-gray-50 shadow-md py-2'>
            <div className='container mx-auto'>
                <div className='flex items-end justify-around text-[#002f34]'>
                <div className='font-semibold'>ALL CATEGORIES</div>
                <div className='text-sm'>Cars</div>
                <div className='text-sm'>Motorcycles</div>
                <div className='text-sm'>Mobile Phones</div>
                <div className='text-sm'>For Sale: Houses & Apartments</div>
                <div className='text-sm'>Scooters</div>
                <div className='text-sm'>Commercial & Other Vehicles</div>
                <div className='text-sm'>For Rent: Houses & Apartments</div>
                </div>
            </div>
         </div>

        {!products.length ? <Shimmer /> : (
            <div className='container mx-auto mb-10'>
                <h1 className='text-2xl my-6'>Fresh recommendations</h1>
                <div className='grid grid-cols-4 gap-4'>
                    {console.log("proudcts", products)}
                    {
                        products.map((prod) => {
                            return <Card key={prod.id} data={prod}/>
                        })
                    }
                </div>
            </div>
        )}

         </>
          
       )
}

export default Posts
