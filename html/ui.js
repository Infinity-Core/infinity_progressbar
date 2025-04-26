// Progressbar logic
let pb_interval = null;
let pb_total = 0;
let pb_left = 0;

window.addEventListener('message', function(event) {
    const data = event.data;
    if (data.action === 'show') {
        if (data.text && data.time) {
            // Show progressbar
            document.getElementById('progressbar-container').style.display = 'flex';
            document.getElementById('progressbar-desc').innerText = data.text || '';
            pb_total = data.time || 1000;
            pb_left = pb_total;
            // Show image if provided
            if (data.itemImage) {
                let pbImg = document.getElementById('progressbar-img');
                pbImg.style.display = 'block';
                pbImg.src = data.itemImage;
            } else {
                document.getElementById('progressbar-img').style.display = 'none';
                document.getElementById('progressbar-img').src = '';
            }
            updateBar();
            if (pb_interval) clearInterval(pb_interval);
            pb_interval = setInterval(() => {
                pb_left -= 100;
                updateBar();
                if (pb_left <= 0) {
                    clearInterval(pb_interval);
                    document.getElementById('progressbar-container').style.display = 'none';
                    document.getElementById('progressbar-img').style.display = 'none';
                    document.getElementById('progressbar-img').src = '';
                    fetch(`https://${GetParentResourceName()}/finish`, {method: 'POST'});
                }
            }, 100);
        }
    } else if (data.action === 'hide') {
        document.getElementById('progressbar-container').style.display = 'none';
        if (pb_interval) clearInterval(pb_interval);
    }
});

function updateBar() {
    let percent = Math.max(0, Math.min(1, pb_left / pb_total));
    document.getElementById('progressbar-bar').style.width = (percent * 100) + '%';
    document.getElementById('progressbar-time').innerText = (pb_left/1000).toFixed(1) + 's';
} 