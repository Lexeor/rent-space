import React from "react";
import AdvertCard from "../components/advert-card/AdvertCard";

// fake data
import { fakeAdvs } from "../utils/mock-data";

function Home() {
  const advs = fakeAdvs.map((item) => {
    return (
      <AdvertCard
        key={item.id}
        price={item.price}
        title={item.title}
        details={item.details}
        newChats={item.newChats}
        totalChats={item.totalChats}
        lastUpdated={item.lastUpdated}
      />
    );
  });

  return (
    <div>
      <h2>Home</h2>
      <div className="adv-wrapper">{advs}</div>
    </div>
  );
}

export default Home;
