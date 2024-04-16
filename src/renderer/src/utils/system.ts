export const isMacOS = process.platform === 'darwin'

export const trafficLightPosition = isMacOS ? 'left' : 'right'

export const isTrafficLightRight = trafficLightPosition === 'right'

export const isTrafficLightLeft = trafficLightPosition === 'left'
