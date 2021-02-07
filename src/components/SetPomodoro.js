import React, {useContext, useState} from 'react'
import { SettingContext } from '../context/SettingsContext'
import Button from './Button'

const SetPomodoro = () => {

    const {updateExecute} = useContext(SettingContext)

    const [newTimer, setNewTimer] = useState({
        work: 0.3,
        short: 0.2,
        long: 1,
        active: 'work'
    })

    const handleChange = input => {
        const {name, value} = input.target;
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseFloat(value)
                })
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseFloat(value)
                })
                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseFloat(value)
                })
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateExecute(newTimer);
    }

    return (
        <div className="form-container">
            <form noValidate>
                <div className="input-wrapper">
                    <input className="input" type="number" step="any" name="work" onChange={handleChange} value={newTimer.work} />
                    <input className="input" type="number" step="any" name="shortBreak" onChange={handleChange} value={newTimer.short} />
                    <input className="input" type="number" step="any" name="longBreak" onChange={handleChange} value={newTimer.long} />
                </div>
                <Button title="Set Timer" _callback={handleSubmit} />
            </form>
        </div>
    )
}

export default SetPomodoro
