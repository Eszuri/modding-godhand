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
        const version = result.resources.map((resource) => resource.version);
        const public_id = result.resources.map((resource) => resource.public_id);
        return NextResponse.json({ data: secureUrls, sizeFile: sizeFile, createdDate: createdDate, public_id: public_id, version: version });
    } catch (error) {
        // console.log('errrrrrrrror is:' + JSON.stringify(error))
        return NextResponse.json({ data: 'Failed to fetch images:' + error });
    }
};
