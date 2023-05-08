const PortfolioSideBar = () => {
  return (
    <div className="w-3/12 min-w-20 min-h-40 my-20 mx-10 border-4 border-yellow-300 rounded-3xl">
      <div className="flex flex-col items-center mt-20">
        <p className="font-bold text-lg">나의 포트폴리오</p>
        <ul className="list-disc mb-2">
          <p>수업노트</p>
          <p>스터디</p>
          <p>프로젝트</p>
        </ul>
      </div>
    </div>
  );
};
export default PortfolioSideBar;
