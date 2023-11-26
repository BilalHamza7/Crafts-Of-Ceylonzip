import React, { useState } from 'react';
import '../styles/sellerview.css'
import AddImage from '../images/addImage.png';
import axios from 'axios';
import SellerAccountDetails from './UserAccountDetails';

export default function SellerView({ selectedOption }) { // (pro)--comes in Object form or ({ selected})

const [imagePreview, setImagePreview] = useState(null);


//to display the image in frontend
 const onSelectedFile = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const previewImage = reader.result;
        setImagePreview(previewImage);

        alert(`Selected Image Path: D:\\downloads\\${file.name}`);
        setfilePath(`D:\\downloads\\${file.name}`);
      };
      reader.readAsDataURL(file);
    }
};

const [name, setName] = useState('Bilal');
const [description, setDescription] = useState('');
const [category, setCategory] = useState('');
const [price, setPrice] = useState('');
const [weight, setWeight] = useState('');
const [filePath, setfilePath] = useState('');
    
//to store image
const createProduct = (file) => { //gets file from 
  const formData = new FormData();
  formData.append('filePath', filePath);
  formData.append('name', name);
  formData.append('description', description);
  formData.append('category', category);
  formData.append('price', price);
  formData.append('weight', weight);

   file.preventDefault();

  axios.post('http://localhost:8083/product/createProduct', formData)
    .then((response) => response.json())
      .then((data) => {
        // Here you can handle the response from the server
        console.log('Server response:', data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      })
}

  return (
    <div>
      {(!selectedOption || selectedOption === 'Product') && (

          <div className='productOption'>

            <div className='column1'>

                <div className='productDetailHeading1'>
                  <h4>Add Your Product Details</h4>
                </div>

                <div className='productDetail1'>

                  <form onSubmit={createProduct} >

                  <label htmlFor="productCategory">Product Category*</label>
                    <select id="productCategory" name="productCategory" onSelect={(e) => setCategory(e.target.value)} required>
                        <option value="null">--Selects--</option>
                        <option value="woodwork">Woodwork</option>
                        <option value="textiles">Textiles</option>
                        <option value="basketry">Basketry</option>
                    </select><br/>

                    <label htmlFor="productName">Product Name*</label>
                    <input type="text" id="productName" name='productName' autoComplete='off'  onChange={(e) => setName(e.target.value)} value={name} required/><br/>

                    <label htmlFor="productPrice">Product Price*</label>
                    <input type="text" id="productPrice" name='productPrice' autoComplete='off'  onChange={(e) => setPrice(e.target.value)} required/><br/>
                    
                    <label htmlFor="productDescription">Product Description*</label>
                    <textarea id="productDescription" rows="5" name='productDescription' autoComplete='off'  onChange={(e) => setDescription(e.target.value)} required></textarea><br/>

                    <label htmlFor="productWeight">Item Weight (Kg)*</label>
                    <input type="number" id="productWeight" name='productWeight' autoComplete='off'  onChange={(e) => setWeight(e.target.value)} required/>

                    <div className='submitButton'>
                      <input type="submit" style={{fontSize: "84%"}}value="Submit Product"/>
                    </div>  
                  </form>
                </div>
                <br/>
                <div className='productDetailHeading2'>
                  <h4>Package size (Inch)</h4>
                </div>
                <div className='productDetail2'>

                  <form >

                    <label htmlFor="productLength">Length*</label>
                    <input type="number" id="productLength" name='productLength' autoComplete='off'/><br/>

                    <label htmlFor="productBreadth">Breadth *</label>
                    <input type="number" id="productBreadth" name='productBreadth' autoComplete='off'/><br/>

                    <label htmlFor="productWidth">Width*</label>
                    <input type="number" id="productWidth" name='productWidth' autoComplete='off'/>

                  </form>

                  </div>
                  <div className='submitButton'>
                      <input type="submit" value="Submit Product" formAction=''/>
                  </div>



            </div>
            <div className='column2'>

              <div className='clickImageUpload'>

                <label className='addImage'>

                  <img src={AddImage} alt="add product" id='productImg' htmlFor='uploadImg'/>
                  <label htmlFor='uploadImg'>Click and Add product photo</label>


                    <input type="file" accept="image/*" id='uploadImg' onChange={onSelectedFile} />


                </label>
 
                {imagePreview && (

                  <div className='previewImage'>
                    <img src={imagePreview} alt='Selected product' />
                  </div>
                )}
                
              </div>              
            </div>
          </div>
      )}

      {selectedOption === 'Order' && (

        <div className='orderDetails'>
          <div className='filter'>
            <input type="text" name="search" placeholder='Search..' autocomplete="off"/>
            <select>
              <option value="Category">Category</option> 
              <option>Database</option>
              <option>Search</option>
            </select>

            <select>
              <option value="filterBy">Filter By</option>
              <option>Price</option>
              <option>Status</option>
            </select>
          </div>

          <div className='orderStatus'>
            <label id='pending'>PENDING - 1</label>
            <label id='progress'>IN PROGRESS - 5</label>
            <label id='delivered'>DELIVERED - 3</label>
          </div>
          
          <div className='orderDetailsFromDatabase'>
            <div className='columnNames'>
              <label>ORDER ID</label>
              <label>PLACED ON</label>
              <label>PRODUCT</label>
              <label>STATUS</label>
              <label>PRICE</label>
            </div>
            <div></div>            

          </div>

        </div>
      )}

      {selectedOption === 'Sales' && (
        <div>
          {/* Content for Order */}
          <h2>Order Page</h2>
          <p>This is the content for the Order page.</p>
        </div>
      )}

      {selectedOption === 'Account Details' && (
        <div>
          <SellerAccountDetails/>
        </div>
      )}
    </div>
  );
}
