import useFormContext from "../hooks/useFormContext"

const Question4 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">

                <p className="questionText">Messi or Ronaldo?</p>
                <div className="flex-col">
                    
                    <input
                        type="radio"
                        className="smallRadioButtons"
                        id="messi"
                        name="mr"
                        value="Messi"
                        checked={data.mr === 'Messi'}
                        onChange={handleChange}
                    />
                    <label for="messi">Messi</label>

                    
                    <input
                        type="radio"
                        className="smallRadioButtons"
                        id="ronaldo"
                        name="mr"
                        value="Ronaldo"
                        checked={data.mr === 'Ronaldo'}
                        onChange={handleChange} 
                    />
                    <label for="ronaldo">Ronaldo</label>

                    <input
                        type="radio"
                        className="smallRadioButtons"
                        id="both"
                        name="mr"
                        value="Both"
                        checked={data.mr === "Both"}
                        onChange={handleChange}
                    />
                    <label for="both">Like and respect both</label>

                    <input
                        type="radio"
                        className="smallRadioButtons"
                        id="neither"
                        name="mr"
                        value="Neither"
                        checked={data.mr === "Neither"}
                        onChange={handleChange}
                    />
                    <label for="neither">Dislike both</label>

                    
                    <input
                        type="radio"
                        className="smallRadioButtons"
                        id="idc"
                        name="mr"
                        value="IDC"
                        checked={data.mr === "IDC"}
                        onChange={handleChange}
                    />
                    <label for="neither">Don't care</label>

                </div>
            </div>
        </div>
    )

    return content
}
export default Question4