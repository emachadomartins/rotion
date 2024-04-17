export const isMacOS = process.platform === 'darwin'

export const systemTrafficLightPosition = isMacOS ? 'left' : 'right'

export const isTrafficLightRight = systemTrafficLightPosition === 'right'

export const isTrafficLightLeft = systemTrafficLightPosition === 'left'
