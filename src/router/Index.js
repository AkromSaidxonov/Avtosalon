// Routes
import { PrivateRoutes } from "./PrivateRoot";
import { PublicRoutes } from "./PublikRoute";

export const Index = ({ token }) => {
  const isUserLoggedIn =
    token !== undefined ? <PublicRoutes /> : <PrivateRoutes />;

  return <>{isUserLoggedIn}</>;
};
export default Index