// Derived from https://github.com/urish/muse-js
// Garrett Flynn, November 13 2021
import * as musejs from 'muse-js';

// Pre-Declared Device Class
export const device = musejs.MuseClient

// After Device Connect
export const onconnect = async (dataDevice: any) => {

    let device = dataDevice.device
    await device.start()

    device.eegReadings.subscribe((o:any) => {
        let latest: any[] = [,,,]
        latest[o.electrode] = o.samples
        dataDevice.ondata(latest)
    })
}