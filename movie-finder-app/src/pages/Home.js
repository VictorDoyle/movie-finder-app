import React from 'react';
import Loader from '../components/Loader/Loader'
import SignUpForm from '../components/SignUp/SignUpForm';
import LandingContentCard from '../components/Content/LandingContentCard';
const Home = () => {
  return (
    <div> 
        <div className="landingPageTitle">
          <h1> Tired of Running Out of Movies? </h1>
          <h2> Find what to watch, where to watch, all in one click </h2>
          <h3> Ready to Explore? Enter your email below</h3>
          <SignUpForm />
        </div>

        <div className="landingPageContent">
          <LandingContentCard/>
        </div>
      
    </div>
  );
}

export default Home;
