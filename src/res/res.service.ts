/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { res } from '@prisma/client';

@Injectable()
export class ResService {
    constructor(private prismaService: PrismaService){}

    // 전체조회
    async selectResList(pSelectResList: res): Promise<res[]>{
        return this.prismaService.res.findMany({ where: { date: { startsWith: pSelectResList.date}, name: { startsWith: pSelectResList.name} } });
    }

    // 추가
    async insertRes(pInsertRes: res): Promise<res>{
        if(!pInsertRes.res_seq) {
            return this.prismaService.res.create( {data: {date: pInsertRes.date, name: pInsertRes.name, amt: pInsertRes.amt}} );    
        } else if(!!pInsertRes.res_seq) {
            return this.prismaService.res.update( {where: {res_seq: Number(pInsertRes.res_seq)}, data: {date: pInsertRes.date, name: pInsertRes.name, amt: pInsertRes.amt}} );
        }
    }

    // 수정
    async updateRes(pUpdateRes: res): Promise<res>{
        return this.prismaService.res.update( {where: {res_seq: Number(pUpdateRes.res_seq)}, data: pUpdateRes} );
    }

    // 삭제
    async deleteRes(pDeleteRes: res): Promise<res>{
        return this.prismaService.res.delete( {where: {res_seq: Number(pDeleteRes.res_seq)}} );
    }
}
