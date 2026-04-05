const express = require("express");
const os = require("os");

const app = express();

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>ArgoCD GitOps Demo</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
                    color: white;
                    text-align: center;
                    padding-top: 50px;
                }
                .card {
                    background: rgba(255,255,255,0.1);
                    padding: 30px;
                    border-radius: 15px;
                    display: inline-block;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
                }
                h1 {
                    color: #00ffcc;
                }
                .info {
                    margin-top: 20px;
                    font-size: 18px;
                }
                .tag {
                    margin-top: 15px;
                    padding: 10px;
                    background: #00ffcc;
                    color: black;
                    border-radius: 8px;
                    display: inline-block;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>🚀 ArgoCD GitOps Demo</h1>
                <p>🔥 Successfully deployed via GitOps</p>

                <div class="info">
                    <p><strong>Version:</strong> v2 (Manual Change)</p>
                    <p><strong>Hostname:</strong> ${os.hostname()}</p>
                    <p><strong>Platform:</strong> ${os.platform()}</p>
                    <p><strong>Uptime:</strong> ${Math.floor(os.uptime() / 60)} minutes</p>
                </div>

                <div class="tag">
                    Powered by Kubernetes + ArgoCD ⚡
                </div>
            </div>
        </body>
        </html>
    `);
});

// Health Check (important for Kubernetes)
app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
});

// API Route
app.get("/api/info", (req, res) => {
    res.json({
        message: "ArgoCD Demo API 🚀",
        version: "v2",
        hostname: os.hostname(),
        platform: os.platform(),
        uptime: process.uptime()
    });
});

// Start server
app.listen(3000, () => {
    console.log("🚀 Server running on port 3000");
});
