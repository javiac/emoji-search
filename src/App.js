import React, { useState } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [max, setMax] = useState("");

  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }

  return (
    <div>
      <Header />
      <SearchInput value={searchText} textChange={handleSearchChange} />
      <input
        type="number"
        value={max}
        onChange={(value) => {
          setMax(value.target.value);
        }}
      />
      <EmojiResults emojiData={filterEmoji(searchText, max ? max : 20)} />
    </div>
  );
}
