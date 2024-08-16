// app/api/data/route.js

import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET() {
    // Construct the file path
    const filePath = path.join(process.cwd(), 'data', 'godHandData.json');
    try {
        // Read the file synchronously
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(jsonData);
        return NextResponse.json({ data: JSON.stringify(data) });
    } catch (error) {
        return NextResponse.json({ data: "failed get data json:" + error });
    }
}

// fetch this api
export async function fetchDataGodHand() {
    const res = await fetch(`http://localhost:3000/api`, { cache: "no-store" });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return JSON.parse(data.data);
    // data sort 1 = variable data
    // data sort 2 = api json response 
    // data sort 3 = json file on folder 'data' 
}
