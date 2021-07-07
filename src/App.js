import { Component } from 'react';
import shortid from "shortid";
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactList";
import Filter from "./components/Filter/";


class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: '',
  };

  handleAddContact = ({ name, number }) => {
    if (this.state.contacts.find((contact) => contact.name === name)) {
      alert(`${name}  is alredy in contacts`);
      return;
    }

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  handleRemoveContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleTodos = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleTodos();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />
        <h2>Contact List</h2>

        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactsList
          contacts={visibleContact}
          onDeleteContact={this.handleRemoveContact}
        />
      </>
    );
  }
}



export default App;
