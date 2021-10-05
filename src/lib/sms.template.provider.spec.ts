import { SmsTemplateProvider } from './sms.template.provider';

test('should trigger sms correctly', async () => {
  const provider = new SmsTemplateProvider({
    apiKey: 'api_key_1234',
    from: '+1123456789',
    token:'sdsdsdsd',
    id:'sdsdsdsd',
    publicKey: 'sdsdsdsd',
    privateKey: 'sdsdsdsd',
  });

  await provider.sendMessage({
    to: '+1098765432',
    content: 'Sms Content',
  });

  expect(1).toBe(0);
});
