import Product from "@/shared/products"
import { ProductType } from "@/shared/types"
import ProductCard from "@/componets/productCard";

type Props = {}
const products: Array<ProductType> = [
  {
      img: "https://m.media-amazon.com/images/I/61FxWlEC6yL._AC_SL1500_.jpg",
      name: "CeraVe SALICYLIC ACID Cleanser",
      concerns: ["barrier","acne"],
      skintype: ["acne", "normal", "dry", "oily", "barrier-broken"],
      price: 20,
      category: "Cleanser"

  },
  {
      img: "https://cdn.stylevana.com/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/i/s/isntree-yam-root-vegan-milk-cleanser-220ml-271.jpg",
      name: "Isntree Yam Root Cleanser",
      concerns: ["dry", "barrier-brokwn","normal", "acne","sensitive"],
      skintype: ["sensitive", "dry", "normal", "acne"],
      price: 12,
      category: "Cleanser"

  },
  {
      img: "https://cdn.stylevana.com/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/i/-/i-m-from-mugwort-essence-793.jpg",
      name: "I'm from Mugwort",
      concerns: ["broken-barrier", "acne"],
      skintype: ["sensitive", "acne"],
      price: 30,
      category: "Toner"

  },
  {
      img: "https://cdn.stylevana.com/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/i/-/i-m-from-mugwort-essence-793.jpg",
      name: "I'm rice Toner",
      concerns: ["uneven"],
      skintype: ["sensitive", "acne"],
      price: 30,
      category: "Toner"

  },
  {
      img: "https://cdn.stylevana.com/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/i/-/i-m-from-mugwort-essence-793.jpg",
      name: "ANUA - Heartleaf 77% Soothing Toner",
      concerns: ["barrier-broken", "sensitive"],
      skintype: ["sensitive", "acne","all"],
      price: 30,
      category: "Toner"

  },
  {
      img: "https://cdn.stylevana.com/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/i/-/i-m-from-mugwort-essence-793.jpg",
      name: "Roundlab Toner",
      concerns: ["uneven", "acne", "normal", "barrier-broken"],
      skintype: ["sensitive", "acne", "all", "normal"],
      price: 30,
      category: "Toner"

  },
  {
      img: "https://cdn.stylevana.com/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/b/e/beauty-of-joseon-dynasty-cream-50ml-899.jpg",
      name: "Dynasty Cream",
      concerns: ["dry", "wrinkles"],
      skintype: ["dry"],
      price: 30,
      category: "Moisturizer"

  },
  {
      img: "https://cdn.stylevana.com/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/b/e/beauty-of-joseon-dynasty-cream-50ml-899.jpg",
      name: "Hatmugi moisturizer",
      concerns: ["oily"],
      skintype: ["oily", "all"],
      price: 30,
      category: "Moisturizer"

  },
  {
      img: "https://cdn.stylevana.com/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/b/e/beauty-of-joseon-dynasty-cream-50ml-899.jpg",
      name: "Dynasty Cream",
      concerns: ["dry", "wrinkles"],
      skintype: ["dry"],
      price: 30,
      category: "Moisturizer"

  },


];

const Shop = (props: Props) => {
  // let [products, setProducts] = useState<ProductType>(Product[]);


  return (
    <div className="bg-white h-full gap-16 py-10 md:pb-0  w-full mt-12">
    <div className="mx-auto w-5/6" >
       <h1>Shop</h1>
       {products.map((product: ProductType ) => (
          <ProductCard 
              img={product.img}
          
          />
       ))}

       


         
    </div>
    
    
    


</div>
  )
}

export default Shop