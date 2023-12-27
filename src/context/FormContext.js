import { createContext, useState} from "react";

const FormContext = createContext({});

export const FormProvider = ({children})=> {

    // this code defines the order of pages and where is the submit button at! and title for each
    const title = {
        0: 'Question 1',
        1: 'Question 2',
        2: 'Question 3',
        3: 'Question 4',
    }

    const [page, setPage] = useState(0)

    //this is the data object that will be sent to database in the future!
    const [data, setData] = useState({
        name: "",
        amateur: false,
        hs: false,
        acad: false,
        college: false,
        semipro: false,
        pro: false,  //this stays as a boolean
        mr: '',  //this gets value later ('messi' or 'ronaldo')
        favteam: "",
    })

    const handleChange = e => {
        const type = e.target.type

        const name = e.target.name

        // if target is checked absent, then uses target.value
        //hence why it works for radio button where checked char is missing
        const value = type === ( "checkbox" || "radio" )
            ? e.target.checked
            : e.target.value

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))

        console.log(data);
    }

    const { amateur, hs, acad, college, semipro, pro, ...requiredInputs } = data

    //next/prev/submit button data validation! 25:57

    const canSubmit = [...Object.values(requiredInputs)].every(Boolean) &&
     (data.amateur === true || data.hs === true || data.acad === true || data.college === true || data.semipro === true || data.pro === true) 
     && page === Object.keys(title).length - 1

    ///////////////////////////////////////////////////////////

    function keysFilled(keys) {  //keys --> ['amateur', 'hs', 'acad', 'college', 'semipro', 'pro']
        return Object.keys(data)   // ["name","amateur", "hs", etc]
            .filter(key => keys.includes(key))  // ['amateur', 'hs', 'acad', 'college', 'semipro', 'pro']
            .map(key => data[key]) // ['true', 'false', 'false','false','false','false']
            .some(Boolean) // true --> because one value is true
    }

    const disablePrev = page === 0

    // disables the next button until necessary values are entered (according to canNextPage1/2/3/etc)

    // const disableNext =
    //         (page === Object.keys(title).length - 1)
    //         || (page === 0 && !keysFilled(['name']))
    //         || (page === 1 && !keysFilled(['amateur', 'hs', 'acad', 'college', 'semipro', 'pro']))
    //         || (page === 2 && !keysFilled(['mr']))
    //         || (page === 3 && !keysFilled(['favteam']))
    
    const enableNext =
                (page === Object.keys(title).length - 1)
                || (page === 0 && keysFilled(['name']))
                || (page === 1 && keysFilled(['amateur', 'hs', 'acad', 'college', 'semipro', 'pro']))
                || (page === 2 && keysFilled(['mr']))
                || (page === 3 && keysFilled(['favteam']))

    const prevHide = page === 0 && "remove-button"
    
    const nextHide = page === Object.keys(title).length - 1 && "remove-button"
    
    const submitHide = page !== Object.keys(title).length - 1 && "remove-button"

    return(
        <FormContext.Provider value={{title, page, setPage, data, setData, canSubmit, handleChange, disablePrev, enableNext, prevHide, nextHide, submitHide}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext