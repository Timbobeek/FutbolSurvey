import useFormContext from "../hooks/useFormContext"

const Question13 = () => {

    const {data, handleChange} = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <p>At what age did you start playing?</p>
                <div className="flex-col">
                    <input
                        type="number"
                        id="age"
                        name="age"
                        placeholder="4"
                        value={data.age}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )

    return content
}
export default Question13