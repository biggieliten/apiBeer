const base_url: string = "https://api.punkapi.com/v2/beers ";

const wrapper = document.getElementById("wrapper") as HTMLDivElement

interface BeerKeys {
    id: number;
    name: string;
    tagline: string;
    abv: number;
    food_pairing: string[];
    ingredients: string | number[];
    image_url?: string;
    volume: number | string;
    brewers_tips: string;
    description: string;

}

async function fetchUserData(url: string) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`http error: ${response.status}`)
        }
        const beerData: BeerKeys[] = await response.json();
        showData(beerData);
    }

    catch (error) {
        console.error("Fetch error:", error);
        throw new Error("Unable to fetch user data");
    }
}

fetchUserData(base_url)





function showData(data) {
    data.forEach(beerInfo => {
        console.log(beerInfo.name);

		const beerElement = document.createElement("div");
		beerElement.textContent = `${beerInfo.name}`
		beerElement.classList.add("beer-" + beerInfo.id );

		wrapper.appendChild(beerElement)
    });


	// data.forEach(beerInfo => {
    //     console.log(beerInfo.name);

	// 	const beerElement = document.createElement("div");
	// 	beerElement.textContent = `${beerInfo.name} `
	// 	// const beerDesc = document.createElement("p");
	// 	// const beerAbv = document.createElement("p");
	// 	// const beerVol = document.createElement("p");
	// 	// const beerIngred = document.createElement("p");
	// 	// const beerHops = document.createElement("p");
	// 	// const beerPairing = document.createElement("p");
	// 	// const beerHops = document.createElement("p");
	// 	// const beerHops = document.createElement("p");
		

	// 	wrapper.appendChild(beerElement)


}


