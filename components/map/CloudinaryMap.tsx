"use client"

import { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Image from "next/image";
import "yet-another-react-lightbox/styles.css";
import GridImageState from "store/gridStore";

export default function CloudinaryMap({ cloudinaryData }: { cloudinaryData: any }) {
    const { count, setCount } = GridImageState();
    const imgElement = useRef<HTMLImageElement>(null)
    const [open, setOpen] = useState(false);
    const [IndexImage, setIndexImage] = useState(0);
    const slides = cloudinaryData.data.map((x: any) => ({ src: x }));
    const Threewidth = [`${100 / 1}%`, `${100 / 2}%`, `${100 / 3}%`, `${100 / 4}%`, `${100 / 5}%`];
    function counter(num: number) {
        if (num < 1) {
            setCount(1)
        } else if (num > 5) {
            setCount(5);
        } else {
            setCount(num);
            window.localStorage.setItem('grid-image', String(num))
        }
    };

    useEffect(() => {
        if (window.localStorage.getItem('grid-image') == null || undefined) {
            window.localStorage.setItem('grid-image', String(count))
        } else {
            setCount(Number(window.localStorage.getItem('grid-image')))
        }
    }, [])

    return (
        <div className="grid">
            <div className="flex h-12 w-full items-end justify-between">
                <span>screenshot</span>
                <div className="flex w-24 h-12 items-center justify-between">
                    <span className="select-none bg-slate-700 w-8 text-xl h-8 items-center flex justify-center rounded-sm cursor-pointer" onClick={() => { counter(count - 1); }}>-</span>
                    <span>{count}</span>
                    <span className="select-none bg-slate-700 w-8 h-8 text-xl items-center flex justify-center rounded-sm cursor-pointer" onClick={() => { counter(count + 1); }}>+</span>
                </div>
            </div>
            <div className="flex flex-wrap">
                {cloudinaryData.data.map((x: any, index: number) =>
                    <Image
                        src={x}
                        alt="ppp"
                        width={1024}
                        height={768}
                        priority={true}
                        quality={100}
                        key={index}
                        loading="eager"
                        ref={imgElement}
                        style={{ width: `${Threewidth[count - 1]}`, height: "fit-content", padding: '4px 4px 4px 4px' }}
                        className="duration-300"
                        onClick={() => { setOpen(true); setIndexImage(index) }}
                    />
                )}
            </div>
            <Lightbox
                open={open}
                index={IndexImage}
                close={() => { setOpen(false) }}
                slides={slides}
            />
        </div>
    )
}