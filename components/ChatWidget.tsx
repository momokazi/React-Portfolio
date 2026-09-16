import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Terminal } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { cn } from '../lib/utils';

const WELCOME: ChatMessage = {
  id: 'welcome',
  role: 'model',
  text: "Ask me about Husnain's projects, stack, or availability.",
  timestamp: new Date(),
};

/** Styled as a terminal window — the one place monospace earns its keep. */
const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  // Escape closes the panel.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  const handleSendMessage = async (event?: React.FormEvent) => {
    event?.preventDefault();
    const text = inputValue.trim();
    if (!text || isLoading) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: 'user', text, timestamp: new Date() },
    ]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(text);
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-model`,
          role: 'model',
          text: responseText,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {isOpen && (
        <div
          role="dialog"
          aria-label="Ask about this portfolio"
          className="mb-3 flex h-[480px] w-[calc(100vw-2.5rem)] flex-col overflow-hidden border-3 border-ink bg-paper shadow-brutal-xl sm:w-[370px]"
        >
          {/* Title bar */}
          <div className="flex items-center justify-between gap-3 border-b-3 border-ink bg-ink px-3 py-2.5 text-paper">
            <div className="flex items-center gap-2">
              <Terminal size={16} aria-hidden />
              <span className="font-mono text-xs font-bold uppercase tracking-widest">
                ask-husnain
              </span>
            </div>
            <div className="flex items-center gap-1.5" aria-hidden>
              <span className="h-3 w-3 border-2 border-paper bg-acid" />
              <span className="h-3 w-3 border-2 border-paper bg-flame" />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="ml-1.5 hover:text-flame"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Transcript */}
          <div className="flex-1 space-y-3 overflow-y-auto p-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'max-w-[88%] border-3 border-ink px-3 py-2 text-sm font-medium',
                  message.role === 'user'
                    ? 'ml-auto bg-sky text-ink'
                    : 'bg-surface text-ink shadow-brutal'
                )}
              >
                <span
                  className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-widest text-muted"
                  aria-hidden
                >
                  {message.role === 'user' ? 'you' : 'bot'}
                </span>
                {message.text}
              </div>
            ))}

            {isLoading && (
              <div className="w-fit border-3 border-ink bg-surface px-3 py-2 shadow-brutal">
                <span className="font-mono text-sm font-bold">
                  thinking<span className="animate-blink">_</span>
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Prompt */}
          <form onSubmit={handleSendMessage} className="border-t-3 border-ink bg-surface p-2.5">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="type a question…"
                aria-label="Your question"
                className="min-w-0 flex-1 border-3 border-ink bg-paper px-3 py-2.5 font-mono text-sm outline-none placeholder:text-muted focus:bg-acid/30"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                aria-label="Send"
                className="flex h-[46px] w-[46px] shrink-0 items-center justify-center border-3 border-ink bg-flame text-white transition-transform duration-100 ease-brutal hover:translate-x-[2px] hover:translate-y-[2px] disabled:opacity-40"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        className={cn(
          'flex h-14 w-14 items-center justify-center border-3 border-ink shadow-brutal-md',
          'transition-[transform,box-shadow] duration-100 ease-brutal',
          'hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none',
          isOpen ? 'bg-surface text-ink' : 'bg-acid text-ink'
        )}
      >
        {isOpen ? <X size={22} /> : <MessageSquare size={22} />}
      </button>
    </div>
  );
};

export default ChatWidget;
