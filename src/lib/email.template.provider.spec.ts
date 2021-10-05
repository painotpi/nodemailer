import { EmailTemplateProvider } from './email.template.provider';

test('should trigger email correctly', async () => {
  const provider = new EmailTemplateProvider({
    apiKey: 'api_key_1234',
    from: 'test@tet.com',
    token:'sdsdsdsd',
    id:'sdsdsdsd',
    publicKey: 'sdsdsdsd',
    privateKey: 'sdsdsdsd',
  });

  await provider.sendMessage({
    to: 'test@test2.com',
    subject: 'test subject',
    html: '<div> Mail Content </div>',
  });

  expect(1).toBe(0);
});
