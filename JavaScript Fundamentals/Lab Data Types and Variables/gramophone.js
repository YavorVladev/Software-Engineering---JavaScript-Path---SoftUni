function solve(BandName, AlbumName, SongName) {

    let song_duration = (AlbumName.length * BandName.length) * SongName.length / 2;
    const OneRotationTime = 2.5;
    let TotalRotations = song_duration / OneRotationTime;
    console.log(`The plate was rotated ${Math.ceil(TotalRotations)} times.`)
}

solve('Rammstein', 'Sehnsucht', 'Engel')