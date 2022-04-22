export const convertAudioStatus = (status, position) => {
    if (status === null) {
        return '00:00 / 00:18';
    }

    const value = Math.ceil(position / 1000);

    return '00:' + ('0' + value).slice(-2) + ' / 00:18';
};

export const convertTimerStatus = (time) => {
    const date = new Date(time);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    const milliSeconds = ('0' + (parseInt(date.getMilliseconds() / 10))).slice(-2);

    return `${minutes}:${seconds}:${milliSeconds}`;
}