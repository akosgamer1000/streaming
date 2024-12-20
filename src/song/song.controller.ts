import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { query } from 'express';

@Controller('song')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songService.create(createSongDto);
  }

  @Get()
  findAll() {
    return this.songService.findAll();
  }
  @Get('freesongs')
  freesong1(){
    return this.songService.freesong()
  }

  @Get('top')
  findTop(@Query('count') coun:string="10"){
      return this.songService.findtop(coun)
  }
  @Get('popularArtists')
  findpopular(){
      
      return this.songService.author()
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSongDto: UpdateSongDto) {
    return this.songService.update(+id, updateSongDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.songService.remove(+id);
  }
}
