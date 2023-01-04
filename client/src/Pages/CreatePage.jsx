import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { CreateData } from '../APIServices/CRUD';
import { isEmpty } from '../helpers/EmptyCheck';
export default function CreatePage() {
  let ProductName, ProductCode, Img, UnitPrice, Qty, TotalPrice = useRef();
  const navigate = useNavigate();

  const SaveData = async () => {
    let Product_Name = ProductName.value;
    let Product_Code = ProductCode.value;
    let Product_Img = Img.value;
    let Unit_Price = UnitPrice.value;
    let Product_Qty = Qty.value;
    let Total_Price = TotalPrice.value;

    if (isEmpty(Product_Name)) {
      console.log("Product Name Required");
    }
    else if (isEmpty(Product_Code)) {
      console.log("Product Code Required");
    }
    else if (isEmpty(Product_Img)) {
      console.log("Product Image Required");
    }
    else if (isEmpty(Unit_Price)) {
      console.log("Product Unit Price Required");
    }
    else if (isEmpty(Product_Qty)) {
      console.log("Product Qty Required");
    }
    else if (isEmpty(Total_Price)) {
      console.log("Product Total Price Required");
    }
    else {
      const response = await CreateData(Product_Name, Product_Code, Product_Img, Unit_Price, Product_Qty, Total_Price)
      if (response === true) {
        navigate("/");
      } else {
        console.log("error in adding data")
      }
    }
  }
  return (
    <div>
      <div >
        <h4 >Create Product</h4>
      </div>
      <div >
        <div >
          <div >
            <label >Product Name</label>
            <input ref={(input) => ProductName = input} type="text" />
          </div>
          <div >
            <label >Product Code</label>
            <input ref={(input) => ProductCode = input} type="text" />
          </div>
          <div >
            <label > Image</label>
            <input ref={(input) => Img = input} type="text" />
          </div>
          <div >
            <label> Unit Price</label>
            <input ref={(input) => UnitPrice = input} type="text" />
          </div>
          <div >
            <label > Qty</label>
            <input ref={(input) => Qty = input} type="text" />
          </div>
          <div >
            <label > Total Price</label>
            <input ref={(input) => TotalPrice = input} type="text" />
          </div>
        </div>
        <br />
        <div >
          <div >
            <button onClick={SaveData} >Save</button>
          </div>
        </div>
      </div>

    </div>
  )
}
