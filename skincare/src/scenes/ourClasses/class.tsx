type Props = {
  name: string;
  description?: string;
  image: string;
};

const Routine = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-white text-center text-gray-600
  opacity-0 transition duration-500 rounded-lg hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
   
      <img className="rounded-lg h-[380px] w-[450px]" alt={`${image}`} src={image} />

      
     
    </li>
  );
};

export default Routine;
