import { useContext, useEffect } from "react";
import CountdownAnimation from "./components/CountdownAnimation";
import SetPomodoro from "./components/SetPomodoro";
import { SettingContext } from "./context/SettingsContext";
import Button from "./components/Button"

function App() {
  const {pomodoro, executing, setCurrentTimer, SettingsBtn, children, startAnimate, startTimer, pauseTimer, updateExecute} = useContext(SettingContext);

  useEffect(() => updateExecute(executing), [executing, startAnimate])

  return (
    <div className="container">
      <h1>Pomodoro</h1>
        {pomodoro == 0 ?
          <SetPomodoro /> :
          <>
            <ul className="labels">
              <li>
                <Button 
                  title="Work"
                  activeClass={executing.active === 'work' ? 'active-label' : undefined}
                  _callback={() => setCurrentTimer('work')}
                />
              </li>
              <li>
                <Button 
                  title="Short Break"
                  activeClass={executing.active === 'shortBreak' ? 'active-label' : undefined}
                  _callback={() => setCurrentTimer('shortBreak')}
                />
              </li>
              <li>
                <Button 
                  title="Long Break"
                  activeClass={executing.active === 'longBreak' ? 'active-label' : undefined}
                  _callback={() => setCurrentTimer('longBreak')}
                />
              </li>
            </ul>
            <Button title="Settings" _callback={SettingsBtn} />
            <div className="time-container">
              <div className="time-wrapper">
                <CountdownAnimation
                  key={pomodoro}
                  timer={pomodoro}
                  animate={startAnimate}
                >
                  {children}
                </CountdownAnimation>
              </div>
            </div>
            <div className="button-wrapper">
              <Button title="Start" activeClass={!startAnimate ? 'active' : undefined} _callback={startTimer} />
              <Button title="Pause" activeClass={startAnimate ? 'active' : undefined} _callback={pauseTimer} />
            </div>
          </>
        }
    </div>
  );
}

export default App;
