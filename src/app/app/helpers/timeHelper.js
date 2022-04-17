export const convertAudioStatus = (status, position) => {
    if (status === null) {
        return '00:00 / 00:18';
    }

    const value = Math.ceil(position / 1000);

    return '00:' + ('0' + value).slice(-2) + ' / 00:18';
};

export const convertTimerStatus = (time) => {
    let text = ('0' + Math.floor((time / 60000) % 60)).slice(-2);
    text += ':';
    text += ('0' + Math.floor((time / 1000) % 60)).slice(-2);
    text += ':';
    text += ('0' + (time / 10) % 1000).slice(-2);

    return text;
}