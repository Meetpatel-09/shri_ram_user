import React, { useEffect, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Banner = () => {

  const [data, setData] = useState([]);
  const [dataAdded, setDataAdded] = useState(0);
  // [
  //   "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
  //   "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
  //   "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
  //   "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg"
  // ]


  const apiURL = "http://127.0.0.1:5000/banner";


  // useEffect(() => {
  //   console.log("banner");
  //   var requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow'
  //   };
    
  //   fetch(apiURL, requestOptions)
  //     .then((res) => res.json())
  //     .then((val) => {
  //       console.log(val['data']);
  //       console.log(val['data'][0]);
  //       console.log(val['data'][0].banner);
  //       val['data'].map((item, key)=> setData(data.push(item.banner)))
        
  //       console.log(data);
  //     });
  // }, [dataAdded]);.
  
  useEffect(() => {
    console.log("banner");
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(apiURL, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data['data']);
        console.log(data['data'][0]);
        let arr= [];
        data['data'].map((item, key)=> arr.push(item.banner));
        setData(arr)
        
        console.log(data);
      });
  }, [dataAdded]);


  const [currSlide, setCurrSlide] = useState(0)

  const prevSlide = ()=>{
    setCurrSlide(currSlide === 0 ? 2: currSlide-1 )
  }

  const nextSlide =()=>{
    setCurrSlide(currSlide === 2? 0: currSlide+1)
  }

  return (
    <div className='w-full h-auto overflow-x-hidden bottom-5'>
      <div className='w-screen'>
        <div style={{transform:`translate(-${currSlide * 100}vw)`}} 
          className='w-[400vw] h-full flex transition-transform duration-1000'>
          <img className='w-screen h-full object-cover' loading='priority'  src={data[0]} alt=''/>
          {/* {data && data.map((index, value, array) => (<img className='w-screen h-full object-cover'  src={array[index]} alt=''/>))} */}
          
          <img className='w-screen h-full object-cover'  src={data[1]} alt=''/>
          <img className='w-screen h-full object-cover'  src={data[2]} alt=''/>
          {/* <img className='w-screen h-full object-cover'  src={data[3]} alt=''/> */}
        </div>

        <div className='absolute bottom-40 left-0 right-0 w-fit mx-auto flex gap-8  '>
          <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center
          hover:cursor-pointer hover:bg-gray-500 hover:text-white active:bg-gray-900 duration-300'> 
            <ArrowBackIcon/>
          </div>
          <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center
          hover:cursor-pointer hover:bg-gray-500 hover:text-white active:bg-gray-900 duration-300'> 
            <ArrowForwardIcon/>
          </div>
        </div>
        
      </div>      
    </div>
  )
}
