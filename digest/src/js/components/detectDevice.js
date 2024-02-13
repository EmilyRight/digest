/// Detect device
import {UAParser} from "ua-parser-js";

export function detectDevice() {
    const deviceOs = getMobileOs();
    document.querySelector('body').classList.add(`platform_${deviceOs}`);

    let appLink = {}, appLinkHrf;
    appLink.ios='https://redirect.appmetrica.yandex.com/serve/315401363163010541';
    appLink.android='https://redirect.appmetrica.yandex.com/serve/388180713033187193';
    appLink.huawei= 'https://redirect.appmetrica.yandex.com/serve/244065662866049837';

    appLinkHrf = appLink.android;
    if (deviceOs === 'ios') appLinkHrf = appLink.ios;
    if (deviceOs === 'huawei') appLinkHrf = appLink.huawei;
}
// detect iOS
const isIOS = () => getMobileOs() === 'ios';

const getMobileOs = () => {
    const userAgent = navigator.platform || navigator.vendor || window.opera;
    const parser = new UAParser();
    // console.log(parser.getDevice().type);
    // console.warn(navigator.vendor + '|| ' + navigator.vendorSub);

    if (parser.getDevice().vendor === 'Huawei') { return 'huawei'; }
    if (/android/i.test(userAgent)) { return 'android'; }
    if (parser.getDevice().vendor === 'Apple') {
        return 'ios';
    }
    return 'unknown';
};
