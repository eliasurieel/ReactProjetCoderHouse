import Fetch from "../utils/Fetch"
import { data } from "../utils/Data"
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import ItemList from './itemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState ([]); 
    const { idCategory } = useParams();
  
    useEffect(() => {
      Fetch(2000, data.filter(item => {
          if (idCategory === undefined) return item;
          return item.idCategory === parseInt(idCategory)
      }))
          .then(result => setProducts(result))
          .catch(err => console.log(err))
  }, [products]);
  
  
      return (
          <ItemList items={products} />
      )
  }

export default ItemListContainer;