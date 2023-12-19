const base_url :string = "https://api.punkapi.com/v2/beers ";

async function fetchUserData(url: string) {
    try {
const response = await fetch(url);
if(!response.ok){
    throw new Error(`http error: ${response.status}`)
}
const userData = await response.json();
console.log(userData);

}

catch (error) {
        console.error("Fetch error:", error);
        throw new Error("Unable to fetch user data");

    }
	
}

let data: Promise<any> = fetchUserData(base_url)




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

