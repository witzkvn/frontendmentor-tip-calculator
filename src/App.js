import styles from "./app.module.css";
import CustomNumberInput from "./components/custom-input";
import BlockWrapper from "./layout/block-wrapper/BlockWrapper";
import { BiDollar } from "react-icons/bi";

function App() {
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
        </BlockWrapper>
        <BlockWrapper level="secondary" withShadow={false}>
          right
        </BlockWrapper>
      </BlockWrapper>
    </main>
  );
}

export default App;
