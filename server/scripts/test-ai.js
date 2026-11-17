import "dotenv/config";

const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': "application/json",
    },
    body: JSON.stringify({
        model: process.env.OPENROUTER_MODEL,
        messages: [{ role: "user", content: "Say hello in one short sentence."}],
    })
});

const data = await res.json();

if(!res.ok) {
    console.error("Request failed: ", res.status, data);
} else {
    console.log(data.choices[0].message.content);
}