import solder from '../../images/oranje_coat_solider.png'
import fireSymbol from '../../images/fire.svg'
import ImagesTable from '../images-table/ImagesTable';
import screenshot_1 from '../../images/screenshot_1.png'
import screenshot_2 from '../../images/screenshot_2.png'
import screenshot_3 from '../../images/screenshot_3.png'

function CharacterSection() {
  const IMAGES_ARRAY = [screenshot_1, screenshot_2, screenshot_3];

  return (
    <div className="bg-slate-800 w-full">
      <div className="grid grid-cols-2 gap-5 justify-between px-14 max-w-[1440px] mx-auto">
        <img src={solder} alt="Солдат в оранжевом камуфляже" className='my-auto' />
        <div className='max-w-[596px] w-full mt-20'>
          <div className='relative w-full max-w-[656px]'>
            <div className='flex gap-3 h-8 items-center mb-3'>
              <img className='w-8 h-8' src={fireSymbol} alt='Картинка огня' ></img>
              <h3 className='text-[#00c6ff]'>FUTURE OF&nbsp;SPORTS</h3>
            </div>
            <h2 className='text-white text-6xl text-left leading-tight mb-11'>Customize your Own Character</h2>
            <p className=' text-gray-500 text-lg text-left max-w-[561px] mb-10'>Sed ut&nbsp;perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam&nbsp; rem aperiam, eaque ipsa quae ab&nbsp;illo inventore veritatis et&nbsp;quasi architecto beatae.</p>
          </div>
          <ImagesTable array={IMAGES_ARRAY} />
        </div>
      </div>
    </div>
  );
}

export default CharacterSection;
