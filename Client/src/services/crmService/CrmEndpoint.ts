import { ICrmAccount } from './models/ICrmAccount';
import { ICrmAccountService } from './models/ICrmAccountService';
import { ICrmAttachment } from './models/ICrmAttachment';
import { ICrmCannedResponse } from './models/ICrmCannedResponse';
import { ICrmConnection } from './models/ICrmConnection';
import { ICrmContact } from './models/ICrmContact';
import { ICrmCsProject } from './models/ICrmCsProject';
import { ICrmEmail } from './models/ICrmEmail';
import { ICrmNote } from './models/ICrmNote';
import { ICrmTag } from './models/ICrmTag';
import { ICrmTicket } from './models/ICrmTicket';
import { ICrmUser } from './models/ICrmUser';

export type CrmEndpoint = {
  WhoAmI: ICrmUser;
  systemusers: ICrmUser[];
  contacts: ICrmContact[];
  dyn_tags: ICrmTag[];
  emails: ICrmEmail[];
  emailbody: string;
  activitymimeattachments: ICrmAttachment[];
  ken_services: ICrmAccountService[];
  ken_customersuccessprojects: ICrmCsProject[];
  incidents: ICrmTicket[];
  connections: ICrmConnection[];
  annotations: ICrmNote[];
  templates: ICrmCannedResponse[];
  accounts: ICrmAccount[];
};
