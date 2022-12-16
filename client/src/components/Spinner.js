import spinnerStyle from "../styles/Spinner.module.css";

export default function Spinner(props) {
  return <div className={spinnerStyle.spinnerContainer} style={props.isLoading ? { display: "flex" } : { display: "none" }}>
    <div className={spinnerStyle.spinner}></div>;
  </div>;
}
