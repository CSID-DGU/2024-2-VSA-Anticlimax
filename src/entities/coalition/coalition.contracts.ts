import { z } from 'zod';

export const CreateCoalitionDtoSchema = z.object({
    contactName: z.string().min(1, '담당자 성함을 입력해주세요.'),
    contactInfo: z.string().min(1, '연락처를 입력해주세요.'),
    email: z.string().email('올바른 이메일 형식을 입력해주세요.'),
    inquiryContent: z.string().min(1, '문의 내용을 입력해주세요.'),
});

export type CreateCoalitionDto = z.infer<typeof CreateCoalitionDtoSchema>;
