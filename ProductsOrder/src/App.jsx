import { useState, useEffect } from 'react'
import OrderTable from './components/OrderTable';
import ProductCheckout from './Routes/ProductCheckout';
import './Styles/Principal.css'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Loader from './components/Loader';


function App() {
  const [loading, setLoading] = useState(true);
  const [data, getData] = useState();
  //API CALL
 const url= "https://eshop-deve.herokuapp.com/api/v2/orders";
 const token="eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ";

const getProducts = async() =>{
const headers = new Headers();
headers.append("Authorization", "Bearer " + token);

var requestOptions = {
  method: 'GET',
  headers,
  redirect: 'follow'
};

await fetch(url, requestOptions)
  .then(response => response.text())
  .then(result => {
    var data = JSON.parse(result)
    getData(data.orders)
    setLoading(false);
  }
    
    )
  .catch(error => console.log('error', error));
}
//API END

useEffect(() => {
  getProducts()
  console.log("data ", data);
  
}, [])

return (
  <Router>
    <Routes>
      <Route path="/" element={<Home loading={loading} data={data}/>} />
      <Route path="/orderdetails/:orderId" element={<ProductCheckout data={data}/>} />
    </Routes>
  </Router>
)
}

function Home({data, loading}){
  return (
    <>
    <h1>Order management</h1>
    {loading ? <Loader/> :
    <div>
      <OrderTable data= {data}/>
      </div>
}
    </>
  )
}

  

export default App
