import {useState, useEffect}from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Products.css';
import swal from 'sweetalert';
import { useNavigate} from 'react-router-dom';
import Loader from './Loader';


const ProductDetails = ({newProduct,data}) => {
    const { orderId } = useParams();
    const [product, setProduct] = useState();
    const [newItems, setNewItems] = useState();
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

const modal = () =>{
  swal("Do you want to complete your purchase?", {
    buttons: {
      cancel: "Go back",
      pay: true,
    },
  })
  .then((value) => {
    switch (value) {
   
   
      case "pay":
        swal("Successful Purchase", "Thank you for your support, you'll have more information about your order soon", "success");
        setTimeout(function() {
        navigate('/');
      }, 3000);
        break;
   
      default:
        swal("Take your time!");
        
    }
  });
}

    useEffect(() => {

     if(data && orderId){
      setLoading(false)
      
      //console.log("data filtered ", data.filter((orders) => orders.id === orderId));
      let filtered= data.filter((orders) => orders.id === orderId)
      
      let onlyItems = [];
      filtered.forEach((order) => {
      
        if (Array.isArray(order.items)) {
            
            onlyItems = onlyItems.concat(order.items);
        }
    });
      

      if(filtered.length > 0){
        setProduct(onlyItems)
        
      }else{
        setProduct(null);
      }   }else{
        setLoading(true)
      }
    }, [orderId, data, newProduct])

    useEffect(() => {
      if(newProduct && newProduct.length > 0){
       
        setNewItems([...product, ...newProduct])
       
      }else{
        setNewItems(null)
      }
      
    }, [newProduct, product])
    
    

  return (
    <section id="productSection">
      <h2>Current orders</h2>
      {loading ? <Loader/> :
      <>
    <div class="table-responsive">
  <table class="table">
  <thead>
  <tr>
    <th>SKU</th>
    <th>Name</th>
    <th>Quantity</th>
    <th>Price</th>
    </tr>
   
    {!newItems && product ? product.map(item => ( 
        <>
           <tr key={item.sku}>
        <td>{item.sku ? item.sku : "N/A"}</td>
        <td>{item.name}</td>
        <td className="quantity">{item.quantity}</td>
        <td className="price">$ {item.price}</td>
        </tr>
          
        </>
    )): newItems && newItems.map(newI => (
      <>
      <tr key={newI.sku}>
        <td>{newI.sku ? newI.sku : "N/A"}</td>
        <td>{newI.name}</td>
        <td className="quantity">{newI.quantity}</td>
        <td className="price">$ {newI.price}</td>
        </tr>
        </>
    ))}
  </thead>
 
  
 

    
    


  </table>

</div>

<button type="button" class="btn btn-success btn-lg" onClick={modal}>Pay now</button>

</>}
</section>
  )
}

export default ProductDetails