import ButtonSubmit from "../../components/ButtonSubmit";
import Input from "../../components/Input";
import LinkButton from "../../components/LinkButton";
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
        <form method="post">
          <h2>LOGIN</h2>
          <Input name="username" label="Username" placeholder="Insira seu user" type="text"/>
          <Input name="password" label="Password" placeholder="Insira sua senha" type="password"/>
          <ButtonSubmit text="ENTRAR"/>
          <LinkButton to="/singin" text="Não tem cadastro? Cadastre-se"/>
        </form>
      </div>
      <div></div>
    </section>
  );
};
export default Home;
