import Featured from "@/components/home/Featured";
import Hero from "@/components/home/Hero";
import MarqueLoader from "@/components/loader/MarqueLoader";
import Marque from "@/components/shared/Marque";
import { books } from "@/lib/data";
import { Suspense } from "react";

const Home = async () => {
  const allbooks = await books();
  return (
    <div>
      <Suspense fallback={ <MarqueLoader/> }>
        <Marque />
      </Suspense>
      <Hero/>
      <Suspense fallback={ <div>Loading featured...</div> }>
        <Featured/>
      </Suspense>
    </div>
  );
};

export default Home;