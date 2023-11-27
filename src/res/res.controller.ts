/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { ResService } from './res.service';
import { res } from '@prisma/client';

@Controller('api/v1/res')
export class ResController {
    constructor(private readonly resService: ResService){}

    @Post("/selectResList")
    async selectResList(@Body() pSelectResList: res): Promise<res[]> {
        return this.resService.selectResList( pSelectResList );
    }

    @Post("/insertRes")
    async insertRes(@Body() pInsertRes: res): Promise<res> {
        return this.resService.insertRes( pInsertRes );
    }

    @Post("/updateRes")
    async updateRes(@Body() pUpdateRes: res): Promise<res> {
        return this.resService.updateRes( pUpdateRes );
    }

    @Post("/deleteRes")
    async deleteRes(@Body() pDeleteRes: res): Promise<res> {
        return this.resService.deleteRes( pDeleteRes );
    }
}
