"use client"
import H1MapClientComponent from "components/text/H1MapClientComponent";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import GodHandDataTypes from "types/godHandDataTypes";
import CloudinaryMap from "./CloudinaryMap";
import DAT_Icon from "assets/icons/datfile";
import MetadataState from "store/metadataStore";
import { Titillium_Web } from "next/font/google";

const amaranth = Titillium_Web({ subsets: ["latin"], weight: "700" });

export default function MapClientComponent({
    godhandData,
    cloudinaryDataPlaceMod,
    cloudinaryDataModdings,
    cloudinaryDataFileMod,
    cloudinaryDataFileBackup,
}:
    {
        godhandData: GodHandDataTypes,
        cloudinaryDataPlaceMod: any,
        cloudinaryDataModdings: any
        cloudinaryDataFileMod: any
        cloudinaryDataFileBackup: any
    }) {
    const { title, setTitle, setDescription } = MetadataState()
    const router = useRouter();
    const [FinishLoad, setFinishLoad] = useState(true);
    const filename = godhandData.map((x) => { return x.content.filename });
    const sizeFileMod = cloudinaryDataFileMod.sizeFile / 1024;
    const sizeFileModINMB = sizeFileMod / 1024;
    const sizeFileBackup = cloudinaryDataFileBackup.sizeFile / 1024;
    const sizeFileBackupINMB = sizeFileBackup / 1024;
    const createdDateMOD = JSON.stringify(cloudinaryDataFileMod.createdDate).slice(2, 12);
    const createdDateBACKUP = JSON.stringify(cloudinaryDataFileBackup.createdDate).slice(2, 12);
    const metadataTitle: any = godhandData.map((x) => { return x.navigation.title })
    const metadataDescription: any = godhandData.map((x) => { return x.navigation.description })

    useEffect(() => {
        setTitle("metadataTitle")
        setDescription(metadataDescription)
        const isValidPath = godhandData.some((x) => x.navigation.path === window.location.pathname);
        if (!isValidPath) {
            router.push('/404');
        } else {
            setFinishLoad(false);
        }
    }, [godhandData]);


    const DownloadComponent = ({ text, cloud, date, size, namefile }: { text: string, cloud: any, date: any, size: any, namefile: any }) => {
        return (
            <div className="grid w-36 gap-3 overflow-visible"><div className="flex justify-start gap-2 items-center"><div className="overflow-visible max-w-[85px] min-w-[85px]"><span className={`mt-5 mb-3 inline-block text-nowrap ${amaranth.className}`}>{text}</span><DAT_Icon className="w-24 flex justify-start -ml-3" /><span>{namefile}</span></div><div className="flex flex-col justify-start text-nowrap"><span>size: {size}</span><span>Created: {date}</span></div></div>{cloud.data.map((x: any, index: number) => { const downloadFile = async () => { const response = await fetch(x); const blob = await response.blob(); const link = document.createElement('a'); link.href = window.URL.createObjectURL(blob); link.download = `${namefile}`; link.click(); }; return (<button onClick={downloadFile} key={index} className="w-full bg-gradient-to-b from-cyan-800 to-sky-800 rounded hover:scale-[0.98] h-10 flex justify-center items-center">DOWNLOAD</button>); })}</div>
        )
    }

    return (
        <section className="w-[95%] mr-auto ml-auto mt-10" style={{ display: FinishLoad ? "none" : "block" }}>
            <div className="mb-32">
                <H1MapClientComponent>Tempat Yg Di Mod {title}</H1MapClientComponent>
                <ul>
                    {godhandData.map((item, index) => (
                        item.content.location.map((loc, locIndex) => (
                            <li key={`${index}-${locIndex}`} className="list-disc list-inside">{loc}</li>
                        ))
                    ))}
                </ul>
                <CloudinaryMap cloudinaryData={cloudinaryDataPlaceMod} />
            </div>
            <div className="mb-32">
                <H1MapClientComponent>Apa Saja Yg Di Mod</H1MapClientComponent>
                <ul>
                    {godhandData.map((item, index) => (
                        item.content.moddings.map((loc, locIndex) => (
                            <li key={`${index}-${locIndex}`} className="list-disc list-inside">{loc}</li>
                        ))
                    ))}
                </ul>
                <CloudinaryMap cloudinaryData={cloudinaryDataModdings} />
            </div>
            <div className="mb-32">
                <H1MapClientComponent>Link Download</H1MapClientComponent>
                <div className="flex w-full flex-wrap">
                    <div className="w-1/2 max-[600px]:w-full max-[600px]:border-b-2 max-[600px]:mb-7 max-[600px]:pb-10">
                        <DownloadComponent text="file mod" cloud={cloudinaryDataFileMod} date={createdDateMOD} size={sizeFileMod > 1024 ? sizeFileModINMB.toFixed(2) + " mb" : sizeFileMod.toFixed(2) + " kb"} namefile={filename} />
                    </div>
                    <div className="w-1/2 max-[600px]:w-full">
                        <DownloadComponent text="file backup / original" cloud={cloudinaryDataFileBackup} date={createdDateBACKUP} size={sizeFileBackup > 1024 ? sizeFileBackupINMB.toFixed(2) + " mb" : sizeFileBackup.toFixed(2) + " kb"} namefile={filename + '.backup'} />
                    </div>
                </div>
            </div>
        </section>
    );
}
