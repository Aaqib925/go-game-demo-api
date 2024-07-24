import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserStatus, UserType } from '@prisma/client';
import { UserSettingsModel } from '../../user_settings/dto/response/model_user_settings';

export default class GetMeResponseDTO {
    @ApiProperty()
    id: number;

    @ApiProperty()
    firstName: string;

    @ApiProperty({ enum: UserType })
    type: UserType;

    @ApiProperty()
    email: string;

    @ApiProperty()
    phone: string;

    @ApiProperty({ enum: UserStatus })
    status: UserStatus;

    @ApiProperty()
    settings?: UserSettingsModel;
}
