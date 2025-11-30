function runAI() {
    const terminal = document.getElementById('terminal');
    const lines = [
        "> Initializing autonomous agent...",
        "Connected to Solana mainnet",
        "Negotiating payment: 0.001 USDC",
        "Payment confirmed in 0.38s",
        "[AI] Executing task autonomously...",
        "[DONE] Profit: +0.047 USDC"
    ];
    let i = 0;
    const interval = setInterval(() => {
        if (i < lines.length) {
            terminal.textContent += "\n" + lines[i++];
            terminal.scrollTop = terminal.scrollHeight;
        } else clearInterval(interval);
    }, 600);

    setTimeout(() => {
        document.getElementById('agents').textContent = Math.floor(Math.random()*3000)+1200;
    }, 1200);
}
