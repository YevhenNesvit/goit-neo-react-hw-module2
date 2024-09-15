import styles from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={styles.options}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 ? (
        <button onClick={resetFeedback} className={styles.resetButton}>
          Reset
        </button>
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  );
};

export default Options;
