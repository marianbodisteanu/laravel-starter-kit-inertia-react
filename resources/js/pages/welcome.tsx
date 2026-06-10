import { Head, Link, usePage } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';
import { dashboard, login, register } from '@/wayfinder/routes';

type ThirteenLayerConfig = {
    maskId: string;
    maskX: string;
    className: string;
    threePath: string;
    onePath: string;
};

const thirteenLayers: ThirteenLayerConfig[] = [
    {
        maskId: 'path-1-mask',
        maskX: '-0.328613',
        className:
            'text-[#1B1B18] opacity-100 mix-blend-darken transition-all delay-300 duration-750 dark:text-black dark:mix-blend-normal starting:opacity-0',
        threePath:
            'M234.94 400.8C204.14 400.8 178.94 392.4 159.34 375.6C140.14 358.8 130.54 337 130.54 310.2H200.74C200.74 318.2 203.74 324.8 209.74 330C215.74 335.2 223.74 337.8 233.74 337.8C243.34 337.8 251.14 335 257.14 329.4C263.54 323.8 266.74 316.6 266.74 307.8C266.74 299.8 263.94 293.2 258.34 288C252.74 282.8 245.54 280.2 236.74 280.2H199.54V218.4H236.74C243.54 218.4 249.34 216 254.14 211.2C258.94 206.4 261.34 200.4 261.34 193.2C261.34 184.8 258.74 178.2 253.54 173.4C248.34 168.6 241.74 166.2 233.74 166.2C226.54 166.2 220.34 168.4 215.14 172.8C210.34 177.2 207.94 182.8 207.94 189.6H141.34C141.34 164.8 150.14 144.6 167.74 129C185.34 113 207.94 105 235.54 105C263.14 105 285.54 112.2 302.74 126.6C320.34 141 329.14 160 329.14 183.6C329.14 200.8 324.54 214.8 315.34 225.6C306.14 236 294.34 243.2 279.94 247.2C297.14 252 310.74 260.2 320.74 271.8C331.14 283.4 336.34 298 336.34 315.6C336.34 340.4 326.94 360.8 308.14 376.8C289.34 392.8 264.94 400.8 234.94 400.8Z',
        onePath: 'M26.87 167.6H1.67V105.2H94.67V400.2H26.87V167.6Z',
    },
    {
        maskId: 'path-2-mask',
        maskX: '25.3357',
        className:
            'text-[#F3BEC7] opacity-100 transition-all delay-400 duration-750 dark:text-[#4B0600] starting:opacity-0 motion-safe:starting:-translate-x-[26px]',
        threePath:
            'M260.6 400.8C229.8 400.8 204.6 392.4 185 375.6C165.8 358.8 156.2 337 156.2 310.2H226.4C226.4 318.2 229.4 324.8 235.4 330C241.4 335.2 249.4 337.8 259.4 337.8C269 337.8 276.8 335 282.8 329.4C289.2 323.8 292.4 316.6 292.4 307.8C292.4 299.8 289.6 293.2 284 288C278.4 282.8 271.2 280.2 262.4 280.2H225.2V218.4H262.4C269.2 218.4 275 216 279.8 211.2C284.6 206.4 287 200.4 287 193.2C287 184.8 284.4 178.2 279.2 173.4C274 168.6 267.4 166.2 259.4 166.2C252.2 166.2 246 168.4 240.8 172.8C236 177.2 233.6 182.8 233.6 189.6H167C167 164.8 175.8 144.6 193.4 129C211 113 233.6 105 261.2 105C288.8 105 311.2 112.2 328.4 126.6C346 141 354.8 160 354.8 183.6C354.8 200.8 350.2 214.8 341 225.6C331.8 236 320 243.2 305.6 247.2C322.8 252 336.4 260.2 346.4 271.8C356.8 283.4 362 298 362 315.6C362 340.4 352.6 360.8 333.8 376.8C315 392.8 290.6 400.8 260.6 400.8Z',
        onePath: 'M52.54 167.6H27.34V105.2H120.34V400.2H52.54V167.6Z',
    },
    {
        maskId: 'path-3-mask',
        maskX: '51',
        className:
            'text-[#F8B803] opacity-100 mix-blend-color transition-all delay-400 duration-750 dark:text-[#391800] dark:mix-blend-hard-light starting:opacity-0 motion-safe:starting:-translate-x-[51px]',
        threePath:
            'M286.26 400.8C255.46 400.8 230.26 392.4 210.66 375.6C191.46 358.8 181.86 337 181.86 310.2H252.06C252.06 318.2 255.06 324.8 261.06 330C267.06 335.2 275.06 337.8 285.06 337.8C294.66 337.8 302.46 335 308.46 329.4C314.86 323.8 318.06 316.6 318.06 307.8C318.06 299.8 315.26 293.2 309.66 288C304.06 282.8 296.86 280.2 288.06 280.2H250.86V218.4H288.06C294.86 218.4 300.66 216 305.46 211.2C310.26 206.4 312.66 200.4 312.66 193.2C312.66 184.8 310.06 178.2 304.86 173.4C299.66 168.6 293.06 166.2 285.06 166.2C277.86 166.2 271.66 168.4 266.46 172.8C261.66 177.2 259.26 182.8 259.26 189.6H192.66C192.66 164.8 201.46 144.6 219.06 129C236.66 113 259.26 105 286.86 105C314.46 105 336.86 112.2 354.06 126.6C371.66 141 380.46 160 380.46 183.6C380.46 200.8 375.86 214.8 366.66 225.6C357.46 236 345.66 243.2 331.26 247.2C348.46 252 362.06 260.2 372.06 271.8C382.46 283.4 387.66 298 387.66 315.6C387.66 340.4 378.26 360.8 359.46 376.8C340.66 392.8 316.26 400.8 286.26 400.8Z',
        onePath: 'M78.2 167.6H53V105.2H146V400.2H78.2V167.6Z',
    },
    {
        maskId: 'path-4-mask',
        maskX: '76.6643',
        className:
            'text-[#F3BEC7] opacity-100 mix-blend-multiply transition-all delay-400 duration-750 dark:text-[#733000] dark:mix-blend-normal starting:opacity-0 motion-safe:starting:-translate-x-[78px]',
        threePath:
            'M311.93 400.8C281.13 400.8 255.93 392.4 236.33 375.6C217.13 358.8 207.53 337 207.53 310.2H277.73C277.73 318.2 280.73 324.8 286.73 330C292.73 335.2 300.73 337.8 310.73 337.8C320.33 337.8 328.13 335 334.13 329.4C340.53 323.8 343.73 316.6 343.73 307.8C343.73 299.8 340.93 293.2 335.33 288C329.73 282.8 322.53 280.2 313.73 280.2H276.53V218.4H313.73C320.53 218.4 326.33 216 331.13 211.2C335.93 206.4 338.33 200.4 338.33 193.2C338.33 184.8 335.73 178.2 330.53 173.4C325.33 168.6 318.73 166.2 310.73 166.2C303.53 166.2 297.33 168.4 292.13 172.8C287.33 177.2 284.93 182.8 284.93 189.6H218.33C218.33 164.8 227.13 144.6 244.73 129C262.33 113 284.93 105 312.53 105C340.13 105 362.53 112.2 379.73 126.6C397.33 141 406.13 160 406.13 183.6C406.13 200.8 401.53 214.8 392.33 225.6C383.13 236 371.33 243.2 356.93 247.2C374.13 252 387.73 260.2 397.73 271.8C408.13 283.4 413.33 298 413.33 315.6C413.33 340.4 403.93 360.8 385.13 376.8C366.33 392.8 341.93 400.8 311.93 400.8Z',
        onePath: 'M103.86 167.6H78.66V105.2H171.66V400.2H103.86V167.6Z',
    },
    {
        maskId: 'path-5-mask',
        maskX: '102.329',
        className:
            'text-[#F3BEC7] opacity-100 mix-blend-hard-light transition-all delay-400 duration-750 dark:text-[#4B0600] starting:opacity-0 motion-safe:starting:-translate-x-[102px]',
        threePath:
            'M337.59 400.8C306.79 400.8 281.59 392.4 261.99 375.6C242.79 358.8 233.19 337 233.19 310.2H303.39C303.39 318.2 306.39 324.8 312.39 330C318.39 335.2 326.39 337.8 336.39 337.8C345.99 337.8 353.79 335 359.79 329.4C366.19 323.8 369.39 316.6 369.39 307.8C369.39 299.8 366.59 293.2 360.99 288C355.39 282.8 348.19 280.2 339.39 280.2H302.19V218.4H339.39C346.19 218.4 351.99 216 356.79 211.2C361.59 206.4 363.99 200.4 363.99 193.2C363.99 184.8 361.39 178.2 356.19 173.4C350.99 168.6 344.39 166.2 336.39 166.2C329.19 166.2 322.99 168.4 317.79 172.8C312.99 177.2 310.59 182.8 310.59 189.6H243.99C243.99 164.8 252.79 144.6 270.39 129C287.99 113 310.59 105 338.19 105C365.79 105 388.19 112.2 405.39 126.6C422.99 141 431.79 160 431.79 183.6C431.79 200.8 427.19 214.8 417.99 225.6C408.79 236 396.99 243.2 382.59 247.2C399.79 252 413.39 260.2 423.39 271.8C433.79 283.4 438.99 298 438.99 315.6C438.99 340.4 429.59 360.8 410.79 376.8C391.99 392.8 367.59 400.8 337.59 400.8Z',
        onePath: 'M129.53 167.6H104.33V105.2H197.33V400.2H129.53V167.6Z',
    },
];

