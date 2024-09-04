import Head from 'next/head'

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#68A5DE] via-[#68CADE] to-[#7768DE] flex flex-col items-center justify-center p-4">
            <Head>
                <title>Ari Tanem - Coming Soon</title>
                <meta name="description" content="Ari Tanem - Coming Soon" />
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>

            <main className="text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                    Ari Tanem
                </h1>
                <p className="text-2xl md:text-3xl text-white mb-8 drop-shadow-md">
                    Coming Soon
                </p>
                <div className="w-24 h-1 bg-white opacity-75 mx-auto rounded-full"></div>
            </main>

            <footer className="absolute bottom-4 text-sm text-white text-opacity-75">
                © {new Date().getFullYear()} Ari Tanem. All rights reserved.
            </footer>
        </div>
    )
}
