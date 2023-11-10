"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class SignInUserDto {
}
exports.SignInUserDto = SignInUserDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "L'email est obligatoire" }),
    (0, class_validator_1.IsEmail)({}, { message: "L'email n'est pas valide" }),
    (0, swagger_1.ApiProperty)({
        description: "email de l'utilisateur",
    }),
    __metadata("design:type", String)
], SignInUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Veuillez entrer un mot de passe' }),
    (0, class_validator_1.MinLength)(6, { message: 'Le mot de passe doit faire au moins 8 caractéres' }),
    (0, swagger_1.ApiProperty)({
        description: "mot de passe de l'utilisateur",
    }),
    __metadata("design:type", String)
], SignInUserDto.prototype, "password", void 0);
//# sourceMappingURL=user-signin.dto.js.map