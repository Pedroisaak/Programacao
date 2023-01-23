const AppMessages =
{
  //USER
  UserAlreadyExists: 'Este usuário já existe!',
  UserNotFound: 'Este usuário não existe!',
  EmailAlreadyExists: 'Este e-mail já está cadastrado!',
  InvalidLogin: 'Usuário ou senha incorretos!',
  InvalidToken: 'Token inválido!',
  ErrorToDecode: 'Erro ao decodificar',
  InvalidPassword: 'Senha inválida!',

  //SEEDS
  StartRunSeed: 'Iniciada a execução do seeder',
  ValidateRunSeed: 'há dados, pulando',
  FinishRunSeed: 'Finalizada a execução do seeder',

  //EMAIL
  WelcomeEmailSubject: '[Rembrandtech] Bem-Vindo',
  ForgotEmailSubject: '[Rembrandtech] Confirmação de Esqueci a Senha',
  ErrorToSendEmail: 'Erro ao enviar o e-mail!',
  EmailSend: 'E-mail enviado!',
  TemplateCompiled: 'Template compilado',
  ErrorTemplateCompiled: 'Erro ao compilar o template',

  //UPLOAD
  CreateDir: 'Criado diretório!',
  UploadDirExists: 'Diretório de envio já existe',
  ErrorCreateDir: 'Erro ao criar o diretório de envio!',
  FileUploaded: 'Arquivo enviado: ',
  ErrorNoFileToUpload: 'Não há arquivo para enviar!',
  ErrorToUpload: 'Erro ao enviar o arquivo',
  ErrorToRemove: 'Erro ao remover o arquivo',
  ErrorToListObjects: 'Erro ao listar os objetos',
  SuccessToUpload: 'Arquivo enviado com sucesso!',
  AssetNotFound: 'Asset não encontrado!',

  //DATABASE
  MongoConnected: 'MongoDB conectado!',
  CloseConnectionMongo: 'MongoDB desconectado!.',
  MongoClearCollection: ': limpeza da coleção concluída!',
  MongoDropDatabase: 'Banco de dados deletado!',
  ClearDatabase: 'Limpeza do banco de dados finalizada!',
  CannotClearDbProduction: 'Você só pode limpar a base dados em desenvolvimento!',

  //SERVER 
  AppListening: '🚀 Aplicativo escutando na porta:',
  SigSignalReceived: 'Sinal do SIGTERM recebido.',
  ClosingHttpServer: 'Finalizando conexão com o servidor Http.',
  ClosedHttpServer: 'Conexão com o servidor HTTP finalizada.',
  CurrentIP: 'IP Atual: ',

  // RATE LIMIT
  TooManyAccounts: 'Muitas contas criadas a partir deste IP, tente novamente após 15 minutos',

  // ENV
  EnvFileNotFound: '.env não existe!',
  EnvFileNotFound1: '1-Pare o servidor!',
  EnvFileNotFound2: '2-Crie um arquivo .env na raiz do projeto!',
  EnvFileNotFound3: '3-Copie o conteúdo do arquivo example.env para o arquivo .env!',
  EnvFileNotFound4: '4-Altere as variáveis de ambiente para as suas configurações!',
  EnvFileNotFound5: '5-Rode o servidor novamente!',

  // VALIDATION
  MissingAsset: 'Faltando o arquivo "image"',
}

export { AppMessages }

