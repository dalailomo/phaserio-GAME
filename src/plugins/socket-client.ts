import { io, Socket } from "socket.io-client";

export const SOCKET_CLIENT_PLUGIN_KEY = "SocketClientPlugin";

export type SocketClientPluginType = Phaser.Plugins.BasePlugin & {
    getSocket: () => Socket;
};

export default class SocketClientPlugin extends Phaser.Plugins.BasePlugin {
    private socket!: Socket;

    constructor(pluginManager: Phaser.Plugins.PluginManager) {
        super(pluginManager);
    }

    init() {
        this.socket = io("http://localhost:3001", {
            query: {
                name,
            },
        });
    }

    getSocket(): Socket {
        return this.socket;
    }
}
