import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import Ticket from './Ticket';
import tickets from '../../mock/tickets';
import TicketShape from '../../shapes/Ticket';
import styles from './index.module.css';

const cn = classnames.bind(styles);

export default function Tickets({tickets}) {
  return (
    <table className={cn('tickets')}>
      <tbody>
        {tickets.map(ticket => <Ticket ticket={ticket} key={ticket.id} />)}
      </tbody>
    </table>
  );
}

Tickets.propTypes = {
  tickets: PropTypes.arrayOf(TicketShape).isRequired,
};
