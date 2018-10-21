import classnames from 'classnames/bind';
import React from 'react';
import TicketShape from '../../shapes/Ticket';
import styles from './index.module.css';

const cn = classnames.bind(styles);

export default function Ticket({ticket}) {
  return (
    <tr className={cn('ticket')}>
      <td className={cn('name')}>{ticket.name}</td>
      <td className={cn('price')}>{ticket.price}</td>
      <td className={cn('buy')}>
        <a target="_blank" className={cn('link')} href={ticket.buyLink}>Buy</a>
      </td>
    </tr>
  );
}

Ticket.propTypes = {
  ticket: TicketShape.isRequired,
};
