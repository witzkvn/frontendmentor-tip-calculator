import React, { useEffect, useId, useRef, useState } from "react";
import useActiveElement from "../../custom-hooks/useActiveElement";
import PropTypes from "prop-types";
import styles from "./custom-input.module.css";

const CustomNumberInput = ({
  labelText,
  Icon,
  customId,
  handleChange,
  min = 0,
  step = 1,
}) => {
  const uniqueId = useId();
  const inputRef = useRef();
  const [isValid, setIsValid] = useState(true);
  const [inputIsFocus, setInputIsFocus] = useState(false);
  const { activeElement, listenersReady } = useActiveElement();

  useEffect(() => {
    if (activeElement === inputRef.current) {
      setInputIsFocus(true);
    } else {
      setInputIsFocus(false);
    }
  }, [activeElement]);

  function checkValueChange() {
    const newValue = parseFloat(inputRef.current.value);
    const isInputValid = newValue > min;

    setIsValid(isInputValid);

    if (isInputValid) {
      handleChange(newValue);
    }
  }

  return (
    <>
      {listenersReady && (
        <div>
          {labelText && (
            <div className={styles.labelWrapper}>
              <label className={styles.label} htmlFor={customId || uniqueId}>
                {labelText}
              </label>
              {!isValid && inputIsFocus && (
                <span className={styles.error}>Must be more than {min}</span>
              )}
            </div>
          )}
          <div
            className={`${styles.inputIconWrapper} ${
              inputIsFocus
                ? isValid
                  ? styles.validInput
                  : styles.invalidInput
                : ""
            }`}
          >
            {Icon && <Icon />}
            <input
              ref={inputRef}
              onChange={checkValueChange}
              className={styles.input}
              type="number"
              id={customId || uniqueId}
              min={min}
              placeholder={min}
              step={step}
            />
          </div>
        </div>
      )}
    </>
  );
};

CustomNumberInput.propTypes = {
  labelText: PropTypes.string,
  Icon: PropTypes.elementType,
  customId: PropTypes.string,
  handleChange: PropTypes.func,
  min: PropTypes.number,
};

export default CustomNumberInput;
