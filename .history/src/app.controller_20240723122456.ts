import { Controller, Get } from "@nestjs/common";

@Controller('/api')
export class AppController {

    constructor(private appSe)

    @Get('/users')
    getUsers(){
        
    }

}