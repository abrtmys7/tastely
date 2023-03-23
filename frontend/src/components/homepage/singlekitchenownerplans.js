import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Header from './header';
import ShowPlan from '../showplan/showplan';
import { Link, useParams, NavLink, useNavigate } from 'react-router-dom';
import AllKitchens from './allkitchens';
import SubscribePlan from './subscribeplan';
import ViewDishes from '../dishes/ViewDishes';
import { BACKEND_API } from '../../config';
import Footer from '../files/footer/Footer';


const SingleUserKitchens = (props) => {
  const [singleKitchenOwnerPlans, setSingleKitchenOwnerPlans] = useState([]);

  const [apiSuccess, setApiSuccess] = useState(false);

  // const [subscribeText, setSubscribeText] = useState("Subscribe")

  // const [subscribePlan, setSubscribePlan] = useState({
  //   plan: '',
  //   user: '',
  // });

  // const [favorite, setFavorite] = useState([]);

  let { userid } = useParams();

  const navigate = useNavigate();

  // const { id } = useParams();

  const loginUser = JSON.parse(localStorage.getItem('user'))._id;

  const handleViewSubscribePlanClick = (id) => {
    navigate(`/showsubscribeplans/${id}`);
  };

  // write a hook to get data from the database and set the data to the todoitems state variable
  useEffect(() => {
    const getSingleUserKitchens = async () => {
      try {
        const res = await axios.get(`${BACKEND_API}/showplan/${userid}`);
        setSingleKitchenOwnerPlans(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleUserKitchens();
  }, [apiSuccess]);

  //subsription work
  // const subscribePlanClick = (id) => {
  //   if (!favorite.includes(id)) setFavorite(favorite.concat(id));
  //   console.log(id);
  // };

  const subscribePlanClick = (id, name) => {

    // setSubscribePlan({
    //   user: JSON.parse(localStorage.getItem('user'))._id,
    //   plan: id,
    // });
    // setSubscribeText("Subscribed");

    /*
    const url = 'http://localhost:8080/subscribeplan';

    const data = {

      user: JSON.parse(localStorage.getItem('user'))._id,
       plan: id,
       
    };

    console.log('data:', data);
    if (data) {
      axios
        .post(url, data)
        .then((res) => alert('Your have subcribed the plan'));
      console.log(data);
    } else {
      alert('check all your inputs');
    }
    */

    // Move Above Code to Order Page
    //Open Order Page
    navigate(`/customerorder/${id}`);

  };



  return (
    <div className="homepage">
      <div>


        <Header />


        <div class="page-content">


          <h2 className='heading'>ALL PLANS</h2>
          <div>
            <ul className="showplan-details">
              {singleKitchenOwnerPlans.map((singleKitchenOwnerPlan) => (
                console.log(singleKitchenOwnerPlan),
                <li key={singleKitchenOwnerPlan._id}>
                  <p  style={{ fontSize: '32px', padding: 10 }}> {singleKitchenOwnerPlan.name}</p>
                  <p style={{ color: 'orange', fontSize: '36px', padding: 12 }}>
                   ${singleKitchenOwnerPlan.price}</p>
                   <p>{singleKitchenOwnerPlan.dynamicfields.key}</p>

                   <ul className="dynamic-details">
                    {singleKitchenOwnerPlan.dynamicfields.map((dynamicfield) => {
                      return (
                        <li key={dynamicfield._id}>
                          <p>
                            {dynamicfield.key} - {dynamicfield.info}
                          </p>
                        </li>
                      );
                    })}
                  </ul>

                  <button style={{ marginTop: '40px' }} className="my-button"
                    onClick={() => subscribePlanClick(singleKitchenOwnerPlan._id, singleKitchenOwnerPlan.name)}
                  >
                    Subscribe
                  </button>
                </li>
              ))}
            </ul>

          </div>

        </div>

        <br></br>
        <ViewDishes kitchenId={userid}/>

      </div>
      <Footer/>
    </div>
  );
};

export default SingleUserKitchens;

// <button onClick={() => handleDeleteClick(showOwner._id)} >Delete Kitchen</button>

// <ul>
//           {findfavorite.map((subscribedPlan) => (
//             <li key={subscribedPlan._id}>
//               <p> {subscribedPlan.name}</p>
//               <p> {subscribedPlan.price}</p>

//               <button onClick={() => removeFavorite(subscribedPlan._id)}>
//                 Unsubscribe
//               </button>
//             </li>
//           ))}
//         </ul>
