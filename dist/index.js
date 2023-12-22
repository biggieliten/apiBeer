var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const base_url = "https://api.punkapi.com/v2/beers ";
const wrapper = document.getElementById("wrapper");
function fetchUserData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error(`http error: ${response.status}`);
            }
            const beerData = yield response.json();
            showData(beerData);
            console.log(beerData);
        }
        catch (error) {
            console.error("Fetch error:", error);
            throw new Error("Unable to fetch user data");
        }
    });
}
fetchUserData(base_url);
function showData(data) {
    data.forEach(beerInfo => {
        // console.log(beerInfo.name);
        // skapa div element för varje ölsort
        const beerElement = document.createElement("div");
        beerElement.setAttribute('id', `beer${beerInfo.id}`);
        const myButton = document.createElement("button");
        myButton.textContent = 'Randomize';
        myButton.classList.add('button');
        beerElement === null || beerElement === void 0 ? void 0 : beerElement.appendChild(myButton);
        if (myButton) {
            myButton.addEventListener("click", randomize);
        }
        const showMoreButton = document.createElement("button");
        showMoreButton.textContent = "Show more >";
        showMoreButton.classList.add('show-more-button');
        beerElement === null || beerElement === void 0 ? void 0 : beerElement.appendChild(showMoreButton);
        showMoreButton.addEventListener("click", showBeerData);
        // Skapa och lägg till en bild om tillgänglig
        if (beerInfo.image_url) {
            const imageElement = document.createElement("img");
            imageElement.src = beerInfo.image_url;
            imageElement.alt = beerInfo.name;
            imageElement.classList.add("beerIMG-" + beerInfo.id);
            beerElement === null || beerElement === void 0 ? void 0 : beerElement.appendChild(imageElement);
        }
        // skapa h2 element för namn
        const nameElement = document.createElement("h2");
        nameElement.textContent = beerInfo.name;
        nameElement.classList.add("name" + beerInfo.id);
        beerElement === null || beerElement === void 0 ? void 0 : beerElement.appendChild(nameElement);
        // Skapa och lägg till tagline
        const taglineElement = document.createElement("p");
        taglineElement.textContent = `${beerInfo.tagline}`;
        taglineElement.classList.add("tagline" + beerInfo.id);
        beerElement === null || beerElement === void 0 ? void 0 : beerElement.appendChild(taglineElement);
        // Skapa och lägg till ABV (alkoholhalt per volymenhet)
        const abvElement = document.createElement("p");
        abvElement.textContent = `Alcohol By Volume: ${beerInfo.abv}%`;
        abvElement.classList.add("abv" + beerInfo.id);
        beerElement === null || beerElement === void 0 ? void 0 : beerElement.appendChild(abvElement);
        // Skapa och lägg till beskrivningen
        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = beerInfo.description;
        descriptionElement.classList.add("description" + beerInfo.id);
        beerElement === null || beerElement === void 0 ? void 0 : beerElement.appendChild(descriptionElement);
        // Skapa och lägg till volymen
        const volumeElement = document.createElement("p");
        volumeElement.textContent = `Volume: ${beerInfo.volume.value} ${beerInfo.volume.unit}`;
        // volumeElement.textContent = `Volume: ${beerInfo.volume[1]}`;
        volumeElement.classList.add("volume" + beerInfo.id);
        beerElement === null || beerElement === void 0 ? void 0 : beerElement.appendChild(volumeElement);
        const foodPairingElement = document.createElement("ul");
        beerInfo.food_pairing.forEach(food => {
            const listItem = document.createElement("li");
            listItem.textContent = food;
            foodPairingElement.classList.add("foodPairing" + beerInfo.id);
            foodPairingElement === null || foodPairingElement === void 0 ? void 0 : foodPairingElement.appendChild(listItem);
        });
        beerElement === null || beerElement === void 0 ? void 0 : beerElement.appendChild(foodPairingElement);
        // Skapa och lägg till bryggarens tips
        const tipsElement = document.createElement("p");
        tipsElement.textContent = `Brewer's Tips: ${beerInfo.brewers_tips}`;
        tipsElement.classList.add("tips" + beerInfo.id);
        beerElement === null || beerElement === void 0 ? void 0 : beerElement.appendChild(tipsElement);
        // Lägg till ölelementet i "wrapper"
        wrapper === null || wrapper === void 0 ? void 0 : wrapper.appendChild(beerElement);
        function showBeerData() {
            taglineElement.style.display = "flex";
            abvElement.style.display = "flex";
            descriptionElement.style.display = "flex";
            volumeElement.style.display = "flex";
            foodPairingElement.style.display = "block";
            tipsElement.style.display = "flex";
        }
    });
    randomize();
}
function randomize() {
    let randomizeBeerDivId = Math.floor(Math.random() * 25 + 1);
    let idCheck = `beer${randomizeBeerDivId}`;
    console.log(idCheck);
    // Göm alla öl-element
    const allBeerElements = document.querySelectorAll('[id^="beer"]');
    allBeerElements.forEach(element => {
        element.style.display = "none";
    });
    // Visa den slumpade ölen
    let randomBeer = document.getElementById(`beer${randomizeBeerDivId}`);
    console.log(randomBeer);
    if (randomBeer) {
        randomBeer.style.display = "flex";
    }
}
