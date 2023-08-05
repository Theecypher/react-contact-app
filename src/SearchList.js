import ContactUI from "./ContactUI";

const SearchList = ({ filteredContacts }) => {
  const filtered = filteredContacts.map((contact) => (
    <ContactUI key={contact.id} contact={contact} />
  ));

  return (
    <section className="phone">
      <section className="phone__header">
        <h4>Name</h4>
        <h4>Phone Number</h4>
      </section>
      {filtered}
    </section>
  );
};

export default SearchList;
