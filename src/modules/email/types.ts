import { EmailTemplates } from '../../constant';

export type SendEmailArgs<T> = {
  template: EmailTemplates;
  subject: string;
  email: string;
  data: T;
  from: string;
};

export type WelcomeEmailPayload = {
  name: string;
  link: string;
};

export type InviteProjectMemberEmailPayload = {
  invite_sender_name: string;
  project_name: string;
  invite_link: string;
  receiver_name: string;
  receiver_email: string;
};
