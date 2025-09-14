
interface CardProp {
    title:string;
    description: string;
    image: string;
    link: string;
}
const Card = ({title, description, image, link}:CardProp) =>  {
  return (
    <div className="max-w-sm mx-auto m-[1rem] bg-gray-700 rounded-lg shadow-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-40  object-cover" />

        <div className="p-6 ">
            <h2 className="text-2xl font-bold mb-2"></h2>
            <p className="text-gray-100 mb-4">{description}</p>
            <a href={link} className="inline-block px-4 py-2 b-white text-white font-semibold rounded-lg shadow hower:bg-gray-600  hover:text-white transition duration-200  ">Learn More</a>
        </div>
        
    </div>
  )
}

export default Card