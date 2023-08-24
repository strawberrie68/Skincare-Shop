type Props = {
    img: String,
    name: String,
    concerns: [String],
    skintype: [String],
    price: Number,
    category: String
}

const ProductCard = ({ img, name, concerns, price, category }: Props) => {
  return (
    <div>
        <img src={img} />
        <div>
            <p>{name}</p>
            <p>{concerns}</p>
            <p>{category}</p>

        </div>
        
        <p>{price}</p>


    </div>
  )
}

export default ProductCard

