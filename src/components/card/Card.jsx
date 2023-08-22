function Card({ image, date, header, size, addClass }) {

  let imageMargin, dateMargin, dateTextSize, headerTextSize, maxWidth;

  switch (size) {
    case 'small':
      imageMargin = 'mb-[30px]';
      dateMargin = 'mb-[20px]';
      dateTextSize = 'text-[16px]';
      headerTextSize = 'text-[24px]';
      maxWidth = 'max-w-[312px]';
      break;
    default:
      imageMargin = 'mb-[54px]';
      dateMargin = 'mb-[28px]';
      dateTextSize = 'text-[18px]';
      headerTextSize = 'text-[36px]';
      maxWidth = 'max-w-[648px]';
      break;
  }

  return (
    <div className={`${maxWidth} text-left ${addClass}`}>
      <img src={image} alt={`Картинка для новости ${header}`} className={`${imageMargin} rounded-[40px]`} />
      <p className={`${dateMargin} text-[#00c6ff] ${dateTextSize}`}>{date}</p>
      <h4 className={`text-white ${headerTextSize}`}>{header}</h4>
    </div>
  );
}

export default Card;