const laravelLogoPaths = [
    'M17.2 -3H0V102.2H49.52V86.72H17.2V-3Z',
    'M110.26 41.63C108.06 38.13 104.95 35.37 100.91 33.37C96.87 31.36 92.8 30.36 88.71 30.36C83.42 30.36 78.59 31.34 74.2 33.29C69.81 35.25 66.05 37.93 62.91 41.33C59.76 44.74 57.32 48.67 55.58 53.13C53.83 57.59 52.96 62.27 52.96 67.18C52.96 72.19 53.83 76.9 55.58 81.31C57.32 85.72 59.76 89.62 62.91 93.03C66.05 96.44 69.81 99.12 74.2 101.07C78.59 103.02 83.42 104 88.71 104C92.8 104 96.87 103 100.91 100.99C104.95 98.99 108.06 96.24 110.26 92.73V102.2H126.56V32.16H110.26V41.63ZM108.76 75.75C107.76 78.45 106.37 80.81 104.57 82.81C102.78 84.82 100.61 86.42 98.06 87.62C95.52 88.82 92.7 89.42 89.61 89.42C86.52 89.42 83.73 88.82 81.23 87.62C78.74 86.42 76.59 84.82 74.8 82.81C73 80.81 71.63 78.45 70.69 75.75C69.74 73.04 69.26 70.19 69.26 67.18C69.26 64.18 69.74 61.32 70.69 58.62C71.63 55.91 73 53.56 74.8 51.55C76.59 49.55 78.74 47.95 81.23 46.74C83.73 45.54 86.52 44.94 89.61 44.94C92.7 44.94 95.52 45.54 98.06 46.74C100.61 47.95 102.78 49.55 104.57 51.55C106.37 53.56 107.76 55.91 108.76 58.62C109.76 61.32 110.26 64.18 110.26 67.18C110.26 70.19 109.76 73.04 108.76 75.75Z',
    'M242.81 41.63C240.61 38.13 237.49 35.37 233.46 33.37C229.42 31.36 225.35 30.36 221.26 30.36C215.97 30.36 211.14 31.34 206.75 33.29C202.36 35.25 198.6 37.93 195.46 41.33C192.31 44.74 189.87 48.67 188.13 53.13C186.38 57.59 185.51 62.27 185.51 67.18C185.51 72.19 186.38 76.9 188.13 81.31C189.87 85.72 192.31 89.62 195.46 93.03C198.6 96.44 202.36 99.12 206.75 101.07C211.14 103.02 215.97 104 221.26 104C225.35 104 229.42 103 233.46 100.99C237.49 98.99 240.61 96.24 242.81 92.73V102.2H259.11V32.16H242.81V41.63ZM241.31 75.75C240.31 78.45 238.92 80.81 237.12 82.81C235.33 84.82 233.16 86.42 230.61 87.62C228.07 88.82 225.25 89.42 222.16 89.42C219.07 89.42 216.28 88.82 213.78 87.62C211.29 86.42 209.15 84.82 207.35 82.81C205.55 80.81 204.18 78.45 203.24 75.75C202.29 73.04 201.81 70.19 201.81 67.18C201.81 64.18 202.29 61.32 203.24 58.62C204.18 55.91 205.55 53.56 207.35 51.55C209.15 49.55 211.29 47.95 213.78 46.74C216.28 45.54 219.07 44.94 222.16 44.94C225.25 44.94 228.07 45.54 230.61 46.74C233.16 47.95 235.33 49.55 237.12 51.55C238.92 53.56 240.31 55.91 241.31 58.62C242.31 61.32 242.81 64.18 242.81 67.18C242.81 70.19 242.31 73.04 241.31 75.75Z',
    'M438 -3H421.69V102.2H438V-3Z',
    'M139.43 102.2H155.74V48.28H183.71V32.17H139.43V102.2Z',
    'M324.49 32.17L304 85.79L283.5 32.17H266.98L293.75 102.2H314.24L341.01 32.17H324.49Z',
    'M376.57 30.37C356.6 30.37 340.8 46.85 340.8 67.18C340.8 89.66 356.09 104 378.66 104C391.29 104 399.35 99.15 409.21 88.58L398.19 80.02C398.18 80.03 389.87 90.99 377.47 90.99C363.05 90.99 356.98 79.31 356.98 73.27H411.08C413.92 50.13 398.78 30.37 376.57 30.37ZM357.02 61.1C357.15 59.75 359.02 43.38 376.44 43.38C393.86 43.38 395.98 59.75 396.1 61.1H357.02Z',
];

