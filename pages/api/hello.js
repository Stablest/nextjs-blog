export default function handler(req, res) {
  res.status(200).json({ text: "Hello" });
  if (req.method === "POST") {
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}
