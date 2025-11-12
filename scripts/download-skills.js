const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Mapping of image filenames to their CDN URLs
// Using Simple Icons CDN and other reliable sources
const imageUrls = {
  // Programming Languages
  'c.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  'cpp.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'csharp.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  'java.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'python.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'js.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'dart.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
  'kotlin.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
  'php.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  
  // Frontend Technologies
  'html.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'css.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'scss.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  'bootstrap.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'tailwind.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'react.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'mui.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
  'flutter.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  
  // Backend Technologies
  'node.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'express.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'spring.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'springboot.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'jsp.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'aspnet.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
  'django.png': 'https://cdn.simpleicons.org/django/092E20',
  'laravel.png': 'https://cdn.simpleicons.org/laravel/FF2D20',
  
  // Databases
  'mysql.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'postgresql.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'mongodb.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'sqlite.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
  'firebase.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'oracle.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
  'sqlserver.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
  
  // Cloud/Hosting
  'netlify.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',
  'vercel.png': 'https://cdn.simpleicons.org/vercel/000000',
  
  // Version Control
  'git.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'github.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  
  // DevOps Tools
  'figma.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'jira.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
  
  // IDE Tools
  'vscode.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  'visualstudio.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg',
  'androidstudio.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
  'intellij.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
  'eclipse.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg',
  'netbeans.png': 'https://cdn.simpleicons.org/apachenetbeanside/1B6AC6',
  'postman.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
  'adobe.png': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg',
};

// Function to download an image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(response.headers['content-type'] || '');
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        file.close();
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
        }
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
      } else {
        file.close();
        if (fs.existsSync(filepath)) {
          fs.unlinkSync(filepath);
        }
        reject(new Error(`Failed to download: ${url} - Status: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(err);
    });
  });
}

// Function to convert SVG to PNG
async function convertSvgToPng(svgPath, pngPath) {
  try {
    await sharp(svgPath)
      .png()
      .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toFile(pngPath);
    fs.unlinkSync(svgPath); // Remove the SVG file after conversion
    return true;
  } catch (error) {
    console.error(`  Error converting SVG to PNG: ${error.message}`);
    return false;
  }
}

// Main function
async function main() {
  const skillsDir = path.join(__dirname, '..', 'public', 'skills');
  
  // Create skills directory if it doesn't exist
  if (!fs.existsSync(skillsDir)) {
    fs.mkdirSync(skillsDir, { recursive: true });
  }
  
  console.log('Starting to download skill images...\n');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const [filename, url] of Object.entries(imageUrls)) {
    const filepath = path.join(skillsDir, filename);
    
    try {
      console.log(`Downloading ${filename}...`);
      
      // Determine if we need to convert (check URL or if filename is PNG)
      const needsConversion = filename.endsWith('.png');
      const tempPath = needsConversion 
        ? filepath.replace('.png', '.svg') 
        : filepath;
      
      const contentType = await downloadImage(url, tempPath);
      
      // Check if downloaded file is SVG (by content-type or file content)
      let isSvg = false;
      if (contentType && contentType.includes('svg')) {
        isSvg = true;
      } else if (fs.existsSync(tempPath)) {
        const content = fs.readFileSync(tempPath, 'utf8');
        if (content.includes('<svg') || content.includes('<?xml')) {
          isSvg = true;
        }
      }
      
      // Convert SVG to PNG if needed
      if (isSvg && needsConversion) {
        if (fs.existsSync(tempPath)) {
          console.log(`  Converting SVG to PNG...`);
          const converted = await convertSvgToPng(tempPath, filepath);
          if (converted) {
            console.log(`  ✓ Converted and saved as ${filename}`);
          } else {
            throw new Error('SVG to PNG conversion failed');
          }
        }
      } else if (!needsConversion || !isSvg) {
        // If we downloaded to temp but don't need conversion, or it's not SVG
        if (tempPath !== filepath && fs.existsSync(tempPath)) {
          fs.renameSync(tempPath, filepath);
        }
        console.log(`  ✓ Downloaded ${filename}`);
      }
      
      successCount++;
    } catch (error) {
      console.error(`  ✗ Failed to download ${filename}: ${error.message}`);
      failCount++;
    }
  }
  
  console.log(`\n\nDownload complete!`);
  console.log(`Success: ${successCount}`);
  console.log(`Failed: ${failCount}`);
  
  if (failCount > 0) {
    console.log('\nNote: Some images failed to download. You may need to download them manually.');
  }
}

main().catch(console.error);

