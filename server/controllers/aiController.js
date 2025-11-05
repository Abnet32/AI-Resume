import Resume from "../models/Resume.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Ensure environment variables are loaded
import dotenv from "dotenv";
dotenv.config();

// Initialize Gemini AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Get model name from env
const modelName = process.env.GEMINI_MODEL;
if (!modelName) {
  throw new Error(
    "GEMINI_MODEL is missing in environment variables. Please add GEMINI_MODEL to your .env"
  );
}

// Get Gemini generative model
const model = genAI.getGenerativeModel({ model: modelName });

// ==============================
// Enhance Professional Summary
// POST: /api/ai/enhance-pro-sum
// ==============================
export const enhanceProfessionalSummary = async (req, res) => {
  try {
    const { userContent } = req.body;

    if (!userContent) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const prompt = `
You are an expert resume writer. Your task is to enhance the given professional summary to make it more impactful and concise. The summary should be 1 sentences also highlighting key skills, experience, and achievements relevant to a professional resume. Make it compelling and ATS-friendly. and only returen text no options or anything else:
"${userContent}"`;

    const result = await model.generateContent(prompt);
    const enhancedContent = result.response.text();

    return res.status(200).json({ enhancedContent });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// ==============================
// Enhance Job Description
// POST: /api/ai/enhance-job-desc
// ==============================
export const enhanceJobDescription = async (req, res) => {
  try {
    const { userContent } = req.body;

    if (!userContent) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const prompt = `
You are an expert resume writer. Your task is to enhance the given job description to make it more detailed and impactful. The enhanced job description should be 1 sentences and clearly outline key responsibilities, achievements, and skills required for the role. Make it compelling and ATS-friendly. and only returen text no options or anything else:
"${userContent}"`;

    const result = await model.generateContent(prompt);
    const enhancedContent = result.response.text();

    return res.status(200).json({ enhancedContent });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// ==============================
// Enhance Project Description
// POST: /api/ai/enhance-pro-desc
// ==============================
export const enhanceProjectDescription = async (req, res) => {
  try {
    const { userContent } = req.body;

    if (!userContent) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const prompt = `
You are an expert resume writer. Your task is to enhance the given project description to make it more detailed and impactful. The enhanced project description should be 1 sentences and clearly outline key responsibilities, achievements, and skills required for the role. Make it compelling and ATS-friendly. and only returen text no options or anything else:
"${userContent}"`;

    const result = await model.generateContent(prompt);
    const enhancedContent = result.response.text();

    return res.status(200).json({ enhancedContent });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// ==============================
// Upload Resume (Extract JSON & Save)
// POST: /api/ai/upload-resume
// ==============================
export const uploadResume = async (req, res) => {
  try {
    const { resumeText, title } = req.body;
    const userId = req.userId;

    if (!resumeText) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const prompt = `
Extract structured JSON resume data from this text and return ONLY valid JSON, no explanation:

${resumeText}

Format:
{
  "professional_summary": "",
  "skills": [],
  "personal_info": {
    "image": "",
    "full_name": "",
    "profession": "",
    "email": "",
    "phone": "",
    "location": "",
    "linkedin": "",
    "website": ""
  },
  "experience": [
    {
      "company": "",
      "position": "",
      "start_date": "",
      "end_date": "",
      "description": "",
      "is_current": false
    }
  ],
  "project": [
    {
      "name": "",
      "type": "",
      "description": ""
    }
  ],
  "education": [
    {
      "institution": "",
      "degree": "",
      "field": "",
      "graduation_date": "",
      "gpa": ""
    }
  ]
}
`;

    const result = await model.generateContent(prompt);
    const extractedData = result.response.text();

    const parseData = JSON.parse(extractedData);

    const newResume = await Resume.create({
      userId,
      title,
      ...parseData,
    });

    res.json({ resumeId: newResume._id });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
