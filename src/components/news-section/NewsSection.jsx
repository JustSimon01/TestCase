import styles from './NewsSection.module.css'
import fireSymbol from '../../images/fire.svg';
import Button from '../button/Button';
import Card from '../card/Card';
import image_1 from '../../images/news_image_1.jpg'
import image_2 from '../../images/news_image_2.jpg'
import image_3 from '../../images/news_image_3.jpg'
import image_4 from '../../images/news_image_4.jpg'
import image_5 from '../../images/news_image_5.jpg'

function NewsPage() {
  return (
    <section className="w-full py-32 bg-black">
      <div className="max-w-[1440px]  px-14 m-auto">
        <div className="flex justify-between w-full items-end mb-16">
          <div className='title'>
            <div className='flex gap-3 h-8 items-center mb-3'>
              <img className='w-8 h-8' src={fireSymbol} alt='Картинка огня' />
              <h3 className='text-[#00c6ff]'>FUTURE OF&nbsp;SPORTS</h3>
            </div>
            <h2 className='text-white text-6xl text-left leading-tight max-w-[541px]'>Latest News&nbsp;& Articles</h2>
          </div>
          <Button text={'Read More'} color={'bg-[#00c6ff]'} size={'big'} />
        </div>
        <div className={`${styles.gridTable}`}>
          <Card size={'big'} image={image_1} header={"Esports Group teams up with the Indianapolis Colts"} date={"April 2, 2021"} addClass={`${styles.first}`} />
          <Card size={'small'} image={image_2} header={"NAVI reveals s1mple fifth anniversary"} date={"April 2, 2021"} addClass={`${styles.second}`} />
          <Card size={'small'} image={image_3} header={"A1esports Shares new picture"} date={"April 2, 2021"} addClass={`${styles.third}`} />
          <Card size={'small'} image={image_4} header={"T1 unveil partnership with Razer"} date={"April 2, 2021"} addClass={`${styles.fourth}`} />
          <Card size={'small'} image={image_5} header={"RX secures content partnership with"} date={"April 2, 2021"} addClass={`${styles.fifth}`} />
        </div>
      </div>

    </section>
  );
}

export default NewsPage;
