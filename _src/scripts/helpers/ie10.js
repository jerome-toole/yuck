export default function ie10() {
    if (navigator.appVersion.indexOf('MSIE 10') !== -1) {
        return true;
    }

    return false;
}
