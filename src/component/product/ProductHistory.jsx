import SideBar from "../sidebar/StudentSideBar";
import ProductHistoryList from "./ProductHistoryList";

const ProductHistory = () => {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="flex w-5/6 h-5/6 justify-center">
        <SideBar></SideBar>
        <ProductHistoryList></ProductHistoryList>
      </div>
    </div>
  );
};
export default ProductHistory;
