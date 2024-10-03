import Banner from "@/components/Banner";
import Header from "@/components/Header";
import ProductListing from "@/components/ProductListing";

import SortBar from "@/components/SortBar";
import SuggestedItems from "@/components/SuggestedItems";
import Image from "next/image";
import NewArrivals from "@/components/NewArrivals";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Banner />

      <NewArrivals />
      <SortBar />
      <ProductListing />

      <SuggestedItems />
    </div>
  );
}
