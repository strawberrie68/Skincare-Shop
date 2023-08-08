type Props = {
    img: string,
    name: string,
    price: number,

}

const cartCard = ({ img, name, price}: Props) => {
  return (
    <div className="h-[200px]  my-4 flex justify-between items-center basis-4/5 pb-4 border-b-2">
    <div>
      <img
        src={img}
        className="object-contain h-[200px]"
      />

    </div>

    <p>{name}</p>
    <div><p>x 1</p></div>
    <p className="px-8">$ {price}</p>
    <p className="text-gray-10">x</p>

  </div>
  )
}

export default cartCard