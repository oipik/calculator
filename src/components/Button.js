import "./button.scss";

const Button = (props) => {

    console.log(props)

    const getClass = () => {
        switch (props.children) {
            case "%":
            case "/":
            case "*":
            case "+":
            case "-":
                return "action";
            case "=":
                return "equal";
            case "AC":
                return "ac"
            default:
                return null;
        }
    }

    return (
        <button className={`btn ${getClass()}`} onClick={() => props.changeTheme}>
            {props.children}
        </button>
    )
}

export default Button;