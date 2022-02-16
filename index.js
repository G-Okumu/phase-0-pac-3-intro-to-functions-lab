function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    const myString = "Let's have dinner together!";

    if (string === myString) {
        return "I would love to!";
    } else if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else if (string.toUpperCase) {
        return "YES INDEED!";
    }


}
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));