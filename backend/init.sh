echo "Iniciando o backend..."

echo "Executando as migrations..."
npx typeorm migration:run

echo "Iniciando o servidor..."
npm start