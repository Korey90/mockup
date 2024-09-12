import baby from './img/baby.png';
import woman from './img/woman.png';
import misio from './img/misio.png';
import b1 from './img/b1.png';
import b2 from './img/b2.png';
import b3 from './img/b3.png';
import b4 from './img/b4.png';
import w1 from './img/w1.png';
import w2 from './img/w2.png';
import w3 from './img/w3.png';
import w4 from './img/w4.png';
import bci from './img/bci.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faEnvelope, faLocationDot, faMagnifyingGlass, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faFacebookF, faTiktok } from '@fortawesome/free-brands-svg-icons';


function App() {
  
  return (
    <>
     <header>
      <div className='bg-gray-950 text-white flex w-10/12 mx-auto p-1 text-xl'>
       <div className='w-2/12 text-center'>
         <FontAwesomeIcon icon={faFacebookF} className='px-3' />
         <FontAwesomeIcon icon={faInstagram} className='px-3' />
       </div>
       <span className='w-8/12 text-center uppercase font-light py-1 text-sm tracking-[3px] font-mono'>free shipping on orders over $50</span>
      </div>

      <div className='w-10/12 mx-auto flex justify-between p-10'>
       <form className='relative'>
         <input type='text' className='border-b-2 p-2  border-gray-950 hover:border-0 hover:border-b-4 placeholder:text-gray-950 placeholder:font-semibold' placeholder='Search'/>
         <FontAwesomeIcon className='absolute right-2 top-3 w-5 h-5' icon={faMagnifyingGlass} />
       </form>
       <div className='flex flex-col'>
         <span className='uppercase text-4xl font-bold'>mopcup</span>
         <span className='uppercase'>placeholder logo</span>
       </div>
       <div>
         <FontAwesomeIcon className={'w-8 h-8 ml-4'} icon={faUser} />
         <FontAwesomeIcon className={'w-8 h-8 ml-4'} icon={faHeart} />
         <FontAwesomeIcon className={'w-8 h-8 ml-4'} icon={faBagShopping} />
       </div>
      </div>

     <nav className='mb-4 sticky top-0'>
      <ul className='flex uppercase font-semibold gap-14 justify-center'>
        <li>new partners</li>
        <li>babies</li>
        <li>accessories</li>
        <li>personalisation</li>
        <li>about us</li>
      </ul>
     </nav>

     </header>




     <main className='flex flex-col mx-auto w-10/12'>

      <section id="section1" className='px-28 mb-4 flex flex-col place-content-center shadow-neonInset h-[680px] bg-gray-500 text-white relative overflow-hidden'>
        <p className='uppercase text-2xl'>a personalised touch</p>
        <p className='uppercase text-6xl font-semibold w-7/12 my-3'>nurture connections in comfort & style</p>
        <p className='text-sm w-1/2 mb-4'>Where comfort meets style for new families. Explore our gender-neutral clothing and personalised leather treasures for evryone.</p>
        <div className='flex gap-6'>
          <button className='uppercase border-2 border-white px-6 py-2'>new partners</button>
          <button className='uppercase border-2 border-white px-6 py-2'>babies</button>
          <button className='uppercase border-2 border-white px-6 py-2'>accesories</button>
        </div>
        <img src={misio} className=' absolute -right-8 bottom-0' />
      </section>

      <section id='section3' className='grid grid-cols-2 gap-4 h-[720px] relative'>
        <div className='border overflow-hidden relative group'>
          <img src={baby} className='hover:scale-125 w-full transition-all delay-100 duration-300' />
          <div className='absolute bottom-0 -left-full bg-black uppercase w-full text-white text-center p-4 opacity-0 transition-all group-hover:opacity-100 group-hover:bottom-6 duration-500 group-hover:left-6'>
            baby clothing
          </div>
        </div>
        <div className='border overflow-hidden relative group'>
          <img src={woman} className='hover:scale-125 w-full transition-all delay-100 duration-300' />
          <div className='absolute bottom-0 -right-full bg-black uppercase w-full text-white text-center p-4 opacity-0 transition-all group-hover:opacity-100 group-hover:bottom-6 duration-500 group-hover:right-6'>
            woman clothing
          </div>
        </div>
        <img src={misio} className='absolute bottom-0 inset-x-5 mx-auto' />
      </section>

      <section  className=' p-12 text-white'>
        <div id="tlo2" className='grid grid-cols-2 h-[780px] p-8'>
          <div className=''></div>
          <div id='misie' className='place-content-center relative overflow-hidden'>
            <div className='flex flex-col w-10/12 mx-auto '>
              <p className='uppercase text-xl'>personalisation</p>
              <p className='uppercase text-5xl font-semibold my-5'>infuse your style with sentiment</p>
              <p className='mb-5 w-9/12 tracking-wide text-sm leading-relaxed'>Elevate your comfort wear themed baby clothing by adding a name or message. Unveil a personal touch that resonates with your growing family.</p>
              <button className='uppercase border-2 border-white px-6 py-2 w-fit'>find out more</button>
            </div>
              <img src={misio} className='absolute -bottom-5  -right-10 mx-auto -rotate-12' />
          </div>
        </div>
      </section>

      <section className='p-12'>
        <div className='flex justify-between mb-10'>
          <span className='uppercase text-3xl tracking-widest'>popular babies clothes</span>
          <button className='uppercase border-2 border-black text-black font-semibold px-6 py-2 w-fit'>shop all babies</button>
        </div>
        <div className='grid grid-cols-4 gap-4'>
          <card className='flex flex-col'>
            <img src={b4} className='mb-5'/>
            <span className='font-mono text-gray-800 text-2xl mb-1'>Bemidja Tartan Dress</span>
            <span className='text-gray-400 font-mono text-xl font-semibold'>£18.55</span>
          </card>
          <card className='flex flex-col'>
            <img src={b3} className='mb-5'/>
            <span className='font-mono text-gray-800 text-2xl mb-1'>Bemidja Tartan Dress</span>
            <span className='text-gray-400 font-mono text-xl font-semibold'>£18.55</span>
          </card>
          <card className='flex flex-col'>
            <img src={b2} className='mb-5'/>
            <span className='font-mono text-gray-800 text-2xl mb-1'>Bemidja Tartan Dress</span>
            <span className='text-gray-400 font-mono text-xl font-semibold'>£18.55</span>
          </card>
          <card className='flex flex-col'>
            <img src={b1} className='mb-5'/>
            <span className='font-mono text-gray-800 text-2xl mb-1'>Bemidja Tartan Dress</span>
            <span className='text-gray-400 font-mono text-xl font-semibold'>£18.55</span>
          </card>
        </div>
      </section>

      <section className='p-12'>
        <div className='flex justify-between mb-10'>
          <span className='uppercase text-3xl tracking-widest'>popular parents clothes</span>
          <button className='uppercase border-2 border-black text-black font-semibold px-6 py-2 w-fit'>shop all parents</button>
        </div>
        <div className='grid grid-cols-4 gap-4'>
          <card className='flex flex-col'>
            <img src={w3} className='mb-5'/>
            <span className='font-mono text-gray-800 text-2xl mb-1'>Bemidja Tartan Dress</span>
            <span className='text-gray-400 font-mono text-xl font-semibold'>£18.55</span>
          </card>
          <card className='flex flex-col'>
            <img src={w4} className='mb-5'/>
            <span className='font-mono text-gray-800 text-2xl mb-1'>Bemidja Tartan Dress</span>
            <span className='text-gray-400 font-mono text-xl font-semibold'>£18.55</span>
          </card>
          <card className='flex flex-col'>
            <img src={w2} className='mb-5'/>
            <span className='font-mono text-gray-800 text-2xl mb-1'>Bemidja Tartan Dress</span>
            <span className='text-gray-400 font-mono text-xl font-semibold'>£18.55</span>
          </card>
          <card className='flex flex-col'>
            <img src={w1} className='mb-5'/>
            <span className='font-mono text-gray-800 text-2xl mb-1'>Bemidja Tartan Dress</span>
            <span className='text-gray-400 font-mono text-xl font-semibold'>£18.55</span>
          </card>
        </div>
      </section>

      <section id='aboutus' className='place-content-center h-[725px]'>
        <div className='flex flex-col w-5/12 ml-24'>
          <span className='uppercase font-bold text-xl tracking-widest'>about us</span>
          <span className='uppercase font-semibold text-5xl my-4 leading-tight'>passionate about clothing that bring families closer</span>
          <p className='mb-5 font-base text-black'>We celebrate new families with gender-neutral comfort wear for parents and adorable themed babyclothing. Explore our personalised hand-painted leather products, creating cherished moments for your growing family.</p>
          <button className='uppercase border-2 border-black text-black font-semibold px-6 py-2 w-fit'>shop all parents</button>
        </div>
      </section>

      <section  className=' p-12 text-white'>
        <div id="tlo3" className='grid grid-cols-2 h-[780px] p-8'>
          <div className=''></div>
          <div id='misie' className='place-content-center overflow-hidden'>
            <div className='flex flex-col w-9/12 mx-auto relative '>
              <p className='uppercase text-xl font-mono'>soft & sustainable</p>
              <p className='uppercase text-5xl font-semibold leading-snug my-1'>quality fabrics that support the environment</p>
              <p className='mb-5 w-9/12 tracking-wider font-light text-sm leading-relaxed'>Our garments prioritise sustainability with 60% organic cotton, aligned with the Better Cotton Initiative (BCI). Committed to eco-friendliness, their entire collaboration is non-toxic, reflecting a conscinus approach to fashiion. </p>
              <button className='uppercase border-2 border-white px-6 py-2 w-fit'>find out more</button>
              <img src={bci} className='absolute -bottom-32  -right-14 mx-auto' />
            </div>
          </div>
        </div>
      </section>

     </main>


     <div id='prefooter' className='h-[290px] w-10/12 mx-auto'>
     </div>
     <footer className='bg-black w-10/12 mx-auto text-white px-24 pt-20'>

      <div className='grid grid-cols-12 border-b-2 border-gray-300 py-4'>

        <div className='flex flex-col col-span-4'>
          <div className='flex flex-col mb-8'>
          <span className='text-5xl font-semibold uppercase'>mockup</span> 
          <span className='text-lg uppercase tracking-widest'>placeholder logo</span>
          </div>
          <span className='uppercase text-xl'>follow us on socialmedia</span>
          <div className='my-5'>
          <FontAwesomeIcon icon={faFacebookF} className='size-5 pr-5' />
          <FontAwesomeIcon icon={faInstagram} className='size-5 pr-5' />
          <FontAwesomeIcon icon={faTiktok} className='size-5' />
          </div>

        </div>

        <div className='flex flex-col uppercase col-start-6 col-span-2'>
          <span className='text-2xl font-semibold mb-5'>shop</span>

          <a href='#' className='mb-2 text-sm'>new partners</a>
          <a href='#' className='mb-2 text-sm'>babies</a>
          <a href='#' className='mb-2 text-sm'>accessories</a>
          <a href='#' className='mb-2 text-sm'>personalisation</a>
        </div>

        <div className='flex flex-col uppercase col-span-3'>
          <span className='text-2xl font-semibold mb-5'>customer services</span>
          
          <a href='#' className='mb-2'>my account</a>
          <a href='#' className='mb-2'>aboutwishlist</a>
          <a href='#' className='mb-2'>contact</a>
          <a href='#' className='mb-2'>orders</a>
          <a href='#' className='mb-2'>returns</a>
        </div>

        <div className='flex flex-col col-span-2'>
          <span className='text-2xl font-semibold mb-5 uppercase'>contact</span>
          <a href='#' className='mb-2'><FontAwesomeIcon className={'size-5 pr-4'} icon={faEnvelope} /> info@mockup.co.uk</a>
          <a href='#' className='mb-2'><FontAwesomeIcon className={'size-5 pr-4'} icon={faPhone} /> 01234 567 890</a>
          <address>
          <FontAwesomeIcon className={'size-5 pr-4'} icon={faLocationDot} />
          address, address,
          abc 1234

          </address>
        </div>

      </div>

      <div className='flex justify-between py-4 mt-auto'>
        <div className='text-xs uppercase tracking-widest w-1/4 flex justify-between'>
        <a href='' >mockup</a>
        <a href='' >made by dash</a>
           
        </div>
        <div className='text-xs uppercase tracking-widest w-1/3 flex justify-between'>
          <a href='' >privacy policy</a>
          <a href='' >terms & conditions</a>
           
        </div>
      </div>

     </footer>
    </>
  );
}

export default App;
