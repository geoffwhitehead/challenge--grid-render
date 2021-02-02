import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { FormattedResponse } from "./types";

@Controller("houses")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): Promise<FormattedResponse> {
    return this.appService.findAll();
  }
}
