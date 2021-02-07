import React, {createContext, useState} from 'react'

export const SettingContext = createContext();

const SettingsContextProvider = (props) => {

    const [pomodoro, setPomodoro] = useState(0)
    const [executing, setExecuting] = useState({})
    const [startAnimate, setStartAnimate] = useState(false);

    function setCurrentTimer(active_state){
        updateExecute({
            ...executing,
            active: active_state
        })
        setTimerTime(executing)
    }

    function startTimer(){
        setStartAnimate(true);
    }

    function pauseTimer(){
        setStartAnimate(false);
    }

    function stopTimer(){
        setStartAnimate(false);
    }

    const SettingsBtn = () => {
        setExecuting({})
        setPomodoro(0)
    }

    const updateExecute = updatedSettings => {
        setExecuting(updatedSettings)
        setTimerTime(updatedSettings)
    }

    const setTimerTime = evaluate => {
        switch (evaluate.active) {
            case 'work':
                setPomodoro(evaluate.work)                
                break;
            case 'shortBreak':
                setPomodoro(evaluate.short)
                break;
            case 'longBreak':
                setPomodoro(evaluate.long)
                break;
            default:
                setPomodoro(0)
                break;
        }
    }

    const children = ({remainingTime}) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60

        return `${minutes}:${seconds}`
    }

    return (
        <SettingContext.Provider 
        value={{
            stopTimer, 
            updateExecute,
            pomodoro,
            executing,
            startAnimate,
            startTimer,
            pauseTimer,
            SettingsBtn,
            setCurrentTimer,
            children
            }}>
            {props.children}
        </SettingContext.Provider>
    )
}

export default SettingsContextProvider
