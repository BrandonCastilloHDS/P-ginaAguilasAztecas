import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />

      <div class="bg-[url('/img/aviones/avion.jpeg')] bg-cover bg-center bg-no-repeat w-full h-125">
       
      </div>
      {/*Estruturando la información de las wilas */}
      <div className='rounded m-auto' >
        <h1 className='text-2xl text-center mt-7 font-black'> Águilas Aztecas</h1>


        <div className='flex '>
          <div>
            <img src="/img/" alt="" />
          </div>
        </div>


      </div>
    </div>


  )
}

export default App;