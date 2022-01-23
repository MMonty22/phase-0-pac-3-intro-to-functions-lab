function shout(string) {
    return string.toUpperCase();
}
"Hello".toUpperCase();

function whisper(string) {
    return string.toLowerCase();
}
"Hello".toLowerCase();

function logShout(string) {
    console.log("Hello".toUpperCase());
}
logShout.toUpperCase();

function logWhisper(string) {
    console.log("Hello".toLowerCase());
}
logWhisper.toLowerCase();

function sayHiToHeadphonedRoommate(string){
    if(string === string.toLowerCase()){
        return "I can't hear you!"
    }
    else if(string === string.toUpperCase()){
        return "YES INDEED!"
    }
    else if(string === "Let's have dinner together!"){
        return "I would love to!"
    }
}