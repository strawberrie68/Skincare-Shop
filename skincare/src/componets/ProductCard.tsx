type Props = {
    img: string,
    name: string,
    // concerns: [string],
    // skintype: [string],
    price: number,
    category: string
}

const ProductCard = ({ img, name, price, category }: Props) => {
  return (
    <div className="w-auto h-[300px] flex flex-col justify-center p-4">
        <img className="m-auto object-contain h-[150px]" src={img} />
        <div>
            <p>{name}</p>
            <p>{category}</p>

        </div>
        
        <p>{price}</p>
        <button
            className="bg-black w-[150px] rounded-lg text-white mt-4 px-4 py-1"
        >
            Add to cart
        </button>


    </div>
  )
}

export default ProductCard

