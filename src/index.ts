import Phaser from "phaser";
import config from "./config";
import SocketClientPlugin, {
    SOCKET_CLIENT_PLUGIN_KEY,
} from "./plugins/socket-client";
import GameScene from "./scenes/Game";

new Phaser.Game(
    Object.assign(config, {
        scene: [GameScene],
        plugins: {
            global: [
                {
                    key: SOCKET_CLIENT_PLUGIN_KEY,
                    plugin: SocketClientPlugin,
                    start: true,
                },
            ],
        },
    })
);
