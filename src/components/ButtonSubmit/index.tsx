import './ButtonSubmit.scss'


interface Props{
    text: string; 
}


const ButtonSubmit: React.FC<Props> =  ({text}) => {
    return(
        <>
            <button type="submit" className="button_submit"> {text} </button>
        </>
    )
}
export default ButtonSubmit