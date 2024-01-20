import 'reflect-metadata';
import {Controller, Param, Body, Get, Post, Put, Delete, Req, Res} from 'routing-controllers';
import {Request, Response} from "express";

@Controller()
export class UserController {
    @Get('/users')
    getAll(@Req() req: Request, @Res() res: Response) {
        return res.json("hello");
    }

    @Get('/users/:id')
    getOne(@Param('id') id: number) {
        return 'This action returns user #' + id;
    }

    @Post('/users')
    post(@Body() user: any) {
        return 'Saving user...';
    }

    @Put('/users/:id')
    put(@Param('id') id: number, @Body() user: any) {
        return 'Updating a user...';
    }

    @Delete('/users/:id')
    remove(@Param('id') id: number) {
        return 'Removing user...';
    }
}