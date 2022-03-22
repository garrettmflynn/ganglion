import * as ganglion from './device.utils'

export const device =  {
    // Generic 
    label: 'Ganglion', 
    device: ganglion.device,
    onconnect: ganglion.onconnect,
    protocols: ['bluetooth'],
}

export default device