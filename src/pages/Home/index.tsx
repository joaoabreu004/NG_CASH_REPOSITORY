import Form from "../../components/Form";
import "./Home.scss";

const Home = () => {
  return (
    <section>
      <div className="main_section">
        <div className="main_about">
          <h2>SOBRE</h2>
          <p>Somos a cateira digital da Nova Geração.</p>
          <p>Viemos te ajudar a construir a sua independência financeira.</p>
          <p>
            Vivemos o novo, transformando o futuro. Afinal, depois do ponto, vem
            um novo começo.
          </p>
          <img
            src="https://ng.cash/_nuxt/img/ngcard.ced5acb.svg"
            alt="home1_ng"
          />
          <img
            src="https://ng.cash/_nuxt/img/ngcash.5b8db70.png"
            alt="home2_ng"
          />
        </div>
        <Form />
      </div>
      <div></div>
    </section>
  );
};
export default Home;
