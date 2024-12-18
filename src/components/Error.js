import { useRouteError } from "react-router";
const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>OopS!!!!!!! Something went wrong</h1>
      <b>{err.statusText}</b>
    </div>
  );
};

export default Error;
