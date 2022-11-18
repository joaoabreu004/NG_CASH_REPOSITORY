
import './Input.scss'


interface Props{
    label: string,
    type: string, 
    name: string,
    placeholder: string, 
}


const Input:React.FC<Props> = ({label, type, name, placeholder}) =>{
    return(
        <div className='input_field'>
            <label>
                <span>{label}:</span>
            </label>
            <input type={type} name={name} id={name} placeholder={placeholder} />
        </div>
    )
}
export default Input