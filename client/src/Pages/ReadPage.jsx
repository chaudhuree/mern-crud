import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Delete, getData } from '../APIServices/CRUD';
import './styles.css';

export default function ReadPage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const getAllData = async () => {
    setLoading(true);

    try {

      const responseData = await getData();
      // console.log(responseData.data.data);
      setData(responseData.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllData();
  }, [])
  // docs: delete item
  const DeleteItem=(id)=>{
    Delete(id).then((result)=>{
        if(result===true){
           console.log("Item Deleted");
           getAllData();
            // navigate("/")
        }
        else{
            console.log("failed to delete");
        }
    })
}
//docs: updateItem
const UpdateItem=(id)=>{
    navigate("/update/"+id)
}
  return (
    <div >
      {loading ? <h1>Loading...</h1> :
        <table border="1" cellSpacing="5" cellPadding="5" className='mauto'>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Code</th>
              <th>Unit Price</th>
              <th>Total Price</th>
              <th>Qty</th>
              <th>Img</th>
              <th>Actions</th>
              {/* <th>Img</th> */}
            </tr>
          </thead>
          <tbody>
            {
              data?.map((item) => {
                return (
                  <tr key={Date.now() + Math.random() + 2}>
                    <td>{item.ProductName}</td>
                    <td>{item.ProductCode}</td>
                    <td>{item.UnitPrice}</td>
                    <td>{item.TotalPrice}</td>
                    <td>{item.Qty}</td>
                    <td><img src={item.Img} alt="" width={50} /></td>
                    <td>
                        <button onClick={()=>DeleteItem(item._id)} >delete</button>
                        <button onClick={()=>UpdateItem(item._id)}>edit</button>
                    </td>
                  </tr>



                )
              })
            }
          </tbody>
        </table>}

    </div>
  )
}


