import { useEffect, useState } from "react"
import { Banner } from "../../components/Banner"
import { Products } from "../../components/Products"
import { useLoaderData } from "react-router-dom"
import PromoSection from "../../components/PromoSection"

export const Home = () => {

  const [products, setProducts] = useState([])
  const data1 = useLoaderData()

  const [data, setData] = useState(null);
  const [dataAdded, setDataAdded] = useState(0);

  const apiURL = "http://127.0.0.1:5000/product";

  useEffect(() => {
    console.log("products");
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data['products']);
        console.log(data['products'][0]);
        setData(data['products']);
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
      {/* <Banner/> */}
      <PromoSection />
      {data &&  <Products products={data}/>}
    </div>
  )
}
