import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, SKILLS, PROJECTS } from '../constants';

const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${PERSONAL_INFO.name}'s portfolio website.
Your role is to act as a knowledgeable representative of ${PERSONAL_INFO.name}.
Answer questions from visitors about his skills in Flutter, Node.js, and his specific projects.

Context:
Name: ${PERSONAL_INFO.name}
Tagline: ${PERSONAL_INFO.tagline}
Bio: ${PERSONAL_INFO.bio}
Contact: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}

Skills: ${SKILLS.map(s => s.name).join(', ')}

Projects:
${PROJECTS.map(p => `- ${p.title} (${p.subtitle}): ${p.overview}. Tech: ${p.techStack.join(', ')}`).join('\n')}

Tone: Professional, enthusiastic, helpful.
Keep answers concise (under 3 sentences) unless asked for elaboration.
If asked about "Rizz Up", mention it's a fun dating app with pickup lines.
If asked about contact, provide the email.
`;

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (apiKey) {
      aiClient = new GoogleGenAI({ apiKey });
    } else {
      console.warn("API_KEY is missing. AI features will not work.");
    }
  }
  return aiClient;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) {
    return "I'm currently offline (API Key missing). You can reach Husnain directly via email.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I didn't quite catch that.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a bit of trouble connecting to the brain right now. Please try again.";
  }
};
