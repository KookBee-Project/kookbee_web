import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOfferProduct,
  getRentalProduct,
} from "../../store/product/productSlice";

const ProductHistoryList = () => {
  const { offerData, rentalData } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOfferProduct());
    dispatch(getRentalProduct());
    console.log(offerData);
    console.log(rentalData);
  }, []);

  function offerStatus(status) {
    if (status === "PROVIDED") return <td className="p-1">제공 완료</td>;
    if (status === "BEFORE_PROVIDE") return <td className="p-1">제공 예정</td>;
    return null;
  }

  function rentalStatus(status) {
    if (status === "ON_LOAN") return <td className="p-1">대여 중</td>;
    if (status === "RETURN_COMPLETE") return <td className="p-1">반납 완료</td>;
    return null;
  }

  return (
    <div>
      <div className="table items-center w-max h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
        <div className="flex flex-col items-center h-2/6 mt-10 ml-3 mr-3">
          <div className="text-center font-bold text-3xl">제공 내역</div>
          <table className="my-10">
            <thead className="font-bold text-center">
              <tr>
                <td>훈련과정명</td>
                <td>품명</td>
                <td>수량</td>
                <td>수령일</td>
                <td>상태</td>
              </tr>
            </thead>
            <tbody className="text-center border-t border-sky-400">
              {offerData?.map((el) => (
                <tr>
                  <td className="p-1 pl-5 pr-5">{el.bootcampTitle}</td>
                  <td className="p-1 pl-5 pr-5">{el.productName}</td>
                  <td className="p-1 pl-5 pr-5">{el.productCount}</td>
                  <td className="p-1 pl-5 pr-5">
                    {el.productRentalStartDate.slice(0, 10)}
                  </td>
                  {offerStatus(el.productStatus)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center h-2/6 mt-10 ml-3 mr-3">
          <div className="text-center font-bold text-3xl">대여 내역</div>
          <table className="my-10">
            <thead className="font-bold text-center">
              <tr>
                <td>훈련과정명</td>
                <td>품명</td>
                <td>수량</td>
                <td>대여일</td>
                <td>반닙일</td>
                <td>상태</td>
              </tr>
            </thead>
            <tbody className="text-center border-t border-sky-400">
              {rentalData?.map((el) => (
                <tr>
                  <td className="p-1 pl-5 pr-5">{el.bootcampTitle}</td>
                  <td className="p-1 pl-5 pr-5">{el.productName}</td>
                  <td className="p-1 pl-5 pr-5">{el.productCount}</td>
                  <td className="p-1 pl-5 pr-5">
                    {el.productRentalStartDate.slice(0, 10)}
                  </td>
                  <td className="p-1 pl-5 pr-5">
                    {el.productRentalEndDate.slice(0, 10)}
                  </td>
                  {rentalStatus(el.productStatus)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ProductHistoryList;
