
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import {
  StyledTitle,
  StyledContainer,
  StyledContactsTitle,
} from './App.styled';

export function App() {
  return (
    <StyledContainer>
      <StyledTitle>Phonebook</StyledTitle>
      <ContactForm />

      <StyledContactsTitle>Contacts</StyledContactsTitle>
      <Filter />
      <ContactList />
    </StyledContainer>
  );
}
