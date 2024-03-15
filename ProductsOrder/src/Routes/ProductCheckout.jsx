import {useState} from 'react';
import Formulario from '../components/Form';
import ProductDetails from '../components/ProductDetails';
import { useParams } from 'react-router-dom';
import back from "../assets/left-arrow-svgrepo-com.svg";
import { useNavigate} from 'react-router-dom';

const ProductCheckout = ({data}) => {
  const { orderId } = useParams();
  const [newProduct, setNewProduct]= useState([]);
  const navigate = useNavigate();
  return (
    <>
    <h1><img id="back" src={back} onClick={() => navigate('/')}/>#{orderId} Order details</h1>
    <div>
    <div id="principalContainer">
        {/*FORM*/}
            <Formulario 
            newProduct={newProduct}
            setNewProduct={setNewProduct}/>
        {/*PRODUCTS*/}
            <ProductDetails 
            data={data} 
            newProduct={newProduct}/>

    </div>
  
    </div>
    </>
  )
}

export default ProductCheckout