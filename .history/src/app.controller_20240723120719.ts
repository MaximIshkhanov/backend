import { Controller } from "@nestjs/common";

@Controller('/api')
export class AppController {
    @Get(
    getUsers(){
        return [{id:1, name:'MaximIsh'}]
    }

}