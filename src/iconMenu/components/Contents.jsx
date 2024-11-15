import { useState } from "react";
import { foodLists } from "./foods";
import SearchKeyword from "./SearchKeyword";
import FoodLists from "./FoodLists";
import SectionFood from "./SectionFood";
import Footer from "./Footer";

const Contents = () => {
  const [foodies, setStarters] = useState(foodLists);
  const [searchItem, setSearch] = useState("");

  const keys = ["description", "food"]; //the keys from the array foodlists

  const searchFunct = (data) => {
    return data.filter((item) =>
      keys.some((keyword) =>
        item[keyword].toLowerCase().includes(searchItem.toLowerCase())
      )
    );
  };

  return (
    <>
      <SearchKeyword searchItem={searchItem} setSearch={setSearch} />
      <FoodLists foodies={searchFunct(foodies)} />
      <SectionFood />
      <Footer />
    </>
  );
};

export default Contents;
