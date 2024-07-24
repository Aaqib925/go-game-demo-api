import { Injectable } from '@nestjs/common';
import AppConfig from 'configs/app.config';
import { EmailTemplates } from '../../constant';
import { Logger } from 'helpers/logger.helper';
import { SendEmailArgs } from './types';
import { createTransport } from 'nodemailer';
import * as Mail from 'nodemailer/lib/mailer';
/* Import email templates here */
import WelcomeTemplate from './templates/welcome';
import InviteTemplete from './templates/invitation';
const TEMPLATES: {
  [key in keyof typeof EmailTemplates]: (data: any) => string;
} = {
  WELCOME: WelcomeTemplate,
  PROJECT_TEAM_MEMBER_INVITE: InviteTemplete,
};

@Injectable()
export default class EmailService {
  private _transporter: Mail = null;

  constructor() {
    this._transporter = createTransport({
      host: AppConfig.MAIL.HOST,
      port: AppConfig.MAIL.PORT,
      auth: {
        user: AppConfig.MAIL.USER,
        pass: AppConfig.MAIL.PASS,
      },
      service: 'smtp',
      secure: false,
      pool: true,
      from: AppConfig.MAIL.FROM_EMAIL,
    });
  }
  async Send(args: SendEmailArgs<any>) {
    try {
      const { email, data, subject, template, from } = args;
      const result = await this._transporter.sendMail({
        to: email,
        subject: subject,
        html: TEMPLATES[template](data),
        from,
      });
      Logger.Info('Mail Sent successfully', 'MAILER');
      Logger.Info(result, 'MAILER');

      return true;
    } catch (e) {
      Logger.Error(e, 'MAILER');
    }
    return false;
  }
}
