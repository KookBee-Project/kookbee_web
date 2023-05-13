const ClientTab = ({ scroll }) => {
  console.log(scroll);
  return (
    <div className="w-screen">
      {scroll.y >= 154 ? (
        <div className="w-5/6 text-center text-3xl animate-slide-right">
          안녕
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ClientTab;
