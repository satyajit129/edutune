import styles from "../styles/Button.module.css";
export default function Button({className, children, ...rest}) {
    return (
        <button {...rest} className={`${className} ${styles.button} `}>
              {children}
        </button>
    )
}