"use strict"

var mp3_v2 = new Mp3();

function Mp3 () {
    this.currentStatus = "stop";

    this.play = function () {
        if (this.currentStatus === "stop") {
            this.currentStatus = "playing"; 
        }
    };
    this.pause = function () {
        if (this.currentStatus === "playing") {
            this.currentStatus = "stop"; 
        }
    };



    this.volume = 0;

    this.addVolume = function () {
        if (this.volume < 100) {
            this.volume = this.volume + 1;
        }
    };

    this.removeVolume = function () {
        if (this.volume > 0) {
            this.volume = this.volume - 1;
        }
    },



    this.nextSong = function () {

    },
    this.previousSong = function () {

    },


    this.playlist = [
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


