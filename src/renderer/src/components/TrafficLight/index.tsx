import clsx from 'clsx'
import React from 'react'
import { isTrafficLightLeft, isTrafficLightRight } from '../../utils/system'

export const TrafficLight: React.FC = () => {
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
        'left-0': isTrafficLightLeft,
        'flex-row-reverse': isTrafficLightRight
      })}
    >
      <button className="w-3.5 h-3.5 bg-red-600 rounded-full" onClick={handleClose} />
      <button className="w-3.5 h-3.5 bg-yellow-600 rounded-full" onClick={handleMinimize} />
      <button className="w-3.5 h-3.5 bg-green-600 rounded-full" onClick={handleMaximize} />
    </div>
  )
}
