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
function fetchUserData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error(`http error: ${response.status}`);
            }
            const userData = yield response.json();
            console.log(userData);
        }
        catch (error) {
            console.error("Fetch error:", error);
            throw new Error("Unable to fetch user data");
        }
    });
}
let data = fetchUserData(base_url);
// async function getBeer(): Promise<void> {
//     try {
//         function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>
//         console.log(fetch);
//         if (fetch.status === 200) {
//             const data: Exempel[] = await fetch.json();
//             console.log(data);
//         } else {
//             throw Error('Något gick fel, försök igen senare');
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
// getBeer();
