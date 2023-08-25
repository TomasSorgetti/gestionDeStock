import Cards from "../Cards/Cards";
import Navigation from "../Navigation/Navigation";

const Home = () => {
  return (
    <section className="font-sfPro">
      <Navigation />
      <main className="px-14 pt-6">
        <section>
          <h2 className="text-primaryColor font-bold">
            Tené el control de tu negocio
          </h2>
          <Cards/>
        </section>
      </main>
    </section>
  );
};

export default Home;
