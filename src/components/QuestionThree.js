import useFormContext from "../hooks/useFormContext"

//testing radio button type here! 


const QuestionThree = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">

                <p>Messi or Ronaldo?</p>
                <div className="flex-col">
                    
                    <input
                        type="radio"
                        id="messi"
                        name="mr"
                        value="Messi"
                        onChange={handleChange}
                    />
                    <label for="messi">Messi</label>

                    
                    <input
                        type="radio"
                        id="ronaldo"
                        name="mr"
                        value="Ronaldo"
                        onChange={handleChange} 
                    />
                    <label for="ronaldo">Ronaldo</label>

                    <input
                        type="radio"
                        id="both"
                        name="mr"
                        value="Both"
                        onChange={handleChange}
                    />
                    <label for="both">Like and respect both</label>

                    <input
                        type="radio"
                        id="neither"
                        name="mr"
                        value="Neither"
                        onChange={handleChange}
                    />
                    <label for="neither">Dislike both</label>

                    
                    <input
                        type="radio"
                        id="idc"
                        name="mr"
                        value="IDC"
                        onChange={handleChange}
                    />
                    <label for="neither">Literally don't care</label>

                </div>
            </div>
        </div>
    )

    return content
}
export default QuestionThree