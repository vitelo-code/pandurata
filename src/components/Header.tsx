import logo from '../images/logo/logo.svg';
import './header.css';

const Header = () => {
  return (
    <div className='w-full h-[93vh] customBg rounded-lg'>
      <div className='flex w-full h-[93vh] justify-evenly py-10 shadowBg rounded-lg'>
        <div className='flex justify-center w-2/5'>
          <img src={logo} alt='logo' className='w-[350px]' />
        </div>
        <div className='flex-col my-auto w-2/5'>
          <h1 className='text-4xl font-serif font-bold'>Pandurata</h1>
          <p className='text-xl mt-4 font-sans'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            officiis architecto, omnis animi explicabo inventore neque facilis
            consectetur eius nulla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
