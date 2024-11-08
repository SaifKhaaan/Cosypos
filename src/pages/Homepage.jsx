import Countercard from '../components/Countercard';
import Foodcategories from '../components/Foodcategories';
import Ordersummary from '../components/Ordersummary';
import Status from '../components/Status';
import Subtotalcard from "../components/Subtotalcard"
import Sidebar from "../components/Sidebar"
import "./homepage.css"
import useUserStore from '../authentication/Authstore';
import Login from '../authentication/Login';
import { useState } from 'react';



function Homepage() {
  const { user } = useUserStore();
         const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };



  if (!user.loggedIn) {
    return (
      <div>
 <Login/>    
      </div>
    );
  }
  if (user.loggedIn){
  return (
    <div className="homepage">
      <div>
<Sidebar />
      </div>
      <div className="homepagecenter">
        {/* Render the search bar in Foodcategories and pass down searchTerm and handleInputChange */}
      <Foodcategories searchTerm={searchTerm} handleInputChange={handleInputChange} />
      {/* Pass searchTerm as a prop to Countercard */}
      <Countercard searchTerm={searchTerm} />
        <Status />
     
      </div>
      <div className="homepage-right-side-order-details">
        <Ordersummary />
        <Subtotalcard />
        
      </div>
    
    </div>
  );}
}

export default Homepage;
