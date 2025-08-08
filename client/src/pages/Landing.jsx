import styled from 'styled-components';
import main from '../assets/images/main.svg';
import Logo from '../components/Logo';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ipsa
            quia unde ullam tempore facere! Fugiat iure autem dolorum
            praesentium repellat! Dicta, aliquam eum? Porro suscipit architecto
            magni natus quisquam.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login
          </Link>
        </div>

        <img src={main} alt='Job Hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
}

export default Landing;
