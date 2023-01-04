import axios from 'axios';
// note: res.status aita paici kivabe.. when any request succeed then it will return 200 . it is not coming from my backend status. to show the demonstration console log res.


// docs: get all data
export const getData = async () => {
    const res=await axios.get("http://localhost:5000/api/v1/ReadProduct");

    if(res.status===200){
        // console.log(res)
        return res.data;
    }
}


// docs: create data
// export const CreateData = async (ProductName, ProductCode, Img, UnitPrice, Qty, TotalPrice) => {
//     let URL = "http://localhost:5000/api/v1/CreateProduct";
//     let PostBody = {
//         ProductName: ProductName,
//         ProductCode: ProductCode,
//         Img: Img,
//         UnitPrice: UnitPrice,
//         Qty: Qty,
//         TotalPrice: TotalPrice
//     }
//     return await axios.post(URL, PostBody).then((res) => {
//         if (res.status === 200) {
//             console.log("new data added")
//             return true;
//         }
//         else {
//             console.log("failed to add new data")
//             return false;
//         }
//     }).catch((err) => {
//         console.log(err);
//         return false;
//     });
// }
export const CreateData = async (ProductName, ProductCode, Img, UnitPrice, Qty, TotalPrice) => {
    
try {
    let URL = "http://localhost:5000/api/v1/CreateProduct";
    let PostBody = {
        ProductName: ProductName,
        ProductCode: ProductCode,
        Img: Img,
        UnitPrice: UnitPrice,
        Qty: Qty,
        TotalPrice: TotalPrice
    }
    const res= await axios.post(URL, PostBody)
    console.log(res)
    if (res.status === 200) {
        console.log("new data added")
        return true;
    }
    else {
        console.log("failed to add new data")
        return false;
    }
} catch (error) {
    return false;
}
    
}

// docs: read by id 
// export const ReadByID = (id) => {
//     let URL = `http://localhost:5000/api/v1/ReadProductByID/${id}`;
//     return axios.get(URL).then((res) => {
//         if (res.status === 200) {
//             return res.data['data'];
//         }
//         else {
//             return false;
//         }
//     }).catch((err) => {
//         console.log(err);
//         return false;
//     });
// }
export const ReadByID =async (id) => {
try {
    let URL = `http://localhost:5000/api/v1/ReadProductByID/${id}`;
    const res=await axios.get(URL)
    if (res.status === 200) {
        return res.data['data'];
    }
    else {
        return false;
    }   
} catch (error) {
    console.log(error.message)
    return false;
}
}


// docs: delete data
export const Delete = async (id) => {
    try {
        let URL = `http://localhost:5000/api/v1/DeleteProduct/${id}`;
        const res = await axios.get(URL)
        if (res.status === 200) {
            console.log("data deleted")
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error.message)
        return false;

    }


}

// docs: update data
export const Update = async (id, ProductName, ProductCode, Img, UnitPrice, Qty, TotalPrice) => {

    try {
        let URL = `http://localhost:5000/api/v1/UpdateProduct/${id}`;
        let PostBody = {
            ProductName: ProductName,
            ProductCode: ProductCode,
            Img: Img,
            UnitPrice: UnitPrice,
            Qty: Qty,
            TotalPrice: TotalPrice
        }
        const res = await axios.post(URL, PostBody)
        if (res.status === 200) {
            console.log("data updated")
            return true;
        } else {
            return false;
        }

    } catch (error) {
        console.log(error.message)
        return false
    }


}

