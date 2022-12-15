import { MailService } from './mail.service';
export class SMTPMail implements MailService {
  sendEmail(): string {
    throw new Error('Method not implemented');
  }
}
