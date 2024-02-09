// import useFormContext from "../hooks/useFormContext";

import { useContext } from "react"
import SurveyContext from "./SurveyContext";

const useFormContext = () => {
    return useContext(SurveyContext)
}

export const InputTypes = {
  text: "TEXT",
  radioButtons: "RADIO",
  checkBoxes: "CHECK",
  numericText: "NUMBER",
};

export function textControl(id, name, placeholder) {
  return {
    type: InputTypes.text,
    data: {
      id, 
      name,
      placeholder,
    }
  }
}

export function numericTextControl(id, name, placeholder) {
  return {
    type: InputTypes.numericText,
    data: {
      id, 
      name,
      placeholder,
    }
  }
}

export function radioButtonsControl(name, radioButtonStyle, options) {
  return {
    type: InputTypes.radioButtons,
    radioButtonStyle,
    data: options.map(option => ({
      name,
      id: option.id,
      value: option.value,
      label: option.label
    }))
  }
}

export function checkBoxesControl(options) {
  return {
    type: InputTypes.checkBoxes,
    data: options.map(option => ({
      id: option.id,
      name: option.name,
      value: option.value,
      label: option.label
    }))
  }
}

export const SurveyQuestion = ({ title, control, options }) => {
  const { data, handleChange } = useFormContext();

  console.log(title, control)

  const content = (
    <div>
      <div className="split-container">
        <p className={options?.titleStyle ?? "questionText"}>{title}</p>
        <div className="flex-col">
          {/* radioButtons */}
          {control.type === InputTypes.radioButtons && (
            <div className="flex-row">
              {control.data.map((option, i) => (
                <div key={`radio-option-${i}`} className="radioOption">
                  <input
                    type="radio"
                    className={control.radioButtonStyle}
                    id={option.id}
                    name={option.name}
                    value={option.value}
                    checked={data[option.name] === option.value} //value
                    onChange={handleChange}
                  />
                  <label htmlFor={option.id} className="radioText">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          )}

          {/* text */}
          {control.type === InputTypes.text && (
            <textarea
              type="text"
              className="textField"
              id={control.data.id}
              name={control.data.name}
              placeholder={control.data.placeholder}
              //pattern="([A-Z])[\w+.]{1,}"
              value={data[control.data.name]}
              onChange={handleChange}
            />
          )}

          {/* checkBoxes */}
          {control.type === InputTypes.checkBoxes && (
            <div className="flex-row">
              {control.data.map((option, i) => (
                <div key={`check-option-${i}`}>
                  <input
                    type="checkbox"
                    className="checkboxes"
                    id={option.id}
                    //name="level" ---> for name based validation
                    name={option.name} //this is what will be filtered by
                    value={option.value} //this is sent to the server?
                    checked={data[option.name]}
                    onChange={handleChange}
                  />
                  <label htmlFor={option.id} className="checkboxText">
                    {option.label}
                  </label>
              </div>
              ))}
            </div>
          )}

          {/* numericText */}
          {control.type === InputTypes.numericText && (
            <input
              // type="number"
              type="text"
              min={0}
              className="textField"
              id={control.data.id}
              name={control.data.name}
              placeholder={control.data.placeholder}
              value={data.age}
              onChange={handleChange}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          )}
        </div>
      </div>
    </div>
  );

  return content;
};
