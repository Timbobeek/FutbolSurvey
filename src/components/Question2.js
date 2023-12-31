import useFormContext from "../hooks/useFormContext"

const Question2 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">

                <p>Favorite position?</p>
                <div className="flex-col">
                    
                    <input
                        type="radio"
                        id="gk"
                        name="position"
                        value="Goalkeeping"
                        checked={data.position === 'Goalkeeping'} //value
                        onChange={handleChange}
                    />
                    <label for="gk">GK</label>

                    
                    <input
                        type="radio"
                        id="def"
                        name="position"
                        value="Defense"
                        checked={data.position === 'Defense'}
                        onChange={handleChange} 
                    />
                    <label for="defense">DEF</label>

                    <input
                        type="radio"
                        id="mid"
                        name="position"
                        value="Midfield"
                        checked={data.position === "Midfield"}
                        onChange={handleChange}
                    />
                    <label for="midfield">MID</label>

                    <input
                        type="radio"
                        id="fwd"
                        name="position"
                        value="Forward"
                        checked={data.position === "Forward"}
                        onChange={handleChange}
                    />
                    <label for="forward">FWD</label>

                </div>
            </div>
        </div>
    )

    return content
}
export default Question2