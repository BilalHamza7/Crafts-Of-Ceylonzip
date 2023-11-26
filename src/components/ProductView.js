import React, { useEffect, useState } from 'react';
import '../styles/productView.css'
import axios from 'axios';

const images = require.context('../../public/loadimages', true);
const imageList = images.keys().map(image => images(image));

function ProductView() {

  const [products,setProducts] = useState([])

  useEffect(()=>{
    loadProducts();    
  },[])

  const loadProducts = async()=> {
    const result = await axios.get("http://localhost:8083/get");
    setProducts(result.data);
  }


  return (
    <div className='allProducts'>

        {
          products.map((product,index)=>(
            <div className='productsCard'>


              <div className='productImage'>
                 <img src={`${process.env.PUBLIC_URL}/loadimages/${product.filePath}.jpeg`} alt={`image-${index}`} />
                 {/* <img src={product.filePath} alt={`image-${index}`} /> */}
              </div>
              <div className='productName'>
                 <p>{product.name}</p>
              </div>
              <div className='productPrice'>
                 <p>LKR {product.price}</p>
              </div> 
              {/* <div className='productDescription'>
                 <p>Description: {product.type}</p>
              </div>  */}

            </div>
          ))
        }

    </div>
  );
}

export default ProductView;










// import React from 'react';
// import '../styles/productView.css'

// const images = require.context('../../public/loadimages', true);
// const imageList = images.keys().map(image => images(image));

// function ProductView() {
//   return (
//     <div className='allProducts'>

//         {imageList.map((image, index) => (
          
//           <div key={index+1} className='productsCard'>

//             <div className='productImage'>
//               <img src={`${process.env.PUBLIC_URL}/loadimages/${index}.jpeg`} alt={`image-${index}`} />
//             </div>
//             <div className='productName'>
//                 <p>Product Name of : {index}</p>
//             </div>
//             <div className='productPrice'>
//                 <p>Price is $50,00</p>
//             </div>              
              
//           </div>

//         ))}

//     </div>
//   );
// }

// export default ProductView;