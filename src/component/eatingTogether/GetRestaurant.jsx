
import BootcampSideBar from "../sidebar/BootcampSideBar";
import GetRestaurantForm from "./GetRestaurantForm";

const GetRestaurant = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <BootcampSideBar />
        <GetRestaurantForm />
      </div>
    </div>
  );
};
export default GetRestaurant;
