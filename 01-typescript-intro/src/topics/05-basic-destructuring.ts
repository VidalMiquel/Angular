//OBJEC DESTRUCTRE
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
};

const song = 'Cada Nit';
// Audio player destructure
const { song:anotherSong } = audioPlayer;

//console.log('Song:', song);
//console.log('Song:', anotherSong);

//Details destructure
const {details: authorDetails} = audioPlayer;
const {author: authorName} = authorDetails;

//console.log('Author: ', authorName);
export{}

//ARRAY DESTRUCTURE

//const dbz: string [] = ["Goku", "Vegeta", "Trunk"];
const [p1,p2,trunks]: string [] = ["Goku", "Vegeta", "Trunk"];
console.log('Character :', p1 || 'There is not a character');


