import React from "react";
import Head from "next/head";
import styles from "@/styles/SortPagesStyles.module.scss";
import NumberBlock from "@/components/NumberBlock";

export default function Home() {
  const [reset, setReset] = React.useState(0);
  const [blocked, setBlocked] = React.useState(true);
  const initialArray = [
    1, 4, 5, 13, 34, 23, 2, 5, 8, 9, 10, 59, 32, 15, 26, 28, 30, 54, 78, 35,
  ];
  let interval: NodeJS.Timer;
  const [array, setArray] = React.useState(initialArray.slice(0));

  const quickSort = async (numArr: number[]) => {
    if (numArr.length < 2) return numArr;
    let pivot = numArr[0];
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 1; i < numArr.length; i++) {
      if (pivot < numArr[i]) {
        left.push(numArr[i]);
      } else {
        right.push(numArr[i]);
      }
    }
    const rightResult = await quickSort(right);
    const leftResult = await quickSort(left);
    const result: number[] = await leftResult.concat(pivot, rightResult);
    await new Promise((r) => setTimeout(r, 1000));
    setArray(result);
    return result;
  };

  const resetHandler = () => {
    setReset(reset + 1);
    setArray(initialArray.slice(0));
  };

  React.useEffect(() => {
    setBlocked(true);
    let sortArray = array.slice(0);
    quickSort(sortArray).then(() => setBlocked(false));
  }, [reset]);

  return (
    <>
      <Head>
        <title>Quicksort</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Quicksort</h1>
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