/* CHART 1 - AÑO Y TÍTULOS */

fetch("https://swapi.dev/api/films/?format=json")
    .then(films => films.json())
    .then(film => {

        const element = [];
        const year = [];
        for (let i = 0; i < film.results.length; i++) {

            element.push(film.results[i].title);
            year.push(film.results[i].release_date.slice(0,4));

            
        };
        // console.log(element);
        //console.log(year);



        console.log(element);
        new Chartist.Line('.ct-chart1', {
            labels: element,
            series: [ 
                year 
            ]
          }, {
            fullWidth: true,
            width: '100%',
            height: '200%',
            chartPadding: {
              //left: 40
            }
        });
    });



/* CHART 2 - AÑO Y TÍTULOS */
fetch("https://swapi.dev/api/people/?format=json")
    .then(people => people.json())
    .then(person => {

        const characters = []; // nombre de personajes
        const movies = []; // número de pelis en las que aparece
        for (let i = 0; i < person.results.length; i++) {

            characters.push(person.results[i].name);
            movies.push(person.results[i].films.length);

            
        };
        // console.log(characters);
        // console.log(movies);

        new Chartist.Line('.ct-chart2', {
            labels: characters,
            series: [ 
                movies 
            ]
          }, {
            fullWidth: true,
            width: '100%',
            height: '200%',
            chartMargin: {
                top: 500
            },
            chartPadding: {
            //left: 40,

            }
        });
    });

        







