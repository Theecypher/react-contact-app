import { useState } from "react";
import SearchList from "./SearchList";

const Search = ({ contacts }) => {
  const [searchField, setSearchField] = useState("");

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function seachList() {
    return <SearchList filteredContacts={filteredContacts} />;
  }

  return (
    <section>
      <div className="search">
        <input type="search" placeholder="Search" onChange={handleChange} />
      </div>
      {seachList()}
    </section>
  );
};

export default Search;
