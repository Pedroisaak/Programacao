/* 
                                    FS
O módulo fs disponibiliza diversas funcionalidades úteis para acessar e interagir com o file system.
Não há necessidade de intalá-lo. Sendo parte do núcleo do Node.js, basta importar para poder usá-lo:
const fs = require('fs')


fs.access(): checa se o arquivo existe e se o Node.js pode acessá-lo com suas permissões atuais
fs.appendFile(): acrescenta dados em um arquivo. Se o arquivo não existir, ele é criado.
fs.chmod(): muda as permissões de um arquivo especificado pelo nome que foi passado. Relacionado: fs.lchmod(), fs.fchmod()
fs.chown(): muda o proprietário e o grupo do arquivo especificado pelo nome que foi passado. Relacionado: fs.fchown(), fs.lchown()
fs.close(): fecha um descriptor de arquivo
fs.copyFile(): copia um arquivo
fs.createReadStream(): cria uma stream de arquivo para leitura
fs.createWriteStream(): cria uma stream de arquivo para escrita
fs.link(): cria um novo hard link para um arquivo
fs.mkdir(): cria um novo diretório
fs.mkdtemp(): cria um novo diretório temporário
fs.open(): define o file mode
fs.readdir(): lê os conteúdos de um diretório
fs.readFile(): lê os conteúdos de um arquivo. Relacionado: fs.read()
fs.readlink(): lê o valor de um link simbólico
fs.realpath(): resolve caminhos relativos de arquivo com ponteiros (., ..) para o caminho completo
fs.rename(): renomeia um arquivo ou pasta
fs.rmdir(): deleta um diretório
fs.stat(): retorna o status do arquivo identificado pelo nome que foi passado. Relacionado: fs.fstat(), fs.lstat()
fs.symlink(): cria um novo link simbólico para um arquivo
fs.truncate(): trunca o arquivo identificado pelo nome que foi passado para o tamanho especificado. Relacionado: fs.ftruncate()
fs.unlink(): remove um arquivo ou um link simbólico
fs.unwatchFile(): para de observar mudanças em um arquivo
fs.utimes(): muda a timestamp do arquivo identificado pelo nome que foi passado. Relacionado: fs.futimes()
fs.watchFile(): começa a observar muddanças em um arquivo. Relacionado: fs.watch()
fs.writeFile(): escreve dados em um arquivo. Relacionado: fs.write()

*/

const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for(let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    if (/\.git/g.test(fileFullPath)) continue;
    if (/node_modules/g.test(fileFullPath)) continue;

    if(stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }

    if (
      !/\.html$/g.test(fileFullPath)
    ) continue;
    console.log(fileFullPath);
  }
}
readdir('C:/Programacao/Programacao/Java Script/Curso Luiz Otavio Miranda');
