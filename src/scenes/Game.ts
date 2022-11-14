import Phaser from "phaser";
import {
    SocketClientPluginType,
    SOCKET_CLIENT_PLUGIN_KEY,
} from "../plugins/socket-client";
import { HANDLE_PLAYER_DATA_EVENT } from "../../phaserio-SERVER/modules/socket-handlers/handle-player-data/index";
import { Player } from "../../phaserio-SERVER/modules/socket-handlers/handle-player-data/types";

export default class Demo extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    preload() {
        this.load.image("ship", "assets/spaceShips_001.png");
    }

    create() {
        const socket = (
            this.plugins.get(SOCKET_CLIENT_PLUGIN_KEY) as SocketClientPluginType
        ).getSocket();

        console.log("Emitting", socket);

        socket.emit(HANDLE_PLAYER_DATA_EVENT.CE_AddPlayer, {
            id: "foomadorss2s",
            name: "Foomadoris",
            state: {
                x: 10,
                y: 20,
                rotation: 45,
            },
        } as Player);
    }
}
