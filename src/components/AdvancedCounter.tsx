import { useCallback, useEffect, useState } from "react";

function AdvancedCounter() {
    const [counter, setCounter] = useState<number>(0);
    const [step, setStep] = useState<number>(1);
    const [history, setHistory] = useState<number[]>([]);

    const incrementCounter = useCallback(() => {
        setCounter(prevCount => prevCount + step);
    }, [step]);

    const decrementCounter = useCallback(() => {
        setCounter(prevCount => prevCount - step);
    }, [step]);

    const resetCounter = () => {
        setCounter(0);
        setHistory([]);
    }

    useEffect(() => {
        setHistory(prevHistory => [...prevHistory, counter]);
    }, [counter]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowUp") {
                incrementCounter();
            }

            if (e.key === "ArrowDown") {
                decrementCounter();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [step, incrementCounter, decrementCounter]);

    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            localStorage.setItem("counter", String(counter));
        }, 300);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [counter]);

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-8">
            <div className="w-full max-w-2xl min-h-[500px] bg-[#10002b] border border-[#5a189a] shadow-xl shadow-[#5a189a] rounded-xl p-8 text-[#e0aaff]">

                <h4 className="text-center text-shadow-md text-shadow-[#5a189a]">
                    Counter
                </h4>

                <h1 className="text-4xl text-center text-shadow-sm text-shadow-[#5a189a]">
                    Current Count: {counter}
                </h1>

                <div className="flex flex-row justify-center gap-4 mt-8">
                    <button onClick={decrementCounter}>
                        Decrement
                    </button>

                    <button onClick={incrementCounter}>
                        Increment
                    </button>

                    <button 
                        onClick={resetCounter}
                        className="text-[#10002b] bg-[#e0aaff] border border-[#3c096c] shadow-md shadow-[#5a189a] rounded-2xl p-[5px]"
                    >
                        Reset
                    </button>
                </div>

                <div className="flex items-center justify-center gap-3 my-6">
                    <label htmlFor="step">Step:</label>

                    <input 
                        id="step"
                        type="number"
                        value={step}
                        onChange={e => setStep(Number(e.target.value))}
                        className="w-24 rounded-md bg-black border border-[#5a189a] p-2 text-center"
                    />
                </div>

                <div className="mt-8 p-4 rounded-lg bg-black border border-[#5a189a]">
                    <h2 className="text-xl mb-2">
                        Count History
                    </h2>
                    <div className="flex flex-col gap-2">
                        {history.map((count, index) => (
                            <p key={index}>
                                {count}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvancedCounter;