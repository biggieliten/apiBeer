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

        const myButton: HTMLButtonElement = document.createElement("button");
        myButton.textContent = 'Randomize'
        myButton.classList.add('button')
        beerElement?.appendChild(myButton);
        if (myButton) {
            myButton.addEventListener("click", randomize);
        }

		const showMoreButton: HTMLButtonElement = document.createElement("button");
		showMoreButton.textContent = "Show more >";
		showMoreButton.classList.add('show-more-button')
		beerElement?.appendChild(showMoreButton);
		
		showMoreButton.addEventListener("click", showBeerData);


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


		/* function showBeerData(): void{
			taglineElement.style.display = "flex";
			abvElement.style.display = "flex";
			descriptionElement.style.display = "flex";
			volumeElement.style.display = "flex";
			foodPairingElement.style.display = "block";
			tipsElement.style.display = "flex";
			




		} */


    });
    randomize()
}





function randomize(): void {
    let randomizeBeerDivId: number = Math.floor(Math.random() * 25 + 1);
    let idCheck: string = `beer${randomizeBeerDivId}`;
    console.log(idCheck);

    // Göm alla öl-element
    const allBeerElements: NodeListOf<HTMLElement> = document.querySelectorAll('[id^="beer"]');
    allBeerElements.forEach(element => {
        element.style.display = "none";
    });

    // Visa den slumpade ölen
    let randomBeer: HTMLElement = document.getElementById(`beer${randomizeBeerDivId}`);
    console.log(randomBeer);
    if (randomBeer) {
        randomBeer.style.display = "flex";
    }
}

function showBeerData(event: Event): void {
    // Hämta den klickade knappen och dess närmaste ölcontainer
    const clickedButton = event.currentTarget as HTMLButtonElement;
    const beerId = clickedButton.dataset.beerId; // Anta att du har lagrat öl-ID:t som ett dataset-attribut på knappen

    // Dölj alla öl-element
    const allBeerElements: NodeListOf<HTMLElement> = document.querySelectorAll('.beer-container');
    allBeerElements.forEach(element => {
        element.style.display = "none";
    });

    // Visa det aktuella ölet
    const beerContainer = document.getElementById(`beer${beerId}`);
    if (beerContainer) {
        beerContainer.style.display = "flex";

        // Hämta det aktuella ölets detaljelement
        const taglineElement = document.getElementById(`tagline${beerId}`) as HTMLElement;
        const abvElement = document.getElementById(`abv${beerId}`) as HTMLElement;
        const descriptionElement = document.getElementById(`description${beerId}`) as HTMLElement;
        const volumeElement = document.getElementById(`volume${beerId}`) as HTMLElement;
        const foodPairingElement = document.getElementById(`foodPairing${beerId}`) as HTMLElement;
        const tipsElement = document.getElementById(`tips${beerId}`) as HTMLElement;

        // Nollställ de specifika detaljerna
        if (taglineElement && abvElement && descriptionElement && volumeElement && foodPairingElement && tipsElement) {
            taglineElement.style.display = "none";  // Ändra här till "none" för att dölja detaljerna
            abvElement.style.display = "none";
            descriptionElement.style.display = "none";
            volumeElement.style.display = "none";
            foodPairingElement.style.display = "none";
            tipsElement.style.display = "none";
        }

        // Visa de specifika detaljerna som du vill ha
        // taglineElement.style.display = "flex";
        // abvElement.style.display = "flex";
        // descriptionElement.style.display = "flex";
        // volumeElement.style.display = "flex";
        // foodPairingElement.style.display = "block";
        // tipsElement.style.display = "flex";
    }
}



