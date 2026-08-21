// Higgsfield натижаларини юклаб, веб учун сиқиш (PNG→JPG 1920w, MP4→кўчириш)
// Ишлатиш: node fetch-media.mjs  (URL рўйхати пастда — керак бўлса янгила)
import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';

const MED = path.join(import.meta.dirname, 'media');
fs.mkdirSync(MED, { recursive: true });

const IMAGES = {
  'm1': 'https://d8j0ntlcm91z4.cloudfront.net/user_3HwrSvHvv1xZKbOXkQBoi7JbcTp/hf_20260821_084054_eb756e37-de8c-4442-97ce-290578350984.png',
  'm2': 'https://d8j0ntlcm91z4.cloudfront.net/user_3HwrSvHvv1xZKbOXkQBoi7JbcTp/hf_20260821_084054_d35786f1-a692-49a6-a286-6419609d3e95.png',
  'm3': 'https://d8j0ntlcm91z4.cloudfront.net/user_3HwrSvHvv1xZKbOXkQBoi7JbcTp/hf_20260821_084054_161c2e59-2ed1-4d8e-aac2-28d9b031df56.png',
  'm4': 'https://d8j0ntlcm91z4.cloudfront.net/user_3HwrSvHvv1xZKbOXkQBoi7JbcTp/hf_20260821_084055_23206f36-dc63-4488-ab60-a18ed1c8d226.png',
  'm5': 'https://d8j0ntlcm91z4.cloudfront.net/user_3HwrSvHvv1xZKbOXkQBoi7JbcTp/hf_20260821_084054_8c444484-2424-43f9-b60e-812e7f86780a.png',
  'm6': 'https://d8j0ntlcm91z4.cloudfront.net/user_3HwrSvHvv1xZKbOXkQBoi7JbcTp/hf_20260821_084054_8d8dee92-ddef-4de1-9537-e3c04e69750c.png',
  'm7': 'https://d8j0ntlcm91z4.cloudfront.net/user_3HwrSvHvv1xZKbOXkQBoi7JbcTp/hf_20260821_084053_b1e5f23b-6f60-43e1-b43d-268e200654a8.png',
  'm8': 'https://d8j0ntlcm91z4.cloudfront.net/user_3HwrSvHvv1xZKbOXkQBoi7JbcTp/hf_20260821_084053_3d6cbb10-3c79-4056-a608-07ef6f0104b3.png',
  'm9': 'https://d8j0ntlcm91z4.cloudfront.net/user_3HwrSvHvv1xZKbOXkQBoi7JbcTp/hf_20260821_084053_945e08dc-a3d2-4fa6-9bf8-4e7ea4974eb6.png',
  'm10': 'https://d8j0ntlcm91z4.cloudfront.net/user_3HwrSvHvv1xZKbOXkQBoi7JbcTp/hf_20260821_084054_b679dbda-6faa-4535-bdee-0716e06f6f87.png',
};

// Видеолар тайёр бўлганда шу обектга URL қўйиб қайта ишга тушади (борлари ўтказиб юборилади)
const VIDEOS = JSON.parse(fs.existsSync(path.join(import.meta.dirname, 'videos.json'))
  ? fs.readFileSync(path.join(import.meta.dirname, 'videos.json'), 'utf8') : '{}');

const dl = async (url, file) => {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  fs.writeFileSync(file, Buffer.from(await r.arrayBuffer()));
};

for (const [name, url] of Object.entries(IMAGES)) {
  const out = path.join(MED, name + '.jpg');
  if (fs.existsSync(out)) { console.log('skip', name); continue; }
  const tmp = path.join(MED, name + '.tmp.png');
  await dl(url, tmp);
  execFileSync('ffmpeg', ['-y', '-i', tmp, '-vf', 'scale=1920:-2', '-q:v', '4', out], { stdio: 'pipe' });
  fs.unlinkSync(tmp);
  console.log('✓', name + '.jpg', Math.round(fs.statSync(out).size / 1024) + 'KB');
}

for (const [name, url] of Object.entries(VIDEOS)) {
  const out = path.join(MED, name + '.mp4');
  if (fs.existsSync(out)) { console.log('skip', name); continue; }
  const tmp = path.join(MED, name + '.tmp.mp4');
  await dl(url, tmp);
  // 1280w, h264, аудиосиз, faststart — фон-видео учун енгил
  execFileSync('ffmpeg', ['-y', '-i', tmp, '-vf', 'scale=1280:-2', '-c:v', 'libx264', '-preset', 'slow', '-crf', '27', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', out], { stdio: 'pipe' });
  fs.unlinkSync(tmp);
  console.log('✓', name + '.mp4', Math.round(fs.statSync(out).size / 1024) + 'KB');
}
console.log('media тайёр');
