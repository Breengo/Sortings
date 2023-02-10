import React from "react";
import Head from "next/head";
import styles from "@/styles/SortPagesStyles.module.scss";
import NumberBlock from "@/components/NumberBlock";

export default function Home() {
  const sortStep = React.useRef(1);
  const [reset, setReset] = React.useState(0);
  const [blocked, setBlocked] = React.useState(false);
  const initialArray = [
    1, 4, 5, 13, 34, 23, 2, 5, 8, 9, 10, 59, 32, 15, 26, 28, 30, 54, 78, 35,
  ];
  let interval: NodeJS.Timer;
  const [array, setArray] = React.useState(initialArray.slice(0));
  const countingSort = (numArr: number[], step: number) => {
    const size = Math.max(...numArr);
    const resultArr: number[] = [];
    for (let i = 0; i < numArr.length; i++) {
      resultArr.push(0);
    }
    let countArr: number[] = [];
    for (let i = 0; i <= size; i++) {
      countArr.push(0);
    }
    numArr.forEach((item) => (countArr[item] = countArr[item] + 1));
    for (let i = 1; i <= size; i++) {
      countArr[i] = countArr[i - 1] + countArr[i];
    }
    for (let i = 0; i < step; i++) {
      resultArr[numArr.length - countArr[numArr[i]]] = numArr[i];
      countArr[numArr[i]] = countArr[numArr[i]] - 1;
    }
    setArray(resultArr);
    return resultArr;
  };
  const resetHandler = () => {
    sortStep.current = 1;
    setReset(reset + 1);
    setArray(initialArray.slice(0));
  };

  React.useEffect(() => {
    if (!interval) {
      setBlocked(true);
      interval = setInterval(() => {
        if (sortStep.current < array.length) {
          sortStep.current = sortStep.current + 1;
          countingSort(array.slice(0), sortStep.current);
        } else {
          setBlocked(false);
          clearInterval(interval);
        }
      }, 1000);
    }
  }, [reset]);

  return (
    <>
      <Head>
        <title>Counting</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Counting</h1>
          <div className={styles.diagram}>
            {array.map((item, index) => (
              <NumberBlock
                maxNumber={Math.max(...array)}
                height={item}
                key={index}
              />
            ))}
          </div>
          <button
            onClick={blocked ? undefined : resetHandler}
            className={blocked ? styles.blockedButton : styles.button}
          >
            Reset
          </button>
        </div>
      </main>
    </>
  );
}