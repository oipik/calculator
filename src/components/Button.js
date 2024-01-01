import "./button.scss";

const Button = (props) => {

    const theme = typeof props.children === "object" ? "theme" : "";

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
                return "";
        }
    }

    return (
        <button
            className={`btn ${getClass()}${theme}`}
            onClick={
                props.changeTheme ? () => props.changeTheme() : 
                props.handleInputValue ? () => props.handleInputValue(props.children) : () => props.reset()}>
            {props.children}
        </button>
    )
}


export default Button;


// const Button = (props) => {

    //     const theme = typeof props.children === "object" ? "theme" : "";
    
    //     const getClass = () => {
    //         switch (props.children) {
    //             case "%":
    //             case "/":
    //             case "*":
    //             case "+":
    //             case "-":
    //                 return "action";
    //             case "=":
    //                 return "equal";
    //             case "AC":
    //                 return "ac"
    //             default:
    //                 return "";
    //         }
    //     }
    
    //     return (
    //         <button
    //             className={`btn ${getClass()}${theme}`}
    //             onClick={props.changeTheme ? () => props.changeTheme() : props.handleInputValue}>
    //             {props.children}
    //         </button>
    //     )
    // }