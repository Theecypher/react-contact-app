import { useState } from "react";
import ContactUI from "./ContactUi";

const Home = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Mma Obiora",
      number: "08131972658"
    },
    {
      id: 2,
      name: "Helen Obiora",
      number: "08131972658"
    },
    {
      id: 3,
      name: "Mason Obiora",
      number: "08037125987"
    }
  ]);

  const handleSearch = (e) => {
    const searchText = e.target.value;

    const searchContact = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(searchText.toLowerCase());
    });

    console.log(searchContact);
    return searchContact;
  };

  return (
    <div>
      <input
        onChange={(e) => handleSearch(e)}
        type="text"
        placeholder="Search"
      />

      <section className="contact">
        <section className="contact__header">
          <h4>Name</h4>
          <h4>Pnone Number</h4>
        </section>

        <p className="con_no">Contacts(3)</p>

        <section className="contacts">
          {contacts.map((contact) => (
            <ContactUI contact={contact} />
          ))}
        </section>
      </section>
    </div>
  );
};

export default Home;
