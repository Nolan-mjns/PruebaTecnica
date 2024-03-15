import {useState} from 'react'
import '../Styles/Formulario.css'

const Formulario = ({newProduct, setNewProduct}) => {
const [advert, setAdvert]= useState(false);
/*info*/
const [sku, setSku]= useState("");
const [name, setName]= useState("");
const [quantity, setQuantity]= useState("");
const [price, setPrice]= useState("");




var skuField = document.getElementById("SKUfield");
var nameField = document.getElementById("productName");
var quantityField = document.getElementById("productQuantity");
var priceield = document.getElementById("productPrice");

const fieldValidation = () =>{
 

  if(skuField.value === ""){
    skuField.classList.add("errorField")
  }else{
    skuField.classList.remove("errorField")
  }

  if(nameField.value === ""){
    nameField.classList.add("errorField")
  }else{
    nameField.classList.remove("errorField")
  }

  if(quantityField.value === ""){
    quantityField.classList.add("errorField")
  }else{
    quantityField.classList.remove("errorField")
  }

  if(priceield.value === ""){
    priceield.classList.add("errorField")
  }else{
    priceield.classList.remove("errorField")
  }
}

const cleanForm = () =>{
  document.getElementById("addForm").reset();
  skuField.classList.remove("errorField")
nameField.classList.remove("errorField")
quantityField.classList.remove("errorField")
priceield.classList.remove("errorField")
setSku("")
setName("")
setQuantity("")
setPrice("")
}

const handleSubmit= (e) =>{
e.preventDefault();


if([sku, name, quantity, price].includes("")){
  setAdvert(true);
  fieldValidation();
}else{
  setAdvert(false);


var objectProduct = {
  
    sku: sku,
    name: name,
    quantity: quantity,
    price: price +".00"
  
  
}


setNewProduct([...newProduct, objectProduct])
cleanForm()

}
}

  return (
    <section id="formSection">
        <h2>Add a new order</h2>
        <form id="addForm" onSubmit={handleSubmit}>
          {advert ? <p className="error">Remember to fill out all the fields!</p> : null}
  <div class="form-group">
    <label for="SKUfield">SKU</label>
    <input type="text" class="form-control" id="SKUfield" placeholder="Add product SKU"
    onChange={(e) => setSku(e.target.value)}/>
  </div>

  <div class="form-group">
  <label for="productName">Name</label>
    <input type="text" class="form-control" id="productName" placeholder="Add product name"
    onChange={(e) => setName(e.target.value)}/>
  </div>

  <div class="form-group">
  <label for="productName">Quantity</label>
    <input type="number" class="form-control" id="productQuantity" placeholder="Stock quantity"
    onChange={(e) => setQuantity(e.target.value)}/>
  </div>

  <div class="form-group">
  <label for="productPrice">Price</label>
    <input type="number" class="form-control" id="productPrice" placeholder="Set product price"
    onChange={(e) => setPrice(e.target.value)}/>
  </div>
  
  
  <button type="submit" class="btn btn-default">Submit</button>
</form>
    </section>
    
  )
}

export default Formulario