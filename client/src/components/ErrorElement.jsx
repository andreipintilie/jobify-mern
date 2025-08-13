import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.error("Error:", error);
  return <h4>There was an error...</h4>;
};

export default ErrorElement;
