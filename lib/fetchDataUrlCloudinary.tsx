// fetch this api
export async function fetchDataUrlCloudinary(lowerFolder: any, middleFolder: any) {
    const res = await fetch(`http://localhost:3000/api/cloudinary`, { cache: "no-cache", method: "POST", body: JSON.stringify({ low: lowerFolder, middle: middleFolder }) });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
}
