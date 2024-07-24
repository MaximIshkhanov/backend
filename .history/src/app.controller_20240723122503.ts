import { Controller, Get } from "@nestjs/common";

@Controller('/api')
export class AppController {

    constructor(private appService:App)

    @Get('/users')
    getUsers(){
        
    }

}