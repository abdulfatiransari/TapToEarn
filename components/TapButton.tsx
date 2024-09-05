import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function TapButton() {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    console.log("🚀 ~ TapButton ~ cursorPosition:", cursorPosition);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const ref = useRef<any>(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const handleClick = (event: any) => {
            setCursorPosition({ x: event.clientX, y: event.clientY });
        };

        ref.current.addEventListener("click", handleClick);
        return () => ref?.current?.removeEventListener("click", handleClick);
    }, []);
    const handleMouseDown = (event: any) => {
        setIsMouseDown(true);
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseMove = (event: any) => {
        if (isMouseDown) {
            setCursorPosition({ x: event.clientX, y: event.clientY });
        }
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    return (
        <div>
            <div
                className="flex justify-center items-center relative overflow-hidden py-4 z-30 h-[500px] top-[-80px]"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                ref={ref}
            >
                <Image
                    src={`/img/token-ring.png`}
                    alt=""
                    width={500}
                    height={500}
                    className="absolute min-w-[500px] min-h-[500px] z-20"
                />
                <Image
                    src={`/img/usdt-gold-logo.png`}
                    alt=""
                    width={300}
                    height={300}
                    className="relative z-30"
                    ref={imageRef}
                />
            </div>
        </div>
    );
}
