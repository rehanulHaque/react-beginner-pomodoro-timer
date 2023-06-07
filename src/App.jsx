import { useEffect, useState } from "react";
import "./App.css";
import VideoBackground from "./Component/Videobackground";

function App() {
  const [timer, setTimer] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(()=>{
    let interval = null
    if(isRunning && timer > 0){
      interval = setInterval(() => {
        setTimer(prevTime => prevTime-1)
      }, 1000);
    }else if (!isRunning && timer === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval)
  }, [isRunning, timer])
  return (
    <>
      <main className="h-screen w-screen flex justify-center items-center">
        <VideoBackground />
        <div className="h-[300px] w-[450px] bg-transparent-white rounded-lg border border-white">
          <h1 className="font-semibold text-2xl p-4 py-3">Pomodoro</h1>
          <hr className="bg-white" />
          <div className="w-fit mx-auto mt-16 flex justify-center items-center flex-col">
            <h1 className="text-5xl font-semibold">
            <span>{Math.floor(timer / 60).toString().padStart(2, '0')}:</span>
        <span>{(timer % 60).toString().padStart(2, '0')}</span>
            </h1>
            <div>
              <button className="px-4 py-1 border border-white rounded-lg mt-2 mr-2" onClick={()=>{
                  setIsRunning(!isRunning)
              }}>
                {isRunning? 'Pause' : 'Start'}
              </button>
              <button className="px-4 py-1 border border-white rounded-lg mt-2" onClick={()=>{
                setIsRunning(!isRunning)
                  setTimer(1500)
              }}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
