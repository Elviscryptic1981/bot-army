import React from "react";
import styles from "./BotSpecs.module.css";

const botTypeClasses = {
  Assault: styles.military,
  Defender: styles.shield,
  Support: styles.plusCircle,
  Medic: styles.ambulance,
  Witch: styles.magic,
  Captain: styles.star
};

const BotSpecs = (props) => {
  return (
    <div className={styles.segment}>
      <div className={styles.grid}>
        <div className={styles.row}>
          <div className={styles.column}>
            <img
              alt="oh no!"
              className={`${styles.image} ${styles.bordered}`}
              src={props.bot.avatar_url}
            />
          </div>
          <div className={styles.column}>
            <h2>Name: {props.bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {props.bot.catchphrase}
            </p>
            <strong>
              Class: {props.bot.bot_class}
              <i className={botTypeClasses[props.bot.bot_class]} />
            </strong>
            <br />
            <div className={styles.innerSegment}>
              <div className={styles.innerGrid}>
                <div className={styles.innerRow}>
                  <div className={styles.innerColumn}>
                    <i className={`${styles.icon} ${styles.redHeartbeat}`} />
                    <strong>{props.bot.health}</strong>
                  </div>
                  <div className={styles.innerColumn}>
                    <i className={`${styles.icon} ${styles.yellowLightning}`} />
                    <strong>{props.bot.damage}</strong>
                  </div>
                  <div className={styles.innerColumn}>
                    <i className={`${styles.icon} ${styles.blueShield}`} />
                    <strong>{props.bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              className={styles.button}
              onClick={() => props.back()}
            >
              Go Back
            </button>
            <button
              className={styles.button}
              onClick={() => props.enlist(props.bot)}
            >
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotSpecs;
