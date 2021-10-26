export const Practice4 = () => {
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice1 = () => {
    calcTotalFee(1000);
  };
  return (
    <div>
      <p>練習問題:設定ふぁいるを触ってみる</p>
      <button onClick={onClickPractice1}>練習問題4を実行</button>
    </div>
  );
};
