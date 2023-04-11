
import { StyledText, StyledList, StyledItems, StyledContactButton } from './ContactList.styled'
import { deleteContact } from '../../redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  return (
    <StyledList>
      {contacts.map(({ id, name, number }) => (
        <StyledItems key={id}>
          <StyledText>{name}:</StyledText>
          <StyledText>{number}</StyledText>
          <StyledContactButton type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </StyledContactButton>
        </StyledItems>
      ))}
    </StyledList>
  );
};
