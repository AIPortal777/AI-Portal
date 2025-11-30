// Live agents counter
setInterval(() => {
    const base = Math.floor(Math.random() * 1000) + 1200;
    document.getElementById('agents').textContent = base.toLocaleString();
}, 5000);

// Phantom Wallet Connect
document.getElementById('connect-wallet').onclick = connect;
document.getElementById('connect-wallet2').onclick = connect;

async function connect() {
    if (window.solana && window.solana.isPhantom) {
        try {
            await window.solana.connect();
            alert("Phantom connected! Public key: " + window.solana.publicKey.toString().slice(0,8) + "...");
        } catch (err) { alert("Connection rejected"); }
    } else {
        alert("Please install Phantom wallet!");
        window.open("https://phantom.app", "_blank");
    }
}
