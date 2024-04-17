import clsx from 'clsx'
import React from 'react'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

interface TrafficLightProps {
  onChangePosition: (position: 'left' | 'right') => void
  position: 'left' | 'right'
}

export const TrafficLight: React.FC<TrafficLightProps> = ({ onChangePosition, position }) => {
  const isTrafficLightRight = position === 'right'

  const handleClose = (): void => {
    window.api.closeApp()
  }
  const handleMaximize = (): void => {
    window.api.maximize()
  }
  const handleMinimize = (): void => {
    window.api.minimize()
  }

  return (
    <div
      className={clsx('absolute flex p-5 gap-2', {
        'right-0': isTrafficLightRight,
        'left-0': !isTrafficLightRight,
        'flex-row-reverse': isTrafficLightRight
      })}
    >
      <button className="w-3.5 h-3.5 bg-red-600 rounded-full" onClick={handleClose} />
      <button className="w-3.5 h-3.5 bg-yellow-600 rounded-full" onClick={handleMinimize} />
      <button className="w-3.5 h-3.5 bg-green-600 rounded-full" onClick={handleMaximize} />
      {position === 'right' ? (
        <button onClick={() => onChangePosition('left')}>
          <ArrowLeft className="h-4 w-4" />
        </button>
      ) : (
        <button onClick={() => onChangePosition('right')}>
          <ArrowRight className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
