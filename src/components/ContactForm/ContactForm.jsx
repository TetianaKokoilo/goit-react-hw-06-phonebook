// import { useState } from 'react';
// import { nanoid } from 'nanoid';
import {
  StyledInput,
  StyledForm,
  StyledName,
  StyledFormButton,
} from './ContactForm.styled';
import { addContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactForm = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  // const handleChange = e => {
  //   setName(e.currentTarget.value);
  //   setNumber(e.currentTarget.value);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    console.log(form);
    //   const contact = {
    //   id: nanoid(),
    //   name: name,
    //   number: number,
    // };
    dispatch(addContact(form.name.value, form.number.value));
    // setName('');
    // setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledName>Name</StyledName>
      <StyledInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        // id={nanoid()}
        // onChange={handleChange}
        // value={name}
      />
      <StyledName>Number</StyledName>
      <StyledInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        // id={nanoid()}
        // onChange={handleChange}
        // value={number}
      />
      <StyledFormButton type="submit">Add Contacts</StyledFormButton>
    </StyledForm>
  );
};
