import { ChannelTypeEnum, IEmailProvider, IEmailOptions, ISmsProvider } from '@notifire/core';


export class EmailTemplateProvider implements IEmailProvider {
  id = '#enter_id_here';
  channelType = ChannelTypeEnum.EMAIL as ChannelTypeEnum.EMAIL;

  constructor(
    /**
     * Choose the part of the config you need, based on provider credentials
    */
    private config: {
      apiKey?: string;
      token?: string;
      id?: string;
      publicKey?: string;
      privateKey?: string;
      from?: string;
    }
  ) {
    /**
     * Here you can initialize the provider using passed credentials
     *
     * Examples:
     * setApiKey(this.config.apiKey);
     * initialize(this.config.privateKey, this.config.publicKey);
     */
  }

  async sendMessage(options: IEmailOptions): Promise<any> {
    /**
     * Here you need to implement provider send capability, make sure to return a promise
     *
     * Example:
     * return await send({
     *   from: options.from || this.config.from,
     *   to: options.to,
     *   html: options.html,
     *   subject: options.subject,
     *   substitutions: {},
     * });
     */
  }
}
