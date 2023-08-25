const Card = (item) => {
  const { name, amount } = item.item;
  return (
    <div className="w-[380px] h-[172px] bg-primaryColor rounded text-white flex items-center font-bold text-inter">
      <div className="pl-10 mt-4">
        <h4 className="text-[18px]">{name}</h4>
        <p className="text-[30px]">{amount}</p>
      </div>
    </div>
  );
};

export default Card;
