<!-- index.html -->
<HTML>
    <HEAD>
        <SCRIPT src="https://cdn.3dverse.com/legacy/sdk/latest/SDK3DVerse.js"></SCRIPT>
        <SCRIPT src="./AppConfig.js"></SCRIPT>

        <SCRIPT>
            window.addEventListener('load', async () =>
            {
                const connectionInfo = await SDK3DVerse.webAPI.createOrJoinSession(AppConfig.sceneUUID);

                SDK3DVerse.notifier.on('onLoadingStarted', () => document.getElementById("message").innerHTML = "Connecting...");
                SDK3DVerse.notifier.on('onLoadingProgress', (status) => document.getElementById("message").innerHTML = status.message);
                SDK3DVerse.notifier.on('onLoadingEnded', (status) => document.getElementById("message").innerHTML = status.message);

                SDK3DVerse.setupDisplay(document.getElementById('display_canvas'));
                SDK3DVerse.startStreamer(connectionInfo);
            });
        </SCRIPT>
    </HEAD>

    <BODY>
        <DIV id="message">Loading...</DIV>
        <CANVAS tabindex="1" id="display_canvas" width="1280" height="720"></CANVAS>
    </BODY>
</HTML>
