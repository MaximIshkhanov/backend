import { Controller, Get } from "@nestjs/common";

@Controller('/api')
export class AppController {

    constructor(private appService)

    @Get('/users')
    getUsers(){
        
    }

}