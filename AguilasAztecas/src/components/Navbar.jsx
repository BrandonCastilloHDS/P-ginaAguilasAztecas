
function Navbar(){
    return(
        <nav>
        <div className=" flex justify-between items-center p-4 bg-[#00519e] text-white">
            <div className=" flex justify-around items-center ">
                <img src="/img/logos/FAMEX2027.png" alt="Logo FAMEX2027" className="h-20 ml-2" />
                <h1 className="text-2xl">Águilas Aztecas</h1>
            </div>
            
            <div className="flex gap-4">
                
                <a href="#" className="hover:text-blue-400 ">Sobre Nosotros</a>
                <a href="#" className="hover:text-blue-400">Galería</a>
            </div>
        </div>
        </nav>
    );
}

export default Navbar;
