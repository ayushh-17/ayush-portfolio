    import { motion } from "framer-motion";


    export default function AnimatedBackground(){

    return(

    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]">


    {/* Orange Glow */}

    <motion.div

    className="
    absolute
    h-[320px]
w-[320px]
blur-[90px]
    rounded-full
    bg-orange-500/30
    "

    animate={{
    x:[0,200,0],
    y:[0,-100,0]
    }}

    transition={{
    duration:24,
    repeat:Infinity,
    ease:"easeInOut"
    }}

    />



    {/* Yellow Glow */}

    <motion.div

    className="
    absolute
    right-0
    top-40
    w-[450px]
    h-[450px]
    rounded-full
    bg-yellow-400/20
blur-[70px]    "

    animate={{
    x:[0,-150,0],
    y:[0,120,0]
    }}

    transition={{
    duration:28,
    repeat:Infinity,
    ease:"easeInOut"
    }}

    />



    {/* White Lines */}

    <div className="
    absolute
    top-1/3
    left-0
    w-full
    h-px
    bg-white/10
    rotate-6
    "/>


    <div className="
    absolute
    top-2/3
    left-0
    w-full
    h-px
    bg-white/5
    -rotate-6
    "/>


    </div>


    )

    }