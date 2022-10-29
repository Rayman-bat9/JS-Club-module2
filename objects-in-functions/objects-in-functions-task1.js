"use strict"
var mp3 = function () {
    return {
        currentStatus: "stop",

        play: function () {
            if (this.currentStatus === "stop") {
                this.currentStatus = "playing"; 
            }
        },
        pause: function () {
            if (this.currentStatus === "playing") {
                this.currentStatus = "stop"; 
            }
        },



        volume: 0,

        addVolume: function () {
            if (this.volume < 100) {
                this.volume = this.volume + 1;
            }
        },
        removeVolume: function () {
            if (this.volume > 0) {
                this.volume = this.volume - 1;
            }
        },



        nextSong: function () {

        },
        previousSong: function () {

        },


        playlist: [
            {
                name: "Smells Like Teen Spirit",
                artist: "Nirvana",
                duration: 301,
            },{
                name: "Why Not",
                artist: "Ghostface Playa",
                duration: 165,
            },{
                name: "White Noise",
                artist: "Istasha",
                duration: 124,
            },

        ]
    }
}