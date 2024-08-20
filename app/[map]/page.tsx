import { metadata } from "app/layout";
import MapClientComponent from "components/map/mapClientComponent";
import { fetchDataGodHand } from "lib/fetchDataGodHand";
import { fetchDataUrlCloudinary } from "lib/fetchDataUrlCloudinary";
import GodHandDataTypes from "types/godHandDataTypes";

export default async function MapPage({ params }: { params: { map: string } }) {
    const data: GodHandDataTypes = await fetchDataGodHand();
    const filter = data.filter((x) => x.navigation.path == "/" + params.map)
    const place = await fetchDataUrlCloudinary(params.map, 'place mod');
    const modddings = await fetchDataUrlCloudinary(params.map, 'moddings');
    const fileMOD = await fetchDataUrlCloudinary(params.map, 'file mod');
    const fileBACKUP = await fetchDataUrlCloudinary(params.map, 'file backup');
    return (
        <>
            <MapClientComponent
                godhandData={filter}
                cloudinaryDataPlaceMod={place}
                cloudinaryDataModdings={modddings}
                cloudinaryDataFileBackup={fileBACKUP}
                cloudinaryDataFileMod={fileMOD}
            />
        </>
    )
}