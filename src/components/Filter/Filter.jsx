import PropTypes from 'prop-types';
import { StyledLabel, StyledFilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux'; 
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <StyledLabel>
      Find contacts by name
      <StyledFilterInput type="text" onChange={(event) => dispatch(setFilter(event.target.value))} />
    </StyledLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.func,
}