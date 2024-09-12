import logo from './img/logo.jpg';
import './App.css';

function App() {
  return (
    <>
      <header >
        <div className='relative'>

        <nav className="sticky top-0 left-0 right-0 flex p-4 bg-white z-20">
          <span>
            <img src={logo} className="w-72" />
          </span>

          <span className="mx-auto my-auto flex space-x-8">
            <a href="#" className="kolor px-2 text-2xl font-semibold">Start</a>
            <a href="#" className="kolor px-2 text-2xl font-semibold">Oferta</a>
            <a href="#" className="kolor px-2 text-2xl font-semibold">Akademia</a>
            <a href="#" className="kolor px-2 text-2xl font-semibold">Kontakt</a>
          </span>

            <button className="my-auto p-2 text-2xl text-white bg-orange-500 rounded-full px-5 h-1/2">Darmowy audyt</button>

        </nav>
        </div>
      </header>


      <main  className="min-h-[800px] text-purple-700">
        <section id="section1" className='py-32'>
          <div className="grid grid-cols-2 gap-2 h-[700px] ">
            <div className="left px-6 flex flex-col">
              <h2 className='text-[71px] font-semibold leading-tight'>Wynieś swoją <span className='text-orange-500'>sprzedaż</span> na wyższy poziom</h2>

              <div className='mt-28'>
                <p className='font-semibold text-[29px] my-auto w-4/5'>Zadbaj o wszystkie kluczowe aspekty swojej sprzedaży na Allegro. Wyprzedź konkurencję i zwiększ swoją sprzedaż oraz zyski. </p>
                <div className='mt-20 border flex gap-4 justify-between w-2/3 mb-0'>
                  <button className='bg-purple-700 hover:bg-purple-600 text-white py-2 w-1/2 space-x-2 text-[27px] transition-all ease-in-out duration-300 rounded-3xl'>Oferta</button>
                  <button className='bg-purple-700 hover:bg-purple-600 text-white py-2 w-1/2 space-x-2 text-[27px] transition-all ease-in-out duration-300 rounded-3xl'>Kontakt</button>
                </div>
              </div>

            </div>
            <div className="right"></div>
          </div>
        </section>


        <section className=''>
          <div className='flex items-center border py-8 px-12 bg-gradient-to-br from-fuchsia-900 via-fuchsia-700 to-fuchsia-500'>
            <p className='font-semibold mx-auto text-white text-lg'>
              Odbierz darmowy audyt konta Allegro i sprawdź co zyskasz dzięki odpowiedniemu  podejściu do jakości swojej sprzedaży
            </p>
            <button className="my-auto p-2 text-2xl text-white bg-orange-500 rounded-full px-5 h-1/2">Darmowy audyt</button>
          </div>
        </section>

        <section >
          <h2 className='text-[36px] font-semibold mx-auto text-center py-8'>Rozwiązania dla Twojego <span className='text-orange-500'>biznesu</span></h2>
          <div id="section2" className='grid grid-cols-3 gap-6 w-10/12 mx-auto'>
            <card className="bg-white border border-orange-600 rounded-3xl p-5">
              <div className='text-[27px] font-semibold mb-4'>Audyt konta <span className='text-orange-500'>Allegro</span></div>
              <p className='my-auto font-semibold text-[18px] text-gray-950 mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <a href="">Sprawdź więcej {`>>`}</a>
            </card>

            <card className="bg-white border border-orange-600 rounded-3xl p-5">
              <div className='text-[27px] font-semibold mb-4'>Audyt konta <span className='text-orange-500'>Allegro</span></div>
              <p className='my-auto font-semibold text-[18px] text-gray-950 mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <a href="">Sprawdź więcej {`>>`}</a>
            </card>

            <card className="bg-white border border-orange-600 rounded-3xl p-5">
              <div className='text-[27px] font-semibold mb-4'>Audyt konta <span className='text-orange-500'>Allegro</span></div>
              <p className='my-auto font-semibold text-[18px] text-gray-950 mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <a href="">Sprawdź więcej {`>>`}</a>
            </card>

            <card className="bg-white border border-orange-600 rounded-3xl p-5">
              <div className='text-[27px] font-semibold mb-4'>Audyt konta <span className='text-orange-500'>Allegro</span></div>
              <p className='my-auto font-semibold text-[18px] text-gray-950 mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <a href="">Sprawdź więcej {`>>`}</a>
            </card>

          </div>

          <div className='grid grid-cols-3 gap-6 w-10/12 mx-auto my-4'>
            <card className="bg-white border border-orange-600 rounded-3xl p-5">
              <div className='text-[27px] font-semibold mb-4'>Audyt konta <span className='text-orange-500'>Allegro</span></div>
              <p className='my-auto font-semibold text-[18px] text-gray-950 mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <a href="">Sprawdź więcej {`>>`}</a>
            </card>

            <card className="bg-white border border-orange-600 rounded-3xl p-5">
              <div className='text-[27px] font-semibold mb-4'>Audyt konta <span className='text-orange-500'>Allegro</span></div>
              <p className='my-auto font-semibold text-[18px] text-gray-950 mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <a href="">Sprawdź więcej {`>>`}</a>
            </card>

            <card className="bg-white border border-orange-600 rounded-3xl p-5">
              <div className='text-[27px] font-semibold mb-4'>Audyt konta <span className='text-orange-500'>Allegro</span></div>
              <p className='my-auto font-semibold text-[18px] text-gray-950 mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <a href="">Sprawdź więcej {`>>`}</a>
            </card>

            <card className="bg-white border border-orange-600 rounded-3xl p-5">
              <div className='text-[27px] font-semibold mb-4'>Audyt konta <span className='text-orange-500'>Allegro</span></div>
              <p className='my-auto font-semibold text-[18px] text-gray-950 mb-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <a href="">Sprawdź więcej {`>>`}</a>
            </card>

          </div>

          
        </section>
      </main>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
    </>
  );
}

export default App;
