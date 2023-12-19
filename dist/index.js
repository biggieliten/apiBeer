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
        console.log(beerInfo.name);
        const beerElement = document.createElement("div");
        beerElement.textContent = `${beerInfo.name}`;
        beerElement.classList.add("beer-" + beerInfo.id);
        wrapper.appendChild(beerElement);
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
