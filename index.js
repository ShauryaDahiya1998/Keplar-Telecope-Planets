const { parse } = require('csv-parse');
const fs = require('fs')

const results = [];

const isHabitablePlanet = (planet) => {
    return planet['koi_disposition'] === 'CONFIRMED';
}

fs.createReadStream('keplar_data.csv')
    .pipe(parse({
        comment: '#',
        columns: true
    }))
    .on('data', (data) => {
        if (isHabitablePlanet(data)) {
            results.push(data);
        }
        
    })
    .on('error', (err) => {
        console.log(err)
    })
    .on('end', () => {
        console.log(results);
        console.log("done");
    })

// parse(); 