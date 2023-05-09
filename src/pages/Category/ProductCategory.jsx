import { useEffect, useState } from "react";
import { Banner } from "../../components/Banner";
import { Products } from "../../components/Products";
import { useLoaderData, useParams } from "react-router-dom";

export const ProductByCategory = () => {
  const [products, setProducts] = useState([]);
  const data1 = useLoaderData();

  const [data, setData] = useState(null);
  const [dataAdded, setDataAdded] = useState(0);

  const { id } = useParams();

  const apiURL = "http://127.0.0.1:5000/product/c";

  useEffect(() => {
     var myHeaders = new Headers();
     myHeaders.append("Content-Type", "application/json");
     
     var raw = JSON.stringify({
       "category": id
     });
     
     var requestOptions = {
       method: 'PATCH',
       headers: myHeaders,
       body: raw,
       redirect: 'follow'
     };
     
     fetch("http://127.0.0.1:5000/product/c", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data["products"]);
        console.log(data["products"][0]);
        setData(data["products"]);
        // if (data["status"] === 201) {
        // }
        console.log(data);
      });
  }, [dataAdded]);

  // useEffect(()=>{
  //   setProducts(data1.data)
  // },[data1])

  return (
    <div>
      {/* <Banner /> */}
      {data && <Products products={data} />}
    </div>
  );
};
