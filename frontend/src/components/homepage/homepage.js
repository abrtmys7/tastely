import { React } from 'react';
import Header from './header';
import AllKitchens from './allkitchens';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Footer from '../files/footer/Footer';
import Logo from './logo.png'
import Poster from './poster2.JPG'
import './homepage.css';
import '../ownerpage/ownerpage.css'



  // const { id } = useParams();

  

const Homepage = (props) => {

  

  

  

  return (
    <div className="homepage">
   <Header />
   <div className='banner-image'>
   <img src={Poster} alt="Poster" style={{ objectFit: 'cover', objectPosition: "top", width: "100%", height: "400px" }} />
      
   </div>
  
      <div class="page-content">

      <h2 className='heading'>EXPOLORE ALL REGISTERED KITCHENS</h2>
      <AllKitchens />
      </div>
      <Footer/>
    </div>
  );
};

export default Homepage;
