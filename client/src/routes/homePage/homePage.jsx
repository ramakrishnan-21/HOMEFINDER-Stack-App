import { useContext } from "react";
import SearchBar from "../../components/searchBar/searchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Unlock Your Dream Home with Ease Today!</h1>
          <p>
          Discover a seamless home-buying experience with our comprehensive real estate platform. From stunning properties to expert guidance, we provide everything you need to find and secure your perfect home. Start your journey with us and turn your dream into reality effortlessly.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>20+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>100</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>20000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;