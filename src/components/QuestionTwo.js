import useFormContext from "../hooks/useFormContext"

//testing checkbox type here! 

const QuestionTwo = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p>What level did you play at?</p>
                <div className="flex-col">
                    
                    <input
                        type="checkbox"
                        id="amateur"
                        name="amateur"  //this is what will be filtered by
                        checked={data.amateur}
                        onChange={handleChange}
                    />
                    <label for="amateur">Amateur</label>

                    
                    <input
                        type="checkbox"
                        id="hs"
                        name="hs"
                        checked={data.hs}
                        onChange={handleChange}
                    />
                    <label for="hs">High School</label>

                    
                    <input
                        type="checkbox"
                        id="acad"
                        name="acad"
                        checked={data.acad}
                        onChange={handleChange}
                    />
                    <label for="proacademy">Pro Academy</label>

                    
                    <input
                        type="checkbox"
                        id="college"
                        name="college"
                        checked={data.college}
                        onChange={handleChange}
                    />
                    <label for="college">College</label>

                    
                    <input
                        type="checkbox"
                        id="semipro"
                        name="semipro"
                        checked={data.semipro}
                        onChange={handleChange}
                    />
                    <label for="semipro">Semi-Pro</label>

                    
                    <input
                        type="checkbox"
                        id="pro"
                        name="pro"
                        checked={data.pro}
                        onChange={handleChange}
                    />
                    <label for="pro">Pro</label>
                </div>
            </div>
        </div>
    )

    return content
}
export default QuestionTwo