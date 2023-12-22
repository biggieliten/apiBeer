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
    volume: any | number;
	value: number;
	unit: string;
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
		console.log(beerData);
    }
    catch (error) {
		console.error("Fetch error:", error);
        throw new Error("Unable to fetch user data");
    }
}

fetchUserData(base_url)

function showData(data: BeerKeys[]) {
    data.forEach(beerInfo => {
        // console.log(beerInfo.name);

        // skapa div element för varje ölsort
        const beerElement: HTMLDivElement = document.createElement("div");
        beerElement.setAttribute('id', `beer${beerInfo.id}`);

        // Skapa och lägg till en bild om tillgänglig
        if (beerInfo.image_url) {
            const imageElement: HTMLImageElement = document.createElement("img");
            imageElement.src = beerInfo.image_url;
            imageElement.alt = beerInfo.name;
			imageElement.classList.add("beerIMG-" + beerInfo.id);
            beerElement?.appendChild(imageElement);
        }
        // skapa h2 element för namn
        const nameElement: HTMLHeadingElement = document.createElement("h2");
        nameElement.textContent = beerInfo.name;
		nameElement.classList.add("name" + beerInfo.id);
        beerElement?.appendChild(nameElement);

        // Skapa och lägg till tagline

        const taglineElement: HTMLParagraphElement = document.createElement("p");
        taglineElement.textContent = `${beerInfo.tagline}`;
		taglineElement.classList.add("tagline" + beerInfo.id);
        beerElement?.appendChild(taglineElement);

        // Skapa och lägg till ABV (alkoholhalt per volymenhet)
        
        const abvElement: HTMLParagraphElement = document.createElement("p");
        abvElement.textContent = `Alcohol By Volume: ${beerInfo.abv}%`;
		abvElement.classList.add("abv" + beerInfo.id)
        beerElement?.appendChild(abvElement);

        // Skapa och lägg till beskrivningen

        const descriptionElement: HTMLParagraphElement = document.createElement("p");
        descriptionElement.textContent = beerInfo.description;
		descriptionElement.classList.add("description" + beerInfo.id);
        beerElement?.appendChild(descriptionElement);

        // Skapa och lägg till volymen
        const volumeElement: HTMLParagraphElement = document.createElement("p");
        volumeElement.textContent = `Volume: ${beerInfo.volume.value} ${beerInfo.volume.unit}`;
        // volumeElement.textContent = `Volume: ${beerInfo.volume[1]}`;
		volumeElement.classList.add("volume" + beerInfo.id);
        beerElement?.appendChild(volumeElement);

        const foodPairingElement: HTMLUListElement = document.createElement("ul");
        beerInfo.food_pairing.forEach(food => {
            const listItem: HTMLLIElement = document.createElement("li");
            listItem.textContent = food;
			foodPairingElement.classList.add("foodPairing" + beerInfo.id);
            foodPairingElement?.appendChild(listItem);
        });	
        beerElement?.appendChild(foodPairingElement);

        // Skapa och lägg till bryggarens tips
		const tipsElement: HTMLParagraphElement = document.createElement("p");
        tipsElement.textContent = `Brewer's Tips: ${beerInfo.brewers_tips}`;
		tipsElement.classList.add("tips" + beerInfo.id);
        beerElement?.appendChild(tipsElement);

        // Lägg till ölelementet i "wrapper"
        wrapper?.appendChild(beerElement);

		
    });
	randomize()
}



function randomize(): void{
	let randomizeBeerDivId: number = Math.floor(Math.random() * 25 + 1 );
	 
	let idCheck: string = `beer${randomizeBeerDivId}`;

	console.log(idCheck);

	let randomBeer:HTMLElement = document.getElementById(`beer${randomizeBeerDivId}`);

	console.log(randomBeer);
	if (randomBeer) {
		randomBeer.style.display = "flex"
	}

}

