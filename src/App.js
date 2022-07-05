import styles from "./styles/app.module.css";
import CustomNumberInput from "./components/custom-input/custom-input";
import BlockWrapper from "./layout/block-wrapper/BlockWrapper";
import { BiDollar, BiUser } from "react-icons/bi";
import CustomButton from "./components/custom-button/custom-button";
import { useEffect, useId, useState } from "react";
import { getParsedRoundedNumber } from "./utils";
import ResultScreen from "./layout/result-screen/result-screen";

function App() {
  const PEOPLE_MIN = 1;
  const BILL_MIN = 0;
  const TIP_MIN = 0;
  const customTipId = useId();
  const [billValue, setBillValue] = useState(BILL_MIN);
  const [peopleNumber, setPeopleNumber] = useState(PEOPLE_MIN);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [customTip, setCustomTip] = useState(TIP_MIN);
  const [tipValues, setTipValues] = useState([
    { value: 5, isSelected: false },
    { value: 10, isSelected: false },
    { value: 15, isSelected: false },
    { value: 25, isSelected: false },
    { value: 50, isSelected: false },
  ]);

  function handleBillValueChange(newValue) {
    if (isNaN(newValue)) return;
    setBillValue(newValue);
  }

  function handlePeopleNumberChange(newValue) {
    if (isNaN(newValue)) return;
    setPeopleNumber(newValue);
  }

  function handleTipSelection(tipValueSelected) {
    const stateCopy = tipValues.map((tip) => ({ ...tip, isSelected: false }));
    setCustomTip(TIP_MIN);

    const selectedTipIndex = stateCopy.findIndex(
      (tip) => tip.value === tipValueSelected
    );

    stateCopy[selectedTipIndex].isSelected = true;

    setTipValues(stateCopy);
  }

  function handleCustomTipAmount(customValue) {
    if (isNaN(customValue)) return;
    resetTipsValuesState();
    setCustomTip(customValue);
  }

  function handleResetAll() {
    resetTipsValuesState();
    setPeopleNumber(PEOPLE_MIN);
    setBillValue(BILL_MIN);
    setCustomTip(TIP_MIN);
  }

  function resetTipsValuesState() {
    const stateCopy = tipValues.map((tip) => ({
      ...tip,
      isSelected: false,
    }));
    setTipValues(stateCopy);
  }

  useEffect(() => {
    let tipValue;

    if (
      billValue < BILL_MIN ||
      peopleNumber < PEOPLE_MIN ||
      customTip < TIP_MIN
    ) {
      return;
    }

    if (customTip) {
      tipValue = getParsedRoundedNumber(customTip * 1, 2);
    } else {
      const selectedTip = tipValues.find((tip) => tip.isSelected === true);

      tipValue = selectedTip ? selectedTip.value : 0;
    }

    const calculatedTotalTip = billValue * 1 * (tipValue / 100);
    const calculatedTipPerPerson = getParsedRoundedNumber(
      ((calculatedTotalTip * 1) / peopleNumber) * 1,
      2
    );

    const totalPerPersonRaw =
      ((billValue * 1 + calculatedTotalTip * 1) / peopleNumber) * 1;

    const totalPerPerson = getParsedRoundedNumber(totalPerPersonRaw, 2);

    setTipPerPerson(calculatedTipPerPerson);
    setTotalPerPerson(totalPerPerson);
  }, [billValue, peopleNumber, tipValues, customTip]);

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
            min={BILL_MIN}
            step={0.01}
            value={billValue}
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
              <CustomNumberInput
                handleChange={handleCustomTipAmount}
                customId={customTipId}
                min={0}
                step={0.01}
                value={customTip}
              />
            </div>
          </section>
          <CustomNumberInput
            labelText="Number of People"
            Icon={BiUser}
            min={PEOPLE_MIN}
            step={1}
            value={peopleNumber}
            handleChange={handlePeopleNumberChange}
          />
        </div>
        <BlockWrapper level="secondary" withShadow={false}>
          <ResultScreen
            tipPerPerson={tipPerPerson}
            totalPerPerson={totalPerPerson}
            handleResetAll={handleResetAll}
          />
        </BlockWrapper>
      </BlockWrapper>
    </main>
  );
}

export default App;