function ExternalLinkIcon() {
    return (
        <svg
            width={10}
            height={11}
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-2.5 w-2.5"
        >
            <path
                d="M7.71 6.96V2.79H3.54M2.5 8L7.5 3"
                stroke="currentColor"
                strokeLinecap="square"
            />
        </svg>
    );
}

function GetStartedItem({
    connectorClassName,
    children,
}: PropsWithChildren<{ connectorClassName: string }>) {
    return (
        <li
            className={`relative flex items-center gap-4 py-2 before:absolute before:left-[0.4rem] before:border-l before:border-[#e3e3e0] dark:before:border-[#3E3E3A] ${connectorClassName}`}
        >
            <span className="relative bg-white py-1 dark:bg-[#161615]">
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#e3e3e0] bg-[#FDFDFC] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] dark:border-[#3E3E3A] dark:bg-[#161615]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#dbdbd7] dark:bg-[#3E3E3A]" />
                </span>
            </span>
            <span>{children}</span>
        </li>
    );
}

function GetStartedLink({
    href,
    children,
}: PropsWithChildren<{ href: string }>) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="ml-1 inline-flex items-center space-x-1 font-medium text-[#f53003] underline underline-offset-4 dark:text-[#FF4433]"
        >
            <span>{children}</span>
            <ExternalLinkIcon />
        </a>
    );
}

