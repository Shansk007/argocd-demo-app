const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("🚀 Hello from ArgoCD GitOps Demo- now i have changed manually");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
