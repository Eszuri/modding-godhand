import ConnectCloudinary from "lib/cloudinary";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const body = await request.json();
    const path = `god hand modding/${body.low}/${body.middle}`;
    try {
        const result = await ConnectCloudinary.api.resources_by_asset_folder(path);
        const secureUrls = result.resources.map((resource) => resource.secure_url);
        const sizeFile = result.resources.map((resource) => resource.bytes);
        const createdDate = result.resources.map((resource) => resource.created_at);
        return NextResponse.json({ data: secureUrls, sizeFile: sizeFile, createdDate: createdDate });
    } catch (error) {
        // console.log('errrrrrrrror is:' + JSON.stringify(error))
        return NextResponse.json({ data: 'Failed to fetch images:' + error });
    }
};

// fetch this api
export async function fetchDataUrlCloudinary(lowerFolder: any, middleFolder: any) {
    const res = await fetch(`http://localhost:3000/api/cloudinary`, { cache: "no-cache", method: "POST", body: JSON.stringify({ low: lowerFolder, middle: middleFolder }) });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
}
