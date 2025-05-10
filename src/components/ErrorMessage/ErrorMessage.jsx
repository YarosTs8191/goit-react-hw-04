import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return <p className={css.error}>Something went wrong</p>;
};

export default ErrorMessage;
