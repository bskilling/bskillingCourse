#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Directory containing the tool logos
const TOOLS_DIR = './public/tools';

// Function to determine clean name from filename - SPECIFIC MAPPINGS
function getCleanName(filename) {
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, '');

  // Exact filename mappings based on your images
  const exactMappings = {
    '919f7dff-5a07-44b3-9842-c178c2ff4f55': 'animaker',
    '1683823510dd1-e-logo': 'elevenlabs',
    banner: 'bing',
    bannerjpg: 'bing',
    Bing_Fluent_Logo_Text: 'bing',
    'Character.ai_logo': 'character-ai',
    chatgpt_PNG2: 'chatgpt',
    diffit_logo_rmvbg: 'diffit',
    ElevenLabs_logo_2: 'elevenlabs',
    'Free-Full-Color-Angled-2-300x300': 'magic-school',
    Google_Gemini_logo: 'gemini',
    grammarly_500x180: 'grammarly',
    'logo-7': 'crayon',
    'logo-new-fon-2t': 'mindgrasp',
    'new_logo-Cgqf-Owq': 'pictory',
    'Notion-AI-logo_0vg': 'notion-ai',
    'voicify-voice-apps-platform': 'voicify',
  };

  // Check exact matches first
  if (exactMappings[nameWithoutExt]) {
    return exactMappings[nameWithoutExt];
  }

  // Fallback pattern matching for partial matches
  const patterns = [
    { pattern: /animaker/i, name: 'animaker' },
    { pattern: /elevenlabs?/i, name: 'elevenlabs' },
    { pattern: /bing/i, name: 'bing' },
    { pattern: /character/i, name: 'character-ai' },
    { pattern: /chatgpt/i, name: 'chatgpt' },
    { pattern: /diffit/i, name: 'diffit' },
    { pattern: /magic.*school/i, name: 'magic-school' },
    { pattern: /gemini/i, name: 'gemini' },
    { pattern: /grammarly/i, name: 'grammarly' },
    { pattern: /crayon/i, name: 'crayon' },
    { pattern: /mindgrasp/i, name: 'mindgrasp' },
    { pattern: /pictory/i, name: 'pictory' },
    { pattern: /notion/i, name: 'notion-ai' },
    { pattern: /voicify/i, name: 'voicify' },
    { pattern: /dall.*e/i, name: 'dall-e' },
  ];

  for (const { pattern, name } of patterns) {
    if (pattern.test(nameWithoutExt)) {
      return name;
    }
  }

  return null;
}

// Main rename function
async function renameToolFiles() {
  console.log('🔄 Starting file rename process...\n');

  // Check if tools directory exists
  if (!fs.existsSync(TOOLS_DIR)) {
    console.error(`❌ Directory ${TOOLS_DIR} does not exist!`);
    console.log('💡 Please create the directory and add your tool logo files.');
    return;
  }

  // Read all files in the tools directory
  const files = fs.readdirSync(TOOLS_DIR);

  if (files.length === 0) {
    console.log('📁 No files found in ./public/tools directory');
    return;
  }

  console.log(`📁 Found ${files.length} files in ${TOOLS_DIR}:`);
  files.forEach(file => console.log(`   - ${file}`));
  console.log('');

  const renamedFiles = [];
  const skippedFiles = [];

  // Process each file
  for (const file of files) {
    const filePath = path.join(TOOLS_DIR, file);
    const fileExt = path.extname(file);
    const cleanName = getCleanName(file);

    if (cleanName) {
      const newFileName = `${cleanName}${fileExt}`;
      const newFilePath = path.join(TOOLS_DIR, newFileName);

      try {
        // Skip if it's already the target name
        if (file === newFileName) {
          console.log(`✓  Already clean: ${file}`);
          renamedFiles.push(cleanName);
          continue;
        }

        // Check if target file already exists
        if (fs.existsSync(newFilePath)) {
          console.log(`⚠️  Target file ${newFileName} already exists, removing old ${file}`);
          fs.unlinkSync(filePath); // Remove the old file
          renamedFiles.push(cleanName);
          continue;
        }

        // Rename the file
        fs.renameSync(filePath, newFilePath);
        console.log(`✅ Renamed: ${file} → ${newFileName}`);
        renamedFiles.push(cleanName);
      } catch (error) {
        console.error(`❌ Error renaming ${file}:`, error.message);
        skippedFiles.push(file);
      }
    } else {
      console.log(`❓ Unknown file pattern: ${file} (skipped)`);
      skippedFiles.push(file);
    }
  }

  // Remove duplicates and sort
  const uniqueRenamedFiles = [...new Set(renamedFiles)].sort();

  // Output results
  console.log('\n' + '='.repeat(50));
  console.log('🎉 RENAME PROCESS COMPLETED!');
  console.log('='.repeat(50));

  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Successfully processed: ${renamedFiles.length} files`);
  console.log(`   ⚠️  Skipped: ${skippedFiles.length} files`);

  if (skippedFiles.length > 0) {
    console.log(`\n⚠️  Skipped files:`);
    skippedFiles.forEach(file => console.log(`   - ${file}`));
  }

  // Output the clean array for use in React
  console.log(`\n🚀 COPY THIS ARRAY FOR YOUR REACT COMPONENT:`);
  console.log('='.repeat(50));
  console.log('const aiTools = [');
  uniqueRenamedFiles.forEach((tool, index) => {
    const comma = index === uniqueRenamedFiles.length - 1 ? '' : ',';
    console.log(`  "${tool}"${comma}`);
  });
  console.log('];');

  // Output React component usage with correct paths
  console.log(`\n🔧 REACT COMPONENT USAGE:`);
  console.log('='.repeat(50));
  console.log(`const toolsWithLogos = aiTools.map(tool => ({
  name: tool.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' '),
  slug: tool,
  logo: \`/tools/\${tool}.png\` // Next.js public folder path
}));

// In your JSX:
{toolsWithLogos.map(tool => (
  <div key={tool.slug} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
    <img src={tool.logo} alt={tool.name} className="w-12 h-12 mx-auto mb-2" />
    <div className="font-semibold text-gray-900 text-sm">{tool.name}</div>
  </div>
))}`);

  console.log(`\n💡 Current files in /public/tools after rename:`);
  const finalFiles = fs.readdirSync(TOOLS_DIR).sort();
  finalFiles.forEach(file => console.log(`   📄 ${file}`));

  console.log(`\n🔥 BONUS - Tools data object:`);
  console.log('const aiToolsData = {');
  uniqueRenamedFiles.forEach((tool, index) => {
    const displayName = tool
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    const comma = index === uniqueRenamedFiles.length - 1 ? '' : ',';
    console.log(`  "${tool}": { name: "${displayName}", logo: "/tools/${tool}.png" }${comma}`);
  });
  console.log('};');
}

// Run the script
if (require.main === module) {
  renameToolFiles().catch(console.error);
}

module.exports = { renameToolFiles, getCleanName };
