// import logo_horizontal from '../images/logo/logo_horizontal.svg';
import './navbar.css';

function Navbar() {
  return (
    <div className='flex w-full h-16 justify-between bg-transparent'>
      <div className='m-auto items-center'>
        <h1 className='text-4xl font-serif font-bold'>
          <a href='#Home'>
            <h1 className='font-serif tracking-widest'>Pandurata</h1>
            {/* TODO: Create new svg with only letters and update this. */}
          </a>
        </h1>
      </div>
      <div className='w-3/5 m-auto'>
        <ul className='flex justify-evenly text-2xl font-sans font-bold'>
          <li>
            <a href='#Home' className='imgShadow'>
              Inicio
            </a>
          </li>
          <li>
            <a href='#About' className='imgShadow'>
              Pandurata
            </a>
          </li>
          <li>
            <a href='#Menu' className='imgShadow'>
              Menú
            </a>
          </li>
          <li>
            <a href='#Location' className='imgShadow'>
              Ubicación
            </a>
          </li>
          <li>
            <a href='#Reservations' className='imgShadow'>
              Reservaciones
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
