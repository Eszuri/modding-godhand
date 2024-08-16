import { fetchDataGodHand } from "app/api/route";
import GodHandDataTypes from "types/godHandDataTypes";

export default async function MapPage({ params }: { params: { map: string } }) {
    const data: GodHandDataTypes = await fetchDataGodHand()
    return (
        <section className="flex w-full flex-col justify-center">
            {data.
                filter((x) => x.navigation.path == "/" + params.map)
                .map((x, index) => (
                    <section key={index}>
                        <p>{x.content.location}</p>
                    </section>
                ))
            }
        </section>
    )
}
