import { Navigate } from "react-router-dom";
import { useAppSelector } from "../utils/hooks";

function PrivateRoute(props: any) {
  const authUser = useAppSelector((x) => x.auth.value.user);

  if (!authUser) {
    return <Navigate to="/login" />;
  }

  return props.children;
}

export { PrivateRoute };
