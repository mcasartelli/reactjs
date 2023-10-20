import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarMenu from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
//import Cards from './components/cards/Cards'

function App() {

  const menu = [
    {
      'name': 'Home',
      'link': '#home',
      'title':  'Go home'
    },
    {
      'name': 'Products',
      'link': '#products',
      'title':  'Show all products'
    },
    {
      'name': 'Categories',
      'link': '#categories',
      'title':  'Seach by categories'
    },
    {
      'name': 'Contact us',
      'link': '#contact',
      'title':  'Get in touch with us'
    }
  ]

  

  const greeting = "Bienvenido a eStore"

  return (
    <>
      <NavbarMenu links={menu}/>
      <ItemListContainer mensaje={greeting}/> 
      
    </>
  )
}

export default App
