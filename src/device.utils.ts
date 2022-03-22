// Garrett Flynn, March 22 2022
import Ganglion from './ganglion.js';


// ---------- Additional Info ----------
// this.info.sps = 200;
// this.info.deviceType = 'eeg';

// info.eegChannelTags = [
//     {ch: 0, tag: "FP1", analyze:true},
//     {ch: 1, tag: "FP2", analyze:true},
//     {ch: 2, tag: "C3",  analyze:true},
//     {ch: 3, tag: "C4",  analyze:true}
// ];

// ---------- Pre-Declared Device Class ----------
export const device = Ganglion

// ---------- After Ganglion Connection ----------
export const onconnect = async (dataDevice: any) => {

    let device = dataDevice.device
    await device.start()

    device.stream.subscribe((o:any) => {
        // let latest: any[] = [,,,]
        // latest[o.electrode] = o.samples
        // Timestamps: o.timestamp
        dataDevice.ondata(o.data)
    })
}