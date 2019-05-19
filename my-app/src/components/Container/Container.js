import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';


const Container = (props) => (
  <div className={styles.component}>
    {props.children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;

// const Button = ({variant = '', ...otherProps}) => (
//   <button
//     {...otherProps}
//     className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
//   />
// );
//
// Button.propTypes = {
//   variant: PropTypes.string,
// };
//
// export default Button;



// import React from 'react';
//
// const TodoList = (props) => {
//   return (
//     <ul>
//       {props.items.map(item => {
//         return <li key={item.id}>{item.name}</li>
//       })}
//     </ul>
//   );
// }
//
// export default TodoList;
