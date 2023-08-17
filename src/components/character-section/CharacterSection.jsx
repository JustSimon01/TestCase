import solder from '../../images/oranje_coat_solider.png'
import fireSymbol from '../../images/fire.svg'

function CharacterSection() {
  return (
    <div className="flex justify-between bg-slate-800 px-14 w-full">
      <img src={solder} alt="Солдат в оранжевом камуфляже" className=' max-w-[596px] max-h-[695]' />
      <div className='max-w-[596px] w-full mt-20'>
        <div className='relative w-full max-w-[656px]'>
          <div className='flex gap-3 h-8 items-center mb-3'>
            <img className='w-8 h-8' src={fireSymbol} alt='Картинка огня' ></img>
            <h3 className='text-[#00c6ff]'>FUTURE OF&nbsp;SPORTS</h3>
          </div>
          <h1 className='text-white text-6xl text-left leading-tight mb-11'>Customize your Own Character</h1>
          <p className=' text-gray-500 text-lg text-left max-w-[561px] mb-10'>Sed ut&nbsp;perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam&nbsp;rem aperiam, eaque ipsa quae ab&nbsp;illo inventore veritatis et&nbsp;quasi architecto beatae.</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterSection;
