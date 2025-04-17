const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Tạo thư mục .tailwind nếu chưa tồn tại
const tailwindDir = path.join(__dirname, '../.tailwind');
if (!fs.existsSync(tailwindDir)) {
  fs.mkdirSync(tailwindDir, { recursive: true });
}

try {
  // Compile TypeScript file với tsconfig.colors.json
  execSync('npx tsc --project scripts/tsconfig.colors.json', { stdio: 'inherit' });

  // Đọc nội dung file đã được compile
  const compiledPath = path.join(__dirname, '../.tailwind/theme/colors.js');
  let content = fs.readFileSync(compiledPath, 'utf8');

  // Chỉnh sửa import statement
  content = content.replace(
    'import tColors from \'tailwindcss/colors\';',
    'const tColors = require(\'tailwindcss/colors\');'
  );

  // Chỉnh sửa export statement
  content = content.replace(
    'export default colors;',
    'module.exports = colors;'
  );

  // Ghi nội dung đã chỉnh sửa vào file mới
  fs.writeFileSync(path.join(tailwindDir, 'colors.js'), content);

  // Xóa thư mục tạm (theme)
  fs.rmSync(path.join(tailwindDir, 'theme'), { recursive: true, force: true });

  console.log('Colors file generated successfully!');
} catch (error) {
  console.error('Error generating colors file:', error);
  process.exit(1);
} 