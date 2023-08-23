function Button({ text, size, color, border }) {

  let pyValue, pxValue;

  switch (size) {
    case 'small':
      pyValue = 'py-2';
      pxValue = 'px-4';
      break;
    case 'medium':
      pyValue = 'py-4';
      pxValue = 'px-8';
      break;
    case 'big':
      pyValue = 'py-5';
      pxValue = 'px-9';
      break;
    default:
      pyValue = 'py-4';
      pxValue = 'px-8';
  }

  return (
    <button className={`text-lg h-min w-max text-white border-solid border-white ${color} ${border === true ? 'border-2' : null} ${pyValue} ${pxValue}`}>
      {text}
    </button>
  );
}

export default Button;
