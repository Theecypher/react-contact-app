const ContactUI = ({ contact }) => {
  return (
    <section className="contact__list">
      <h4>{contact.name}</h4>
      <h4>{contact.number}</h4>
    </section>
  );
};

export default ContactUI;
