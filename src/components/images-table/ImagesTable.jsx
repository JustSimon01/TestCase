import { useState } from "react";

function ImagesTable({ array }) {

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleActive = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <ul className="list-none flex flex-wrap justify-center gap-1 max-w-[596px]" >
      {array.map((image, index) => {
        return (
          <li key={index} className={`max-w-[174px] max-h-[103px] box-content rounded-[25px] ${index === activeIndex ? ' border-[#3B3D46]' : 'border-transparent'} border-solid border-[11px]`} onClick={() => toggleActive(index)}>
            <img
              src={image}
              alt={`Картинка карусели${index}`}
            />
          </li>
        )
      })}
    </ul>
  );
}

export default ImagesTable;
