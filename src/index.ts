const url:string = "https://api.punkapi.com/v2/beers ";

async function fetchUserData(url: string): Promise<User []> {
    try {
const response = await fetch(url);
if(!response.ok){
    throw new Error(`http error: ${response.status}`)
}
const userData: User[] = await response.json();
return userData
} catch (error) {
        console.error("Fetch error:", error);
        throw new Error("Unable to fetch user data");

    }
}

console.log(BASE_URL);

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

