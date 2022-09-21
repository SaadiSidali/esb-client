import { ProfileType } from './profile-type'

export interface UserType {

    id: number;

    username: string;

    email: string;

    imgUrl: string;

    profile: ProfileType;
}
