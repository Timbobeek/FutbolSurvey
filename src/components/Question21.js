import useFormContext from "../hooks/useFormContext"

const Question21 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">

                <p className="questionText">Jabulani ball is ...</p>
                <div className="flex-col">
                    
                    <input
                        type="radio"
                        className="radioButtons"
                        id="trash"
                        name="jabu"
                        value="trash"
                        checked={data.jabu === 'trash'}
                        onChange={handleChange}
                    />
                    <label for="trash">Trash</label>

                    
                    <input
                        type="radio"
                        className="radioButtons"
                        id="enjoyable"
                        name="jabu"
                        value="enjoyable"
                        checked={data.jabu === 'enjoyable'}
                        onChange={handleChange} 
                    />
                    <label for="enjoyable">Enjoyable</label>

                    <input
                        type="radio"
                        className="radioButtons"
                        id="noidea"
                        name="jabu"
                        value="noidea"
                        checked={data.jabu === "noidea"}
                        onChange={handleChange}
                    />
                    <label for="noidea">No idea</label>

                </div>
            </div>
        </div>
    )

    return content
}
export default Question21