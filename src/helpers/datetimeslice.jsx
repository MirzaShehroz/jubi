export const dateTimeSlice1 = (item) => {
    const dateTime_ = new Date();
    const arrMonths = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const fullDate = item.ChatMessages.slice(-1).map(i => i.created_at.slice(0, 10));
    const time_ = item.ChatMessages.slice(-1).map(i => i.created_at.slice(11, 16));
    const dateLength = fullDate.map(item => item.length);
    if (dateLength > 0) {
        const month = fullDate.map(item => item.slice(5, 7));
        const date = fullDate.map(item => item.slice(8, 10));
        if (parseInt(date) === dateTime_.getDate()) {
            return time_+' today';
        } else {
            return (arrMonths[parseInt(month - 1)] + ' ' + date);
        }
    }
}

export const dateTimeSlice2 = (item) => {
    const dateTime_ = new Date();
    const arrMonths = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const fullDate = item.slice(0, 10);
    const time_ = item.slice(11, 16);
    const month = fullDate.slice(5, 7);
    const date = fullDate.slice(8, 10);
    if (fullDate.length > 0) {
        if (parseInt(date) === dateTime_.getDate()) {
            return time_;
        } else {
            return (arrMonths[parseInt(month - 1)] + ' ' + date + ' ' + time_);
        }
    }
}