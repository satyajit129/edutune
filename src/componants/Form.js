import styles from "../styles/Form.module.css";
export default function Form({children, className, ...rest}) {
    return (
        <form className={`${styles.form} ${className}`} action="#" {...rest}>
            {children}
        </form>
    )
}