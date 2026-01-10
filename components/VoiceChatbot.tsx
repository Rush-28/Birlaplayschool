import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Define SpeechRecognition types since they aren't in standard TypeScript lib yet
interface IWindow extends Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
}

const VoiceChatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
        { text: "Hi! I'm Buddy. Ask me about admissions, games, or just say hello! 🤖", isUser: false }
    ]);
    const [isListening, setIsListening] = useState(false);
    const [isTalking, setIsTalking] = useState(false);

    const bottomRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const recognitionRef = useRef<any>(null);

    useEffect(() => {
        // Scroll to bottom of chat
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isOpen]);

    useEffect(() => {
        // Initialize Speech Recognition
        const { webkitSpeechRecognition, SpeechRecognition } = window as unknown as IWindow;
        const Recognition = SpeechRecognition || webkitSpeechRecognition;

        if (Recognition) {
            const recognition = new Recognition();
            recognition.continuous = false;
            recognition.lang = 'en-US';
            recognition.interimResults = false;

            recognition.onstart = () => setIsListening(true);
            recognition.onend = () => setIsListening(false);

            recognition.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript;
                // Directly send the input when speech is detected
                handleUserMessage(transcript);
            };

            recognitionRef.current = recognition;
        }
    }, []);

    const speak = (text: string) => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel(); // Stop current speech
            const utterance = new SpeechSynthesisUtterance(text);

            // Try to pick a friendly English voice
            const voices = window.speechSynthesis.getVoices();
            // Prioritize high-quality voices
            const preferredVoice = voices.find(v =>
                (v.name.includes('Google') && v.lang.includes('en-US')) ||
                (v.name.includes('Martha') && v.lang.includes('en')) ||
                (v.name.includes('Samantha') && v.lang.includes('en'))
            ) || voices.find(v => v.lang.includes('en-US')) || voices[0];

            if (preferredVoice) utterance.voice = preferredVoice;

            utterance.pitch = 1.05; // Slightly cheerful but natural and clear
            utterance.rate = 0.95;  // Slightly slower for better enunciation

            utterance.onstart = () => setIsTalking(true);
            utterance.onend = () => setIsTalking(false);

            window.speechSynthesis.speak(utterance);
        }
    };

    // Knowledge Base Data
    const knowledgeBase = [
        {
            keywords: ['hello', 'hi', 'hey', 'greetings', 'morning', 'afternoon'],
            response: "Hello there! Ready to learn and play? 🌟 I can tell you about our classes, activities, or admissions!",
            action: null
        },
        {
            keywords: ['admission', 'enroll', 'join', 'register', 'fee', 'application', 'apply', 'price', 'cost'],
            response: "Admissions are open for ages 2 to 6 years! 🎉 We'd love to welcome your little one. I can take you to the enrollment page.",
            action: () => navigate('/enroll')
        },
        {
            keywords: ['time', 'calendar', 'date', 'holiday', 'event', 'schedule', 'opening', 'hour', 'year', 'sports day', 'annual day', 'when'],
            response: "Our academic year runs from June to May. 🗓️ We have fun events like Sports Day and Art Festivals coming up!",
            action: () => navigate('/parents')
        },
        {
            keywords: ['activity', 'game', 'play', 'fun', 'sport', 'drama', 'sand', 'water', 'music', 'dance'],
            response: "We have amazing activities like Dramatic Play 🎭, Sand & Water Play 🏖️, and a Ball Pool! Check out our Activities page for more fun.",
            action: () => navigate('/activities')
        },
        {
            keywords: ['curriculum', 'study', 'learn', 'education', 'teaching', 'syllabus', 'create', 'nep', 'ncert'],
            response: "Our CREATE curriculum is mapped to NCERT and NEP 2020 📚. It focuses on Connectivity, Responsibility, and Engagement to build academic trust.",
            action: null
        },
        {
            keywords: ['safety', 'secure', 'safe', 'cctv', 'camera', 'guard', 'protection', 'rfid'],
            response: "Safety is our priority! 🛡️ We have live CCTV monitoring, RFID smart access for pickups, and certified child-safe equipment.",
            action: () => navigate('/about')
        },
        {
            keywords: ['food', 'meal', 'lunch', 'snack', 'breakfast', 'menu', 'eat', 'diet', 'nutrition', 'cafeteria'],
            response: "Yum! 😋 We serve fresh, nutritious meals like fruit salads and veggie pasta. Our menu changes weekly to keep little tummies happy!",
            action: null
        },
        {
            keywords: ['contact', 'call', 'email', 'phone', 'address', 'location', 'reach', 'number'],
            response: "You can call us at 9594923990 📞 or email contact@bkbirlaplayschoolkalyan.com. We are always happy to hear from you!",
            action: null
        },
        {
            keywords: ['gallery', 'photo', 'picture', 'image', 'video', 'look', 'see'],
            response: "Want to see our happy moments? 📸 Heading to the Gallery to show you our world!",
            action: () => navigate('/gallery')
        },
        {
            keywords: ['about', 'school', 'who', 'history', 'teacher', 'staff', 'guide'],
            response: "We are B. K. Birla Play School! 🏫 Our teachers are 'Adventure Guides' who make learning a masterpiece of discovery.",
            action: () => navigate('/about')
        },
        {
            keywords: ['bye', 'goodbye', 'see you', 'later'],
            response: "Goodbye! See you soon! 👋",
            action: null
        },
        {
            keywords: ['close', 'exit', 'shut', 'stop'],
            response: "Closing chat. Have a great day! 👋",
            action: () => {
                setTimeout(() => {
                    setIsOpen(false);
                    setMessages([{ text: "Hi! I'm Buddy. Ask me about admissions, games, or just say hello! 🤖", isUser: false }]);
                }, 1500);
            }
        }
    ];

    const findBestMatch = (text: string) => {
        const lowerText = text.toLowerCase();
        let bestMatch = null;
        let maxScore = 0;

        knowledgeBase.forEach(item => {
            let score = 0;
            item.keywords.forEach(keyword => {
                if (lowerText.includes(keyword)) score++;
            });
            if (score > maxScore) {
                maxScore = score;
                bestMatch = item;
            }
        });

        // Default response if no keywords match well
        if (maxScore === 0) {
            return {
                response: "I didn't quite catch that. Could you say it again? 👂 I know about Admissions, Activities, Safety, and Food!",
                action: null
            };
        }
        return bestMatch;
    };

    const handleUserMessage = (text: string) => {
        setMessages(prev => [...prev, { text, isUser: true }]);

        const match = findBestMatch(text);

        // Delayed response to feel natural
        setTimeout(() => {
            if (match) {
                setMessages(prev => [...prev, { text: match.response, isUser: false }]);
                speak(match.response);
                if (match.action) match.action();
            }
        }, 500);
    };

    const toggleListening = () => {
        if (isListening) {
            recognitionRef.current?.stop();
        } else {
            if (recognitionRef.current) {
                try {
                    recognitionRef.current.start();
                } catch (e) {
                    console.error("Microphone error", e);
                }
            } else {
                alert("Voice recognition not supported in this browser.");
            }
        }
    };

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        const input = (e.target as any).message.value;
        if (input.trim()) {
            handleUserMessage(input);
            (e.target as any).reset();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] font-sans">
            {/* Search/Chat Toggle Button */}
            {!isOpen && (
                <button
                    onClick={() => {
                        setIsOpen(true);
                        setMessages([{ text: "Hi! I'm Buddy. Ask me about admissions, games, or just say hello! 🤖", isUser: false }]);
                    }}
                    className="bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 text-white p-4 rounded-full shadow-lg border-4 border-white transition-transform hover:scale-110 animate-bounce cursor-pointer"
                >
                    <span className="text-3xl">🤖</span>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white rounded-[2rem] shadow-2xl w-80 sm:w-96 flex flex-col border-4 border-blue-200 overflow-hidden transition-all animate-fade-in-up max-h-[80vh]">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 p-4 flex justify-between items-center text-white shrink-0">
                        <div className="flex items-center gap-2">
                            <span className={`text-2xl ${isTalking ? 'animate-pulse' : ''}`}>🤖</span>
                            <div>
                                <h3 className="font-bold text-lg font-bubble leading-none">Buddy Bot</h3>
                                <span className="text-xs opacity-80">Ask me anything!</span>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                setMessages([{ text: "Hi! I'm Buddy. Ask me about admissions, games, or just say hello! 🤖", isUser: false }]);
                            }}
                            className="bg-white/20 hover:bg-white/30 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                        >
                            <span className="text-lg font-bold">✕</span>
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 bg-blue-50/50 space-y-3 custom-scrollbar min-h-0">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl text-sm font-medium ${msg.isUser
                                        ? 'bg-blue-500 text-white rounded-br-none'
                                        : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-bl-none'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={bottomRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-white border-t border-gray-100 shrink-0">
                        <form onSubmit={handleSend} className="flex gap-2">
                            <input
                                name="message"
                                type="text"
                                placeholder="Type or say hello..."
                                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-black"
                                autoComplete="off"
                            />
                            <button
                                type="button"
                                onClick={toggleListening}
                                className={`p-2 rounded-full transition-all ${isListening
                                    ? 'bg-red-500 text-white animate-pulse'
                                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                    }`}
                                title="Speak"
                            >
                                🎤
                            </button>
                            <button
                                type="submit"
                                className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all"
                            >
                                ➤
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <style>{`
        .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #93c5fd;
            border-radius: 10px;
            border: 2px solid #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: #60a5fa;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
        </div>
    );
};

export default VoiceChatbot;
