"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLivreDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_livre_dto_1 = require("./create-livre.dto");
class UpdateLivreDto extends (0, mapped_types_1.PartialType)(create_livre_dto_1.CreateLivreDto) {
}
exports.UpdateLivreDto = UpdateLivreDto;
//# sourceMappingURL=update-livre.dto.js.map