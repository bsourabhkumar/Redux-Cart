import ProductItem from './ProductItem'
import classes from './Products.module.css'

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 600,
    title: 'Red Carpet',
    description: 'Carpet of Red Color made with fine clothing',
  },
  {
    id: 'p2',
    price: 500,
    title: 'Flower Vase',
    description: 'A flower vase with great build and attractive looks',
  },
  {
    id: 'p3',
    price: 2000,
    title: 'Beautiful Painting',
    description:
      'A painting of landscape made by great artist enhancing the look of your wall',
  },
  {
    id: 'p4',
    price: 5000,
    title: 'Buddha Statue',
    description:
      'A buddha statue made with metal and with attractive look and detailed designing',
  },
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  )
}

export default Products
