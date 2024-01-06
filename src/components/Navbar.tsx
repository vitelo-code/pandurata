function Navbar() {
  return (
    <div className='flex w-full h-16 justify-between bg-transparent'>
      <div className='p-2 m-auto'>
        <h1 className='text-4xl font-serif font-bold'>
          <a href='#Home'>Pandurata</a>
        </h1>
      </div>
      <div className='w-3/5 h-auto m-auto'>
        <ul className='flex justify-evenly text-2xl font-sans font-bold'>
          <li>
            <a href='#Home'>Inicio</a>
          </li>
          <li>
            <a href='#About'>Pandurata</a>
          </li>
          <li>
            <a href='#Menu'>Menú</a>
          </li>
          <li>
            <a href='#Location'>Ubicación</a>
          </li>
          <li>
            <a href='#Reservations'>Reservaciones</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