function LaravelLogo() {
    return (
        <svg
            className="w-full max-w-none translate-y-0 text-[#F53003] opacity-100 transition-all duration-750 dark:text-[#F61500] starting:opacity-0 motion-safe:starting:translate-y-6"
            viewBox="0 0 438 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {laravelLogoPaths.map((path) => (
                <path key={path} d={path} fill="currentColor" />
            ))}
        </svg>
    );
}

function ThirteenLayer({
    maskId,
    maskX,
    className,
    threePath,
    onePath,
}: ThirteenLayerConfig) {
    return (
        <g className={className}>
            <mask
                id={maskId}
                maskUnits="userSpaceOnUse"
                x={maskX}
                y="103"
                width="338"
                height="299"
                fill="black"
            >
                <rect fill="white" x={maskX} y="103" width="338" height="299" />
                <path d={threePath} />
                <path d={onePath} />
            </mask>
            <path d={threePath} fill="currentColor" />
            <path d={onePath} fill="currentColor" />
            <path
                d={threePath}
                stroke="var(--stroke-color)"
                strokeWidth="2.4"
                mask={`url(#${maskId})`}
            />
            <path
                d={onePath}
                stroke="var(--stroke-color)"
                strokeWidth="2.4"
                mask={`url(#${maskId})`}
            />
        </g>
    );
}

