import { AppDataSource } from '../;
import { Perguntas } from '../../resources/perguntas/entities/perguntas.entity';
import * as XLSX from 'xlsx';

async function seedPerguntas() {
  // Inicializa a conexão com o banco de dados
  await AppDataSource.initialize();
  const perguntasRepository = AppDataSource.getRepository(Perguntas);

  const perguntas: Perguntas[] = [];

  // Leitura do arquivo XLSX
  const workbook = XLSX.readFile('src/database/seeds/perguntas.xlsx');
  const sheetName = workbook.SheetNames[0]; // Seleciona a primeira planilha
  const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

  worksheet.forEach((row: any) => {
    const pergunta = new Perguntas();
    pergunta.nivel = row['nivel']; // Coluna "nivel" do arquivo Excel
    pergunta.text = row['pergunta']; // Coluna "pergunta" do arquivo Excel
    perguntas.push(pergunta);
  });

  // Inserir dados no banco de dados
  try {
    await perguntasRepository.save(perguntas);
    console.log('Perguntas salvas com sucesso no banco de dados!');
  } catch (error) {
    console.error('Erro ao salvar perguntas:', error);
  } finally {
    await AppDataSource.destroy();
  }
}

seedPerguntas();
