import React, { useState } from 'react';
import '../styles/sellerview.css'
import AddImage from '../images/addImage.png';
import axios from 'axios';

export default function SellerView({ selectedOption }) { // (pro)--comes in Object form or ({ selected})

const [imagePreview, setImagePreview] = useState(null);

 const onSelectedFile = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const previewImage = reader.result;
        setImagePreview(previewImage);
      };
      reader.readAsDataURL(file);
    }
};

  return (
    <div>
      {(!selectedOption || selectedOption === 'Product') && (

          <div className='productOption'>

            <div className='column1'>

                <div className='productDetailHeading1'>
                  <h4>Add Your Product Details</h4>
                </div>

                <div className='productDetail1'>

                  <form action="" method='post'>

                  <label htmlFor="productCategory">Product Category*</label>
                    <select id="productCategory" name="productCategory" required>
                        <option value="null">--Select--</option>
                        <option value="woodwork">Woodwork</option>
                        <option value="textiles">Textiles</option>
                        <option value="basketry">Basketry</option>
                    </select><br/>

                    <label htmlFor="productName">Product Name*</label>
                    <input type="text" id="productName" name='productName' autoComplete='off'/><br/>

                    <label htmlFor="productPrice">Product Price*</label>
                    <input type="text" id="productPrice" name='productPrice' autoComplete='off'/><br/>
                    
                    <label htmlFor="productDescription">Product Description*</label>
                    <textarea id="productDescription" rows="5" name='productDescription' autoComplete='off'></textarea><br/>

                    <label htmlFor="productWeight">Item Weight (Kg)*</label>
                    <input type="number" id="productWeight" name='productWeight' autoComplete='off'/>

                  </form>
                </div>
                <br/>
                <div className='productDetailHeading2'>
                  <h4>Package size (Inch)</h4>
                </div>
                <div className='productDetail2'>

                  <form action="" method="">

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

                  <form action="" method="post">
                    <input type="file" accept="image/*" id='uploadImg' onChange={onSelectedFile} />
                  </form>

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
          {/* Content for Order */}
          <h2>Order Page</h2>
          <p>This is the content for the Order page.</p>
        </div>
      )}
    </div>
  );
}
