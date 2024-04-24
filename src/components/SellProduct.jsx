import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { db, storage } from '../firebase'
import { toast } from 'react-toastify';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { UserAuth } from '../context/AuthContext';

const SellProduct = () => {

    const [productName, setProductName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState(null)
    const fileInputRef = useRef(null)
    const navigate = useNavigate()

    const { user } = UserAuth()

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            if (productName && category && price && location && image) {
            console.log(image)
            const storageRef = ref(storage, image.name)

            await uploadBytes(storageRef, image)
            const imageUrl = await getDownloadURL(storageRef)

            console.log("user",user)

            const docRef = await addDoc(collection(db, "products"), {
                productName,
                category,
                price,
                location,
                imageUrl,
                userId: user.uid,
              });
              console.log("Product added with ID: ", docRef.id);
      
              // Clear form after successful submission
            //   setProductName('');
            //   setCategory('');
            //   setPrice('');
            //   setLocation('');
            //   setImage(null);
            //   fileInputRef.current.value = null;

              console.log("Success")
              navigate('/')

            } else {
              alert("Please fill in all fields!");
            }
          } catch (error) {
            console.error("Error adding product: ", error);
            throw new Error("Error adding product");
          }
        };

    return (
        <div className='bg-gray-100 grid grid-cols-12 pb-5'>

            <span className='col-span-4'></span>
            <div className='col-span-4 m-10 bg-white rounded-xl'>

                <Link to={'/'}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="m-7 w-7 h-7 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg></Link>
                <div className='mx-auto text-center'>
                    <img className='p-2 w-24 mx-auto' src="/olx-logo.png" alt="" />

                    <h1 className='font-bold text-xl mt-6'>Sell your Product</h1>

                    <input onChange={(e) => setProductName(e.target.value)} value={productName} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-10 border-black' type="text" placeholder='Product Name' />
                    <input onChange={(e) => setCategory(e.target.value)} value={category} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-5 border-black' type="text" placeholder='Category' />
                    <input onChange={(e) => setPrice(e.target.value)} value={price} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-5 border-black' type="text" placeholder='Price' />
                    <input onChange={(e) => setLocation(e.target.value)} value={location} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-5 border-black' type="text" placeholder='Location' />

                    {image !== null ? <img className='py-2 px-2 border-2 w-3/4 rounded-lg mx-auto' src={image !== null ? URL.createObjectURL(image) : null} alt="Product image" /> : null}
                    <div>
                        <label className='text-start ms-16 rounded-lg mt-5 block' htmlFor="">Choose a Picture</label>
                        <input onChange={(e) => setImage(e.target.files[0])} className='py-2 px-2 border-2 w-3/4 rounded-lg mt-1 border-black' type="file" placeholder='Choose' ref={fileInputRef}/>
                    </div>


                    <button onClick={handleCreate} className='w-3/4 bg-black text-white font-bold text-center text-lg rounded-md py-3 mt-10 mb-16'>Create</button>


                </div>


            </div>
            <span className='col-span-4'></span>


        </div>
    )
}

export default SellProduct