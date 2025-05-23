const { generateAIResponse } = require("../services/aiService.js");

const summarization = async (req, res) => {
    const { input } = req.body;
    if (!input) {
        return res.status(400).json({ error: "Question is required" });
    }

    try {
        const aiResponse = await generateAIResponse(question);
        res.json({ answer: aiResponse });
    } catch (error) {
        console.error("Error processing AI request:", error);
        res.status(500).json({ error: "Failed to get AI response" });
    }
};

module.exports = { summarization };
