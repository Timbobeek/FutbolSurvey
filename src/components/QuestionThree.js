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
                        checked={data.mr}
                        onChange={handleChange}
                    />
                    <label for="messi">Messi</label>

                    
                    <input
                        type="radio"
                        id="ronaldo"
                        name="mr"
                        value="Ronaldo"
                        checked={data.mr}
                        onChange={handleChange} 
                    />
                    <label for="ronaldo">Ronaldo</label>

                    <input
                        type="radio"
                        id="both"
                        name="mr"
                        value="Both"
                        checked={data.mr}
                        onChange={handleChange}
                    />
                    <label for="both">Like and respect both</label>

                    <input
                        type="radio"
                        id="neither"
                        name="mr"
                        value="Neither"
                        checked={data.mr}
                        onChange={handleChange}
                    />
                    <label for="neither">Dislike both</label>

                    
                    <input
                        type="radio"
                        id="idc"
                        name="mr"
                        value="IDC"
                        checked={data.mr}
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