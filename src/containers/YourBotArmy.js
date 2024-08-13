import React from 'react';
import BotCard from "../components/BotCard";
import styles from './YourBotArmy.module.css';

export default function YourBotArmy({ bots, action, removeCard }) {
  const displayBots = bots.map(bot => (
    <BotCard key={bot.id} bot={bot} action={action} removeCard={removeCard} />
  ));

  return (
    <div className={styles.segment}>
      <div className={styles.grid}>
        <div className={styles.row}>
          {displayBots}
        </div>
      </div>
    </div>
  );
}
