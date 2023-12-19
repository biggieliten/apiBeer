const base_url :string = "https://api.punkapi.com/v2/beers ";

interface BeerKeys {
    id: number;
    name: string;
    tagline: string;
    abv: number;
    food_pairing: string[];
    ingredients: string | number [];
    image_url?: string;
    volume: number | string;
    brewers_tips: string;
    description: string;

}
/* const users: User[] = [] */
/* const user1: User = {
    id:
    name: string;
    tagline: string;
    abv: number;
    food_pairing: string[];
    ingredients: string | number [];
    image_url?: string;
    volume: number | string;
    brewers_tips: string;
    description: string;
} */

async function fetchUserData(url: string) {
    try {
const response = await fetch(url);
if(!response.ok){
    throw new Error(`http error: ${response.status}`)
}
const userData: BeerKeys[] = await response.json();
showData(userData);

}

catch (error) {
        console.error("Fetch error:", error);
        throw new Error("Unable to fetch user data");

    }
	
}

fetchUserData(base_url)

function showData(data){
    data.forEach(beerInfo => {
        console.log(beerInfo.name);
    });
}


