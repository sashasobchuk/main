import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export function CustomRequired(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'customRequired',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return value !== null && value !== undefined && value !== ''; // Basic check for empty values
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} is a required field`; // Dynamic error message
        },
      },
    });
  };
}
