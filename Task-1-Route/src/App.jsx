import './App.css'
import Home from './pages/Home'
import Layout from './Layouts/Layout'
import About from './pages/About'
import Protofolio from './pages/Protofolio'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Contact from './pages/Contact'
function App() {

 const router= new createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'about',element:<About></About>},
    {path:'portofolio',element:<Protofolio></Protofolio>},
    {path:'Contact',element:<Contact></Contact>}

  ]}
 ])
  return (
    <>
<RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
