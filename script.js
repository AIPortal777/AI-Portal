// Random live agents count
setInterval(() => {
    const base = Math.floor(Math.random() * 800) + 1200;
    document.getElementById('agents').textContent = base.toLocaleString();
}, 4000);
