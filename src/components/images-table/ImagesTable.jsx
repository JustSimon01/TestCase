function Carousel({ array }) {

  return (
    <ul className="list-none flex flex-wrap gap-2 w-[596px]" >
      {array.map((image, index) => {
        return <li key={index} className="w-[174px] h-[103]"><img className="w-[174px] h-[103] rounded-[25px] border-solid border-[11px] border-transparent hover:border-[#3B3D46]" src={image} alt={`Картинка карусели${index}`} /></li>
      })}
    </ul>
  );
}

export default Carousel;
