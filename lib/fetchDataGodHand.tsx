// fetch this api
export async function fetchDataGodHand() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { cache: "no-store" });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return JSON.parse(data.data);
    // data sort 1 = variable data
    // data sort 2 = api json response 
    // data sort 3 = json file on folder 'data' 
}