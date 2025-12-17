import * as React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { AnimatedGroup } from './ui/animated-group';
import { transitionVariants } from './hero-section';



export function HowItWorksVideo() {
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = React.useState(true);
    const [isPaused, setIsPaused] = React.useState(true);
    const [showOverlay, setShowOverlay] = React.useState(true);
    const [progress, setProgress] = React.useState(0);

    const [isDragging, setIsDragging] = React.useState(false);

    const handleScrub = (e: React.MouseEvent | React.PointerEvent | PointerEvent) => {
        if (videoRef.current) {
            const progressBar = e.currentTarget as HTMLDivElement;
            const rect = progressBar.getBoundingClientRect();
            const x = Math.max(0, Math.min((e as any).clientX - rect.left, rect.width));
            const percentage = x / rect.width;

            videoRef.current.currentTime = percentage * videoRef.current.duration;
            setProgress(percentage * 100);
        }
    };

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        setIsDragging(true);
        handleScrub(e);
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (isDragging) {
            handleScrub(e);
        }
    };

    const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        setIsDragging(false);
        e.currentTarget.releasePointerCapture(e.pointerId);
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(currentProgress);
        }
    };



    const handleVideoClick = () => {
        if (!videoRef.current) return;
        const newMutedState = !isMuted;
        videoRef.current.muted = newMutedState;
        setIsMuted(newMutedState);
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPaused(false);
        }
        if (showOverlay) setShowOverlay(false);
    };

    React.useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play().catch(() => console.log("Autoplay blocked"));
        }
    }, []);

    const togglePlayPause = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPaused(false);
        } else {
            videoRef.current.pause();
            setIsPaused(true);
        }
    };

    return (
        <main id="how-it-works" className='pb-14'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 md:mb-24 pt-16"
            >
                <h2 className="text-sm font-mono font-semibold text-primary uppercase tracking-widest mb-1">
                    Get to know how to use the bot
                </h2>
                <p className="text-4xl md:text-5xl font-extrabold dark:text-gray-50 text-black tracking-tight">
                    How it works
                </p>
            </motion.div>
            <AnimatedGroup variants={transitionVariants}>
                <div className="relative mt-8 overflow-hidden px-4 sm:px-2 sm:-mr-56 sm:mt-12 md:mt-20 flex justify-center w-full">

                    <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative w-full max-w-6xl overflow-hidden rounded-2xl border p-2 md:p-4 shadow-lg shadow-zinc-950/15 ring-1">
                        <div
                            className="group relative cursor-pointer aspect-video bg-gray-900 overflow-hidden rounded-xl"
                            onClick={handleVideoClick}
                        >
                            <video
                                ref={videoRef}
                                onTimeUpdate={handleTimeUpdate}
                                className="w-full h-full object-cover"
                                playsInline
                                muted={isMuted}
                                autoPlay
                                loop
                            >
                                <source src="/how-it-works.webm" type="video/webm" />
                                {/* <source src="/how-it-works.mp4" type="video/mp4" /> */}
                            </video>

                            {/* Initial Overlay */}
                            <motion.div
                                animate={{ opacity: showOverlay ? 1 : 0 }}
                                className={cn(
                                    "absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-[2px] z-10 pointer-events-none",
                                    !showOverlay && "hidden"
                                )}
                            >
                                <div className="bg-primary p-5 rounded-full shadow-2xl">
                                    <Play className="h-8 w-8 text-white fill-current" />
                                </div>
                                <p className="mt-4 text-white font-bold text-sm md:text-lg tracking-tight uppercase">Click to Unmute & Play</p>
                            </motion.div>

                            {/* CUSTOM CONTROLS */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-linear-to-t from-black/90 via-black/40 to-transparent p-4">

                                {/* Timeline / Scrub Bar */}
                                <div
                                    className="group/timeline relative w-full h-4 flex items-center cursor-pointer mb-2"
                                    onPointerDown={onPointerDown}
                                    onPointerMove={onPointerMove}
                                    onPointerUp={onPointerUp}
                                >
                                    {/* The Track */}
                                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-primary relative"
                                            style={{ width: `${progress}%` }}
                                        >
                                            {/* Glow effect at the tip */}
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff] opacity-0 group-hover/timeline:opacity-100" />
                                        </motion.div>
                                    </div>

                                    {/* Invisible larger hit area for easier sliding on mobile */}
                                    <div className="absolute inset-0" />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <button onClick={togglePlayPause} className="text-white hover:text-primary transition-colors">
                                            {isPaused ? <Play className="h-5 w-5 fill-current" /> : <div className="h-4 w-4 bg-white rounded-sm" />}
                                        </button>

                                        <button onClick={(e) => { e.stopPropagation(); handleVideoClick(); }} className="text-white hover:text-primary transition-colors">
                                            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                                        </button>
                                    </div>

                                    <div className="text-[10px] font-mono text-white/60 uppercase tracking-widest">
                                        {"Live Demo"} // 00:{Math.floor(videoRef.current?.currentTime || 0).toString().padStart(2, '0')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedGroup>
        </main>

    );
}