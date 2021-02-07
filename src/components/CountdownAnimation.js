import React, { useContext } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { SettingContext } from '../context/SettingsContext'



const CountdownAnimation = ({key, timer, animate, children}) => {

    const {stopTimer} = useContext(SettingContext)

    return (
        <CountdownCircleTimer 
            key={key} 
            isPlaying={animate} 
            duration={timer * 60} 
            colors={[
                ['#006400', 0.75],
                ['#f4a460', 0.125],
                ['#8b0000', 0.125]
            ]} 
            strokeWidth={6}
            size={220}
            trailColor="#151932" 
            onComplete={() => {
                stopTimer()
            }}
        >
            {children}
        </CountdownCircleTimer>
    )
}

export default CountdownAnimation
