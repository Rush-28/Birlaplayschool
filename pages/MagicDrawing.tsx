
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MagicDrawing: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [color, setColor] = useState('#FF69B4');
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                ctx.lineWidth = 8;
            }
        }
    }, []);

    const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        setIsDrawing(true);
        const { offsetX, offsetY } = getCoordinates(e, canvas);
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
    };

    const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const { offsetX, offsetY } = getCoordinates(e, canvas);
        ctx.strokeStyle = color;
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    const getCoordinates = (e: React.MouseEvent | React.TouchEvent, canvas: HTMLCanvasElement) => {
        let clientX, clientY;
        if ('touches' in e) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
            const rect = canvas.getBoundingClientRect();
            return {
                offsetX: clientX - rect.left,
                offsetY: clientY - rect.top
            };
        } else {
            return {
                offsetX: e.nativeEvent.offsetX,
                offsetY: e.nativeEvent.offsetY
            };
        }
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        }
    }

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen relative z-10">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-[3rem] p-6 md:p-10 shadow-2xl border-8 border-green-200 text-center relative">

                    <Link to="/" className="absolute top-8 left-8 bg-pink-400 text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-pink-500 transition-all z-20">
                        ← Back
                    </Link>

                    <h1 className="text-5xl md:text-6xl font-bold text-green-500 mb-8 font-bubble mt-12">
                        Magic Drawing 🖌️
                    </h1>

                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Tools */}
                        <div className="flex flex-row md:flex-col gap-4 justify-center items-center bg-gray-50 p-4 rounded-3xl">
                            {['#FF69B4', '#FFA500', '#FFFF00', '#00FF00', '#00BFFF', '#9932CC', '#000000', '#FFFFFF'].map((c) => (
                                <button
                                    key={c}
                                    onClick={() => setColor(c)}
                                    className={`w-10 h-10 rounded-full border-4 shadow-sm transition-transform hover:scale-125 ${color === c ? 'border-gray-400 scale-110' : 'border-white'}`}
                                    style={{ backgroundColor: c }}
                                    title={c === '#FFFFFF' ? 'Eraser' : 'Color'}
                                />
                            ))}
                            <div className="w-full h-1 bg-gray-200 my-2 hidden md:block"></div>
                            <button onClick={clearCanvas} className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors" title="Clear All">
                                🗑️
                            </button>
                        </div>

                        {/* Canvas */}
                        <div className="flex-1 bg-white border-4 border-dashed border-gray-300 rounded-3xl overflow-hidden shadow-inner cursor-crosshair h-[60vh]">
                            <canvas
                                ref={canvasRef}
                                className="w-full h-full touch-none"
                                onMouseDown={startDrawing}
                                onMouseMove={draw}
                                onMouseUp={stopDrawing}
                                onMouseLeave={stopDrawing}
                                onTouchStart={startDrawing}
                                onTouchMove={draw}
                                onTouchEnd={stopDrawing}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MagicDrawing;
