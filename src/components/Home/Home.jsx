import Cards from "../Cards/Cards";
import Navigation from "../Navigation/Navigation";
import Table from "../Table/Table";

const Home = () => {
  return (
    <section className="font-sfPro">
      <Navigation />
      <main className="px-14 pt-6 flex flex-col gap-6">
        <section>
          <h2 className="text-primaryColor font-bold">
            Tené el control de tu negocio
          </h2>
          <Cards />
        </section>
        <section>
          <div className="w-full">
            <h2 className="text-[30px] text-primaryColor font-bold">Historial de ingresos y traspasos</h2>
            <div className="w-full h-[1px] bg-primaryColor"></div>
          </div>
          <Table/>
        </section>
      </main>
    </section>
  );
};

export default Home;
