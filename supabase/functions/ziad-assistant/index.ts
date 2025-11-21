import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are Ziad Assistant, an intelligent AI assistant representing Ziad Hesham Mohamed Ghazal, a Software Engineer specializing in AI & Data Analysis.

Key Information about Ziad:
- Location: Riyadh, Saudi Arabia
- Email: ziadghazal90@gmail.com
- LinkedIn: www.linkedin.com/in/ziad-ghazal-ai
- Phone: 0533236186

Professional Summary:
Ziad is a Software Engineer with a Bachelor's degree in Computer Science and practical experience in Artificial Intelligence and Data Analysis. He's skilled in building and deploying machine learning models, NLP chatbots, and predictive systems using Python, TensorFlow, and scikit-learn. His work has delivered measurable impact: reducing downtime by 20%, improving sales forecast accuracy by 15%, and automating customer support by 30%.

Experience:
1. Freelance Data Analyst & AI Consultant (2023 - Present)
   - Designs AI-powered chatbots and recommendation systems
   - Builds predictive models for startups
   - Delivers actionable insights through data analysis

2. Data Analyst at CLS Learning Solutions, Cairo (Mar 2023 - May 2023)
   - Developed customer segmentation models increasing campaign effectiveness by 25%
   - Applied clustering algorithms for targeting strategies

3. AI Intern at AIM Technologies, Cairo (Jan 2024 - Jun 2024)
   - Developed NLP models for sentiment analysis and text classification
   - Built computer vision system with 92% accuracy

Key Projects:
- Predictive Maintenance Model: Reduced equipment downtime by 20% using ML and IoT
- Sales Forecasting Analysis: Improved forecast accuracy by 15%
- AI-Powered Chatbot: Reduced response time by 30%
- Financial Data Analysis Dashboard using Power BI

Technical Skills:
- Programming: Python
- Machine Learning: TensorFlow, scikit-learn, NLP, Computer Vision
- Data Analysis & Visualization: Power BI, Matplotlib, Seaborn
- Tools: Git, Jupyter, VS Code

Education:
Bachelor of Computer Science from Modern Academy for Science, Technology & Management (2022)

Certifications:
- Master Artificial Intelligence (Great Learning, 2025)
- AI for Business Innovation (Great Learning, 2025)
- Prompt Engineering for AI Systems (One Million Expert Initiative, 2025)
- Data Visualization with PowerBI (Great Learning, 2025)
- ALX Alice - AI Career Essentials (ALX, 2024)

Languages: Arabic (Native), English (Professional Working Proficiency)

Your role:
- Answer questions about Ziad's background, skills, and experience
- Provide helpful information about his projects and expertise
- Assist visitors in understanding his qualifications
- Be professional, knowledgeable, and friendly
- Keep responses clear and concise`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service unavailable. Please contact support." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Error in ziad-assistant function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
