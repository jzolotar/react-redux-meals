import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ItemAlert = ({ message, status, removeAlert }) => {
  const items = useSelector((state) => state.items);

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [items, removeAlert]);

  return <p className={status}>{message}</p>;
};

export default ItemAlert;
