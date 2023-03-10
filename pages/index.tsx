import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import FoodList from "../components/FoodList";
import Slider from "../components/Slider";

//https://source.unsplash.com/random/{resolution}/?"+str(search_term) 
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Foody2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Slider/>
        <FoodList></FoodList>
      </main>
    </div>
  );
};

export default Home;
