import React from 'react';
import BotCard from "../components/BotCard";
import styles from './BotCollection.module.css';

export default function BotCollection({ botCollection, action, removeCard }) {
  const displayBotCards = botCollection.map(bot => (
    <BotCard key={bot.id} bot={bot} action={action} removeCard={removeCard} />
  ));

  return (
    <div className={styles.grid}>
      <div className={styles.row}>
        {displayBotCards}
        {botCollection.length === 0 && (
          <div className={styles.message}>
            You have completed your Bot Army. There are no more bots to collect.
          </div>
        )}
      </div>
    </div>
  );
}
