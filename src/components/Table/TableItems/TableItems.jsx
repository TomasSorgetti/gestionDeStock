
const TableItems = (item) => {
    const {fecha,tipo,origen,sucursal}=item.item
  return (
    <div className="grid grid-cols-10 gap-[1px] text-center text-textColor font-semibold font-inter text-[18px]">
      <p className="col-span-1 m-0 py-2 bg-grayColor">{fecha}</p>
      <p className="col-span-1 m-0 py-2 bg-grayColor">{tipo}</p>
      <p className="col-span-6 m-0 py-2 bg-grayColor">{origen}</p>
      <p className="col-span-2 m-0 py-2 bg-grayColor">{sucursal}</p>
    </div>
  );
}

export default TableItems