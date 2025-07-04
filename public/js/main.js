let countdown = window.serverConfig.countdownTime;
const fivemUrl = `fivem://connect/${window.serverConfig.ip}:${window.serverConfig.port}`;

function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    
    if (countdownElement) {
        const minutes = Math.floor(countdown / 60);
        const seconds = countdown % 60;
        const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        countdownElement.innerText = formattedTime;
        
        if (countdown <= 0) {
            connectToServer();
        } else {
            countdown--;
            setTimeout(updateCountdown, 1000);
        }
    }
}

function connectToServer() {
    showLoadingMessage();
    
    try {
        window.location.href = fivemUrl;
        
        setTimeout(() => {
            showConnectionInfo();
        }, 3000);
        
    } catch (error) {
        console.error('FiveM connection error:', error);
        showConnectionInfo();
    }
}

function showLoadingMessage() {
    const body = document.body;
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading';
    loadingDiv.textContent = 'Connecting to FiveM';
    body.appendChild(loadingDiv);
}

function showConnectionInfo() {
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        countdownElement.innerHTML = `
            <div style="font-size: 1rem; line-height: 1.5;">
                <p>If FiveM didn't open automatically:</p>
                <p style="color: #17e9d7; margin-top: 10px;">
                    ${window.serverConfig.ip}:${window.serverConfig.port}
                </p>
                <p style="font-size: 0.8rem; margin-top: 10px;">
                    You can enter this address manually in FiveM
                </p>
            </div>
        `;
    }
}

window.addEventListener('load', function() {
    console.log('FiveM Connector started');
    console.log('Server:', window.serverConfig.serverName);
    console.log('Address:', `${window.serverConfig.ip}:${window.serverConfig.port}`);
    
    initializeAudio();
    updateCountdown();
});

function initializeAudio() {
    const audio = document.getElementById('background-audio');
    if (audio) {
        audio.volume = 0.3;
        
        audio.addEventListener('error', function() {
            console.warn('Background music could not be loaded');
        });
        
        audio.addEventListener('canplaythrough', function() {
            console.log('Background music loaded successfully');
        });
        
        document.addEventListener('click', function() {
            if (audio.paused) {
                audio.play().catch(function(error) {
                    console.warn('Audio autoplay prevented by browser:', error);
                });
            }
        }, { once: true });
        
        document.addEventListener('keydown', function() {
            if (audio.paused) {
                audio.play().catch(function(error) {
                    console.warn('Audio autoplay prevented by browser:', error);
                });
            }
        }, { once: true });
        
        document.addEventListener('touchstart', function() {
            if (audio.paused) {
                audio.play().catch(function(error) {
                    console.warn('Audio autoplay prevented by browser:', error);
                });
            }
        }, { once: true });
    }
}

window.addEventListener('load', function() {
    const video = document.getElementById('background-video');
    if (video) {
        video.addEventListener('error', function() {
            console.warn('Video could not be loaded, background will remain black');
            document.body.style.background = 'linear-gradient(45deg, #000000, #1a1a1a)';
        });
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        countdown = 0;
        updateCountdown();
    }
    
    if (event.key === 'Enter') {
        countdown = 0;
        updateCountdown();
    }
    
    if (event.key === ' ') {
        event.preventDefault();
    }
});

document.addEventListener('touchstart', function() {
    countdown = 1;
});

if (window.location.hostname === 'localhost' || window.location.hostname === '46.203.182.30') {
    console.log('=== FiveM Connector Debug ===');
    console.log('Server Config:', window.serverConfig);
    console.log('FiveM URL:', fivemUrl);
    console.log('============================');
}
