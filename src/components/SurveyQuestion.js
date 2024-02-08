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

export function radioButtonsControl(name, options) {
  return {
    type: InputTypes.radioButtons,
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

/*

text: controlData =         {
            id="def"
            name="position"
            value="Defense"
        }


numericText: controlData =         {
            id="def"
            name="position"
            value="Defense"
        }


radioButtons: controlData = {
    items: [
        {
            id="def"
            name="position"
            value="Defense"
        }
    ]
}

checkBoxes: controlData = {
    items: [
        {
            id="hs"
            name="hs"
            value="high school"
        }
    ]
}

*/

export const SurveyQuestion = ({ title, control }) => {
  const { data, handleChange } = useFormContext();

  console.log(title, control)

  const content = (
    <div className="flex-col">
      <div className="split-container">
        <p className="questionText">{title}</p>

        <div className="flex-col">
          
          {/* radioButtons */}
          {control.type === InputTypes.radioButtons && (
            <>
              {control.data.map(option => (
                <>
                  <input
                    type="radio"
                    className="radioButtons"
                    id={option.id}
                    name={option.name}
                    value={option.value}
                    checked={data[option.name] === option.value} //value
                    onChange={handleChange}
                  />
                  <label for={option.id} className="radioText">
                    {option.label}
                  </label>
                </>
              ))}
            </>
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
            <>
              {control.data.map(option => (
                <>
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
                  <label for={option.id} className="checkboxText">
                    {option.label}
                  </label>
              </>
              ))}

              {/* <input
                type="checkbox"
                className="checkboxes"
                id="amateur"
                //name="level" ---> for name based validation
                name="amateur" //this is what will be filtered by
                value="amateur" //this is sent to the server?
                checked={data.amateur}
                onChange={handleChange}
              />
              <label for="amateur" className="checkboxText">
                Amateur
              </label>

              <input
                type="checkbox"
                className="checkboxes"
                id="hs"
                //name="level"
                name="hs"
                value="high school"
                checked={data.hs}
                onChange={handleChange}
              />
              <label for="hs" className="checkboxText">
                High School
              </label>

              <input
                type="checkbox"
                className="checkboxes"
                id="acad"
                //name="level"
                name="acad"
                value="pro academy"
                checked={data.acad}
                onChange={handleChange}
              />
              <label for="proacademy" className="checkboxText">
                Pro Academy
              </label>

              <input
                type="checkbox"
                className="checkboxes"
                id="college"
                name="college"
                //name="level"
                value="college"
                checked={data.college}
                onChange={handleChange}
              />
              <label for="college" className="checkboxText">
                College
              </label>

              <input
                type="checkbox"
                className="checkboxes"
                id="semipro"
                name="semipro"
                //name="level"
                value="semi-pro"
                checked={data.semipro}
                onChange={handleChange}
              />
              <label for="semipro" className="checkboxText">
                Semi-Pro
              </label>

              <input
                type="checkbox"
                className="checkboxes"
                id="pro"
                name="pro"
                //name="level"
                value="pro"
                checked={data.pro}
                onChange={handleChange}
              />
              <label for="pro" className="checkboxText">
                Pro
              </label> */}
            </>
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
