import { Component } from '@angular/core';

@Component({
    selector: '[app-server]',
    templateUrl: './server.component.html',
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "offline";
    allowNewServer = false;
    serverCreationStatus = "The Server is not yet created!";
    serverName: string = "";

    getServerStatus() {
        return this.serverStatus;
    }

    constructor() {
        setTimeout(() => {this.allowNewServer = true}, 2000);
    }

    createNewServer() {
        return this.serverCreationStatus = "Server Created Successfully!";
    }

    onServerUpdateName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }
    
}