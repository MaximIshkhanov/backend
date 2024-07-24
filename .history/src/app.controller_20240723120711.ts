import { Controller } from "@nestjs/common";

@Controller('/api')
export class AppController {
    @Ge
    getUsers(){
        return [{id:1, name:'MaximIsh'}]
    }

}