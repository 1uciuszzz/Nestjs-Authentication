import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CoffeesService } from "./coffees.service";
import { CreateCoffeeDto } from "./dto/create-coffee.dto";
import { UpdateCoffeeDto } from "./dto/update-coffee.dto";
import { Roles } from "src/iam/authorization/decorators/roles.decorator";
import { Role } from "src/users/enums/role.enum";

@Controller("coffees")
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Post()
  @Roles(Role.Admin)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Get()
  findAll() {
    return this.coffeesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.coffeesService.findOne(+id);
  }

  @Patch(":id")
  @Roles(Role.Admin)
  update(@Param("id") id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(+id, updateCoffeeDto);
  }

  @Delete(":id")
  @Roles(Role.Admin)
  remove(@Param("id") id: string) {
    return this.coffeesService.remove(+id);
  }
}
