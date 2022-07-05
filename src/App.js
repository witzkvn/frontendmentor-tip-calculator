import styles from "./styles/app.module.css";
import CustomNumberInput from "./components/custom-input/custom-input";
import BlockWrapper from "./layout/block-wrapper/BlockWrapper";
import { BiDollar, BiUser } from "react-icons/bi";
import CustomButton from "./components/custom-button/custom-button";
import { useEffect, useId, useState } from "react";
import ResultScreen from "./layout/result-screen/result-screen";

function App() {
  const customTipId = useId();
  const [billValue, setBillValue] = useState(0);
  const [peopleNumber, setPeopleNumber] = useState(1);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [tipValues, setTipValues] = useState([
    { value: 5, isSelected: false },
    { value: 10, isSelected: false },
    { value: 15, isSelected: false },
    { value: 25, isSelected: false },
    { value: 50, isSelected: false },
  ]);

  function handleBillValueChange(newValue) {
    setBillValue(newValue);
  }

  function handlePeopleNumberChange(newValue) {
    setPeopleNumber(newValue);
  }

  function handleTipSelection(tipValueSelected) {
    const stateCopy = tipValues.map((tip) => ({ ...tip, isSelected: false }));

    const selectedTipIndex = stateCopy.findIndex(
      (tip) => tip.value === tipValueSelected
    );

    stateCopy[selectedTipIndex].isSelected = true;

    setTipValues(stateCopy);
  }

  // handle manual tip

  function handleResetAll() {
    const stateCopy = tipValues.map((tip) => ({ ...tip, isSelected: false }));
    setTipValues(stateCopy);
  }

  useEffect(() => {
    const selectedTip = tipValues.find((tip) => tip.isSelected === true);

    const tipValue = selectedTip ? selectedTip.value : 0;
    const calculatedTotalTip = billValue * (tipValue / 100);
    const calculatedTipPerPerson = parseFloat(
      calculatedTotalTip / peopleNumber
    ).toFixed(2);

    const totalPerPerson = parseFloat(
      (billValue + calculatedTotalTip) / peopleNumber
    ).toFixed(2);

    setTipPerPerson(calculatedTipPerPerson);
    setTotalPerPerson(totalPerPerson);
  }, [billValue, peopleNumber, tipValues]);

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
        <div className={styles.left}>
          <CustomNumberInput
            labelText="Bill"
            Icon={BiDollar}
            min={0}
            step={0.01}
            handleChange={handleBillValueChange}
          />
          <section>
            <label htmlFor={customTipId} className={styles.tipLabel}>
              Select Tip %
            </label>
            <div className={styles.tipBoxes}>
              {tipValues.map((tip, index) => (
                <CustomButton
                  key={index}
                  value={tip.value}
                  isSelected={tip.isSelected}
                  handleTipSelection={handleTipSelection}
                />
              ))}
              <CustomNumberInput customId={customTipId} min={0} />
            </div>
          </section>
          <CustomNumberInput
            labelText="Number of People"
            Icon={BiUser}
            min={0}
            step={1}
            handleChange={handlePeopleNumberChange}
          />
        </div>
        <BlockWrapper level="secondary" withShadow={false}>
          <ResultScreen
            tipPerPerson={tipPerPerson || 0}
            totalPerPerson={totalPerPerson || 0}
            handleResetAll={handleResetAll}
          />
        </BlockWrapper>
      </BlockWrapper>
    </main>
  );
}

export default App;
