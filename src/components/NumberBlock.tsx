import styles from "../styles/NumberBlock.module.scss";

type NumberBlockProps = {
  height: number;
  maxNumber: number;
};

const NumberBlock: React.FC<NumberBlockProps> = ({ height, maxNumber }) => {
  return (
    <div
      style={{ height: `${height / 1.1 / (maxNumber / 100)}%` }}
      className={styles.numberBlock}
    >
      <span>{height}</span>
    </div>
  );
};
export default NumberBlock;
