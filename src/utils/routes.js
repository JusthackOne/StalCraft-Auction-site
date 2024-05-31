import Auction from "../pages/Auction";
import MainPage from "../pages/MainPage";

export const ROUTES = {
    MAIN: { to: "/", component: <MainPage /> },
    AUCTION: { to: "/auction", component: <Auction /> },
    FAVORITE: { to: "/favorite", component: <MainPage /> },
  };