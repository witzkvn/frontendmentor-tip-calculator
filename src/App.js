import styles from "./app.module.css";
import CustomNumberInput from "./components/custom-input/custom-input";
import BlockWrapper from "./layout/block-wrapper/BlockWrapper";
import { BiDollar, BiUser } from "react-icons/bi";
import CustomButton from "./components/custom-button/custom-button";
import { useId } from "react";

function App() {
  const customTipId = useId();

  return (
    <main className={styles.app}>
      <h1 className={styles.title}>
        SPLI
        <br />
        TTER
      </h1>
      <BlockWrapper
        className={styles.wrapper}
        level="primary"
        withShadow={true}
      >
        <BlockWrapper level="primary" withShadow={false}>
          <CustomNumberInput labelText="Bill" Icon={BiDollar} min={0} />
          <section className={styles.tip}>
            <label htmlFor={customTipId} className={styles.tipLabel}>
              Select Tip %
            </label>
            <div className={styles.tipBoxes}>
              <CustomButton>5%</CustomButton>
              <CustomButton>10%</CustomButton>
              <CustomButton>15%</CustomButton>
              <CustomButton>25%</CustomButton>
              <CustomButton>50%</CustomButton>
              <CustomNumberInput customId={customTipId} min={0} />
            </div>
          </section>
          <CustomNumberInput
            labelText="Number of People"
            Icon={BiUser}
            min={1}
          />
        </BlockWrapper>
        <BlockWrapper level="secondary" withShadow={false}>
          right
        </BlockWrapper>
      </BlockWrapper>
    </main>
  );
}

export default App;
