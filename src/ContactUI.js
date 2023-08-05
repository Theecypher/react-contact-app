const ContactUI = ({ contact }) => {
  console.log(contact.length);

  return (
    <div>
      <section className="contact__list">
        <h4>{contact.name}</h4>
        <h4>{contact.number}</h4>
      </section>
    </div>
  );
};

export default ContactUI;
