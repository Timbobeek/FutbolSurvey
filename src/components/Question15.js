import useFormContext from "../hooks/useFormContext"

//testing checkbox type here! 

const Question15 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p className="questionText">What level did you play at?</p>
                <div className="flex-col">
                    
                    <input
                        type="checkbox"
                        className="checkboxes"
                        id="amateur"
                        //name="level" ---> for name based validation
                        name="amateur"  //this is what will be filtered by
                        value="amateur" //this is sent to the server?
                        checked={data.amateur}
                        onChange={handleChange}
                    />
                    <label for="amateur">Amateur</label>

                    
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
                    <label for="hs">High School</label>

                    
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
                    <label for="proacademy">Pro Academy</label>

                    
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
                    <label for="college">College</label>

                    
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
                    <label for="semipro">Semi-Pro</label>

                    
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
                    <label for="pro">Pro</label>
                </div>
            </div>
        </div>
    )

    return content
}
export default Question15