function Card({ image, date, header, size, addClass }) {

  let imageMargin, dateMargin, dateTextSize, headerTextSize, maxWidth;

  switch (size) {
    case 'small':
      imageMargin = '30px';
      dateMargin = '20px';
      dateTextSize = '16px';
      headerTextSize = '24px';
      maxWidth = '312px';
      break;
    default:
      imageMargin = '54px';
      dateMargin = '28px';
      dateTextSize = '18px';
      headerTextSize = '36px';
      maxWidth = '648px';
  }

  return (
    <div className={`max-w-[${maxWidth}] text-left ${addClass}`}>
      <img src={image} alt={`Картинка для новости ${header}`} className={`mb-[${imageMargin}] rounded-[40px]`} />
      <p className={`mb-[${dateMargin}] text-[#00c6ff] text-[${dateTextSize}]`}>{date}</p>
      <h4 className={`text-white text-[${headerTextSize}]`}>{header}</h4>
    </div>
  );
}

export default Card;
