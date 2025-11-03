import OpenAI from "openai";

const ai = new OpenAI({
  apiKey: "AIzaSyCi6itCFtqf_u5105kIiFCegMx4aL8OGfI",
  baseURL: process.env.OPENAI_BASE_URL,
});

export default ai;