import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,

} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'

@WebSocketGateway(
  {
    namespace: '/test',
  }
)
export class WebsocketGateway implements OnGatewayInit,OnGatewayDisconnect,OnGatewayConnection {

  @WebSocketServer() server: Server;


  afterInit(server: Server) {
    console.log(`afterInit`)
  }

  handleConnection(client: Socket) {
    console.log(`handleConnection ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`handleDisconnect ${client.id}`)
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message:string): void {
    // return 'Hello world!';
    console.log(`handleMessage ${message}`);
    // console.log(222,this.server)

    this.server.emit('message', message);
  }
}
