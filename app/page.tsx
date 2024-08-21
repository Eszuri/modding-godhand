import GodHandDataTypes from "types/godHandDataTypes";
import Link from "next/link";
import { fetchDataGodHand } from "lib/fetchDataGodHand";

const Mapping = async ({ stage }: { stage: number }) => {
    const data: GodHandDataTypes = await fetchDataGodHand();
    return (
        <ul>
            {data
                .filter((x) => x.content.stage == stage)
                .map((x, index) => (<li className="list-decimal list-inside underline text-lg" key={index}><Link href={x.navigation.path} className="">{x.navigation.title}</Link></li>))}
        </ul>
    )
}

export default async function Page() {
    return (
        <section className="flex w-full flex-col justify-center">
            <h1 className="text-2xl text-center py-3">Modding God hand</h1>
            <div className="w-[95%] mr-auto ml-auto">
                <h1 className="opacity-70 tracking-widest">Stage 1</h1>
                <Mapping stage={1} />
            </div>
        </section>
    )
}
