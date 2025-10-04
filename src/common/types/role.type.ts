import { ROLE } from 'src/common/constants/role.constant';

export type Role = (typeof ROLE)[keyof typeof ROLE];
