import AuctionItem from "../pages/AuctionItem";
import Auction from "../pages/Auction";
import MainPage from "../pages/MainPage";

export const ROUTES = {
    MAIN: { to: "/", component: <MainPage /> },
    AUCTION: { to: "/auction", component: <Auction /> },
    AUCTION_ITEM: { to: "/auction/:id", component: <AuctionItem /> },
    FAVORITE: { to: "/favorite", component: <MainPage /> },
  };