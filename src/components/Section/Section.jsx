import { PropTypes } from 'prop-types';
import s from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      <h2 className="title">{title}</h2>
      <>{children}</>
    </section>
  );
};

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
