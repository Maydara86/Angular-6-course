import { Component } from '@angular/core';

@Component({
    selector: '[app-server]',
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: white
        }
    `]
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "offline";
    allowNewServer = true;
    serverCreationStatus = "The Server is not yet created!";
    serverName: string = "";
    serverCreated: boolean = false;
    
    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        if(this.serverStatus === "online") {
            return "green"
        }
        return "red";
    }

    constructor() {
        this.serverStatus = Math.random() < 0.5 ? "offline" : "online"; 
    }

    createNewServer() {
        this.serverCreated = true;
        return this.serverCreationStatus = "Server Created Successfully! Name is " + this.serverName;
    }

    onServerUpdateName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }
    
}