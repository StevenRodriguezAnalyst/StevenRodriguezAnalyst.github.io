import {readdir, readFile} from 'node:fs/promises';
import {extname, join, relative} from 'node:path';
import {fileURLToPath} from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const publicRoot = join(projectRoot, 'public');
const failures = [];

function readUint16(buffer, offset, littleEndian) {
  return littleEndian ? buffer.readUInt16LE(offset) : buffer.readUInt16BE(offset);
}

function readUint32(buffer, offset, littleEndian) {
  return littleEndian ? buffer.readUInt32LE(offset) : buffer.readUInt32BE(offset);
}

function hasGpsMetadata(buffer) {
  const exifHeader = Buffer.from('Exif\0\0');
  const exifOffset = buffer.indexOf(exifHeader);
  if (exifOffset < 0) return false;

  const tiffOffset = exifOffset + exifHeader.length;
  const byteOrder = buffer.toString('ascii', tiffOffset, tiffOffset + 2);
  if (byteOrder !== 'II' && byteOrder !== 'MM') return false;

  const littleEndian = byteOrder === 'II';
  const firstIfdOffset = tiffOffset + readUint32(buffer, tiffOffset + 4, littleEndian);
  const entryCount = readUint16(buffer, firstIfdOffset, littleEndian);

  for (let index = 0; index < entryCount; index += 1) {
    const entryOffset = firstIfdOffset + 2 + index * 12;
    if (readUint16(buffer, entryOffset, littleEndian) === 0x8825) return true;
  }

  return false;
}

async function listFiles(directory) {
  const entries = await readdir(directory, {withFileTypes: true});
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await listFiles(path));
    else if (entry.isFile()) files.push(path);
  }
  return files;
}

for (const path of await listFiles(publicRoot)) {
  if (!['.jpg', '.jpeg'].includes(extname(path).toLowerCase())) continue;
  const contents = await readFile(path);
  if (hasGpsMetadata(contents)) {
    failures.push(`${relative(projectRoot, path)} contains GPS metadata`);
  }
}

const resumePreview = await readFile(join(publicRoot, 'resume.html'), 'utf8');
if (/lorem ipsum/i.test(resumePreview)) {
  failures.push('public/resume.html still contains placeholder text');
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Public assets passed privacy and résumé consistency checks.');
}
