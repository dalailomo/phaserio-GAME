import Phaser from "phaser";
import {
    SocketClientPluginType,
    SOCKET_CLIENT_PLUGIN_KEY,
} from "../plugins/socket-client";

export default class Demo extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    preload() {
        this.load.image("ship", "assets/spaceShips_001.png");
    }

    create() {
        const socketClientPlugin = this.plugins.get(
            SOCKET_CLIENT_PLUGIN_KEY
        ) as SocketClientPluginType;

        console.log(socketClientPlugin.getSocket());
    }
}
