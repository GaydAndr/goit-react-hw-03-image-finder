import { PropTypes } from 'prop-types';
import s from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contact__list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contact__item}>
            <p>
              <span>{name}: </span>
              <span>{number} </span>
            </p>
            <button
              type="button"
              onClick={() => onDeleteContact(id)}
              className={s.btn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
