import React, { useEffect } from 'react';

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': {
        'agent-id': string;
      };
    }
  }
}

interface AIVoiceProps {
  onNavigate: (section: string) => void;
}

export const AIVoice: React.FC<AIVoiceProps> = ({ onNavigate }) => {
  useEffect(() => {
    // Load ElevenLabs ConvAI script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div>
      <elevenlabs-convai agent-id="agent_01jztfbc2jf708phwmsfxww2xh"></elevenlabs-convai>
    </div>
  );
};