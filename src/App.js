import './App.css';
import { Home } from './pages/Home/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Cart } from './pages/cart/cart';
import { productsData } from './api/Api';
import { createBrowserRouter,Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom';
import { Product } from './pages/product/product';
import { Login } from './pages/login/Login';
import NoPage from './pages/NoPage';
import { Category } from './pages/Category/Category';
import { ProductByCategory } from './pages/Category/ProductCategory';


const Layout = ()=>{
  return <div>
    <Header/>
    <ScrollRestoration/>
    <Outlet/>
    <Footer/>
  </div>
}

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path: '/',
        element: <Home/>,
        loader: productsData
      },
      {
        path: '/category',
        element: <Category />
      },
      {
        path:'/category/:id',
        element: <ProductByCategory />
      },
      {
        path:'/product/:id',
        element: <Product/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '*',
        element: <NoPage/>
      }
    ]
  }
]) 


function App() {
  return (
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