function ThirteenGlyph() {
    return (
        <svg
            className="relative -mt-[6.6rem] -ml-8 w-[438px] max-w-none [--stroke-color:#1B1B18] lg:ml-0 dark:[--stroke-color:#FF750F]"
            viewBox="0 0 440 392"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {thirteenLayers.map((layer) => (
                <ThirteenLayer key={layer.maskId} {...layer} />
            ))}
        </svg>
    );
}

function WelcomeNav({ canRegister }: { canRegister: boolean }) {
    const { auth } = usePage().props;

    return (
        <nav className="flex items-center justify-end gap-4">
            {auth.user ? (
                <Link
                    href={dashboard()}
                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                >
                    Dashboard
                </Link>
            ) : (
                <>
                    <Link
                        href={login()}
                        className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                    >
                        Log in
                    </Link>
                    {canRegister && (
                        <Link
                            href={register()}
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                        >
                            Register
                        </Link>
                    )}
                </>
            )}
        </nav>
    );
}

function GetStartedPanel() {
    return (
        <div className="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
            <h1 className="mb-1 font-medium">Let's get started</h1>
            <p className="mb-2 text-[#706f6c] dark:text-[#A1A09A]">
                Laravel has an incredibly rich ecosystem.
                <br />
                We suggest starting with the following.
            </p>
            <ul className="mb-4 flex flex-col lg:mb-6">
                <GetStartedItem connectorClassName="before:top-1/2 before:bottom-0">
                    Read the
                    <GetStartedLink href="https://laravel.com/docs">
                        Documentation
                    </GetStartedLink>
                </GetStartedItem>
                <GetStartedItem connectorClassName="before:top-0 before:bottom-1/2">
                    Watch video tutorials at
                    <GetStartedLink href="https://laracasts.com">
                        Laracasts
                    </GetStartedLink>
                </GetStartedItem>
            </ul>
            <ul className="flex gap-3 text-sm leading-normal">
                <li>
                    <a
                        href="https://cloud.laravel.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block rounded-sm border border-black bg-[#1b1b18] px-5 py-1.5 text-sm leading-normal text-white hover:border-black hover:bg-black dark:border-[#eeeeec] dark:bg-[#eeeeec] dark:text-[#1C1C1A] dark:hover:border-white dark:hover:bg-white"
                    >
                        Deploy now
                    </a>
                </li>
            </ul>
        </div>
    );
}

function HeroPanel() {
    return (
        <div className="relative -mb-px aspect-[335/364] w-full shrink-0 overflow-hidden rounded-t-lg bg-[#fff2f2] lg:mb-0 lg:-ml-px lg:aspect-auto lg:w-[438px] lg:rounded-t-none lg:rounded-r-lg dark:bg-[#1D0002]">
            <LaravelLogo />
            <ThirteenGlyph />
            <div className="absolute inset-0 rounded-t-lg shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-t-none lg:rounded-r-lg dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]"></div>
        </div>
    );
}

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <WelcomeNav canRegister={canRegister} />
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">
                        <GetStartedPanel />
                        <HeroPanel />
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
