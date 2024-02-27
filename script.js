const mcuShows = [`Loki`, `Moon Knight`];
const starWarsShows = [`The Mandalorian`, `Book of Boba Fett`];
const disneyPlusShows = [mcuShows, starWarsShows, `The Beatles: Get Back`];
console.log(disneyPlusShows);
const netflixMovies = {action:"extraction", crime:"Irishman"};
const amazonPrimeMovies = {action:"The Tomorrow War", drama:"One Night In Miami"};
const streamingMovies = {...netflixMovies, ...amazonPrimeMovies, musical:"Hamilton"};
console.log(streamingMovies);
const disneyJr = [`Mickey Mouse Clubhouse`, `Spidey and His Amazing Friends`];
const [mickey, Spidey] = disneyJr;
console.log(disneyJr);
const avengers = {warMachine:"James Rhodes", theHulk:"Bruce Banner"};
const {war, hulk} = avengers;
console.log(avengers);
const moreAvengers = {blackWidow:"Natasha Romanoff", hawkeye:"Clint Barton", ironMan:"Tony Stark"};
const {nat, ...others} = moreAvengers
console.log(moreAvengers);