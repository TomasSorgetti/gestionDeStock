import TableItems from "./TableItems/TableItems";

const Table = () => {
  const list = [
    {
      fecha: "01/01",
      tipo: "Traspaso",
      origen: "Sucursal 2",
      sucursal: "Sucursal 1",
    },
    {
      fecha: "01/01",
      tipo: "Ingreso",
      origen: "Proveedor 1",
      sucursal: "Sucursal 1",
    },
    {
      fecha: "01/01",
      tipo: "Traspaso",
      origen: "Sucursal 2",
      sucursal: "Sucursal 1",
    },
    {
      fecha: "01/01",
      tipo: "Ingreso",
      origen: "Proveedor 1",
      sucursal: "Sucursal 1",
    },
    {
      fecha: "01/01",
      tipo: "Traspaso",
      origen: "Sucursal 2",
      sucursal: "Sucursal 1",
    },
    {
      fecha: "01/01",
      tipo: "Ingreso",
      origen: "Proveedor 1",
      sucursal: "Sucursal 1",
    },
  ];
  return (
    <article className="flex flex-col my-6 ">
      <div className="grid grid-cols-10 gap-[1px] text-center text-white font-bold">
        <p className="col-span-1 bg-primaryColor py-2 m-0">Fecha</p>
        <p className="col-span-1 bg-primaryColor py-2 m-0">Tipo</p>
        <p className="col-span-6 bg-primaryColor py-2 m-0">Origen</p>
        <p className="col-span-2 bg-primaryColor py-2 m-0">Sucursal</p>
      </div>
      <div className="flex flex-col gap-[1px]">
        {list?.map((item, index) => (
          <TableItems key={index} item={item} />
        ))}
      </div>
    </article>
  );
};

export default Table;
