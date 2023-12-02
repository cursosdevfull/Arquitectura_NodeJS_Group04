import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // const controller = UsersController;
    // console.log('path', Reflect.getMetadata('path', controller));
    // console.log('paths', Reflect.getMetadata('paths', controller));
    return this.appService.getHello();
  }
}

/*function Controlador(path: string) {
  return function (constructor: Function) {
    console.log('Controlador', path);
    Reflect.defineMetadata('path', path, constructor);
  };
}

function MetodoGet(path: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ): any {
    if (!Reflect.hasMetadata('paths', target.constructor)) {
      Reflect.defineMetadata('paths', [], target.constructor);
    }

    const paths = Reflect.getMetadata('paths', target.constructor);

    paths.push({
      path,
      verb: 'get',
      methodName: propertyKey,
    });

    Reflect.defineMetadata('paths', paths, target.constructor);
  };
}

@Controlador('/users')
class UsersController {
  constructor() {
    console.log('UsersController');
  }

  @MetodoGet('/list')
  list() {
    console.log('list');
  }
}*/
