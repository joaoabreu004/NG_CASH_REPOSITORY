import ButtonSubmit from "../../components/ButtonSubmit";
import Input from "../../components/Input";
import "./Signin.scss";

const SignIn = () => {
  return (
    <section>
      <h2>REGISTRE-SE AGORA</h2>

      <div className="section_formulario">
        <form method="post"> 
          <Input
            label="Username"
            name="username"
            type="text"
            placeholder="Digite seu Username"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Digite sua senha"
          />
          <Input
            label="Confirm Password"
            name="ConfirmPassword"
            type="password"
            placeholder="Confirme sua senha"
          />
          <Input
            label="Your Picture"
            name="picture"
            type="text"
            placeholder="Link da sua foto"
          />
          <ButtonSubmit text="CADASTRAR" />
        </form>
      </div>
    </section>
  );
};
export default SignIn;
