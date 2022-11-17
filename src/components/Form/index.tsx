import "./Form.scss";
import{ FaRegTimesCircle, FaCheckCircle} from 'react-icons/fa'

const Form = () => {
  return (
    <div>
      <form className="form_login">
        <p className="title">LOGIN</p>
        <div>
          <label>Username:</label>
          <input type="text" placeholder="Digite seu username"/>
        </div>

        <div>
          <label>Password:</label>
          <input type="password" placeholder="Digite sua senha"/>
        </div>

        <div>
          <button type="submit">Entrar</button>
        </div>
        <p>NÃO TEM CADASTRO? CADASTRE-SE</p>
      </form>
    </div>
  );
};
export default Form;
