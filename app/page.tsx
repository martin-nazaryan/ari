import Image from 'next/image';
import bgGif from '../public/background.gif';

export default function Home() {
    return (
        <div className="relative h-screen flex flex-col items-center justify-center">
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={bgGif}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>

            <div className="relative z-10 flex-grow flex items-center justify-center">
                <div className="text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold">Ari Tanem</h1>
                    <p className="text-xl md:text-2xl mt-4">Coming Soon</p>
                </div>
            </div>

            <footer className="relative z-10 p-4 text-center text-sm text-white text-opacity-75">
                © {new Date().getFullYear()} Ari Tanem. All rights reserved.
            </footer>

            <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
    );
}
