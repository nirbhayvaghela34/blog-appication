import logo from '../assets/logo.png'
function Logo({ width = '100px' }) {
  return (
    <div style={{ width }} >
      <img src={logo} alt="Logo" className='w-10'/>
    </div>
  );
}

export default Logo;
