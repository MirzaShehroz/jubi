export const sliceMessage = (message) => {
    if (message.length > 0) {
        if (message.length >= 20) {
            return message.slice(0, 20) + '....';
        } else {
            return message;
        }
    } else {
        return null;
    }
}
