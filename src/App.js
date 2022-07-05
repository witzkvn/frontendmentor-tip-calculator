import styles from "./app.module.css";
import BlockWrapper from "./layout/block-wrapper/BlockWrapper";

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
          left
        </BlockWrapper>
        <BlockWrapper level="secondary" withShadow={false}>
          right
        </BlockWrapper>
      </BlockWrapper>
    </main>
  );
}

export default App;
