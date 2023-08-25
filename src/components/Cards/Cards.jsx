import Card from "../Card/Card"


const Cards = () => {
    const list = [
      {
        name: "Productos totales",
        amount: "1.234",
      },
      {
        name: "Productos disponibles",
        amount: "1.234",
      },
      {
        name: "Cantidad proveedores",
        amount: "1.234",
      },
      {
        name: "Último ingreso",
        amount: "01/01",
      },
      {
        name: "Últimos traspaso",
        amount: "01/01",
      },
    ];
  return (
      <article className="flex flex-wrap gap-3">
          {list?.map((item, index) => (
              <Card key={index} item={item} />
          ))}
    </article>
  )
}

export default Cards