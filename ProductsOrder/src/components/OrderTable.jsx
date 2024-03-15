import {useEffect} from 'react';
import '../Styles/OrderTable.css';
import view from "../assets/ver.png";
import { useNavigate} from 'react-router-dom';




const OrderTable = ({data}) => {
  const navigate = useNavigate();

  const verMas = (id) => {
    navigate(`/orderdetails/${id}`);
    
  };

  const formatDate = (date) =>{
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('/');
  }

  useEffect(() => {
    console.log("data ", data)
  }, [])
  
  return (
    <section id="orderSection">
      <h2>Current orders</h2>
    <div class="table-responsive">
  <table class="table">
    <thead>
  <tr>
    <th>ID Orden</th>
    <th>Status</th>
    <th>Date</th>
    <th>Subtotal</th>
    <th>Total</th>
    <th>Details</th>
  </tr>
  </thead>

  {data ? data.map(item => (
<tr >
    <td>{item.id}</td>
    <td>{item.status.status}</td>
    <td>{formatDate(item.dates.paidAt)}</td>
    <td>$ {item.totals.subtotal}</td>
    <td>$ {item.totals.total}</td>
    
    <td className="buttonClass"><button className="details" onClick={() => verMas(item.id)}><img src={view}/></button></td>
    </tr>
    
  )) : null} 
   


  </table>
  
</div>
</section>
  )
}

export default OrderTable