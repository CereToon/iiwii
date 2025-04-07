import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Sparkles, Flame, Laugh } from "lucide-react";
import { motion } from "framer-motion";

// Fix TypeScript type issues with motion components
const MotionH1 = motion<HTMLHeadingElement>("h1");
const MotionP = motion<HTMLParagraphElement>("p");
const MotionDiv = motion<HTMLDivElement>("div");

export default function IIWII() {
  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center space-y-12 relative overflow-hidden">
      {/* Animated background chart pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <motion.polyline
            fill="none"
            stroke="red"
            strokeWidth="2"
            points="0,20 10,30 20,25 30,35 40,20 50,45 60,30 70,55 80,40 90,70 100,50"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
          />
        </svg>
      </div>

      <MotionH1
        className="text-6xl font-bold text-center z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        It Is What It Is <span className="text-pink-500">$IIWII</span>
      </MotionH1>

      <MotionP
        className="text-xl max-w-2xl text-center text-gray-300 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Embrace the absurdity. The world’s on fire, and we’re vibing.
      </MotionP>

      <MotionDiv className="z-10">
        <p className="text-sm text-gray-400 text-center mt-2">
          Contract: <span className="text-pink-500">0x2758ce10caf35dddbd59025e7350acb4c74d66a7</span>
        </p>
      </MotionDiv>

      <MotionDiv
        className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {[{
          icon: <Flame size={40} />, 
          title: "Chaos", 
          text: "Markets crashing? Memes rising."
        }, {
          icon: <Laugh size={40} />, 
          title: "Meme First", 
          text: "Seriousness is overrated."
        }, {
          icon: <Sparkles size={40} />, 
          title: "Vibes Only", 
          text: "Absurd profits in absurd times."
        }].map((item, i) => (
          <motion.div
            key={i}
            className="bg-zinc-900 rounded-2xl shadow-lg p-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card>
              <CardContent className="flex flex-col items-center space-y-4">
                {item.icon}
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="text-gray-400 text-center">{item.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </MotionDiv>

      <MotionDiv
        className="flex flex-col md:flex-row items-center gap-4 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <a 
          href="https://app.uniswap.org/explore/tokens/base/0x2758ce10caf35dddbd59025e7350acb4c74d66a7" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button className="text-lg px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-700">
            Buy $IIWII Now
          </Button>
        </a>
        <a 
          href="https://t.me/itiswhatitisofficial" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button className="text-lg px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700">
            Join Telegram
          </Button>
        </a>
        <a 
          href="https://x.com/IiwiisBase" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button className="text-lg px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-900">
            Follow on X
          </Button>
        </a>
      </MotionDiv>
    </main>
  );
}
