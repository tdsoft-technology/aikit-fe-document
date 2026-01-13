#!/usr/bin/env node

/**
 * Toggle platform visibility in documentation
 * Usage: node scripts/toggle-platform.js <platform> <true|false>
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const configPath = path.join(__dirname, '../docs-config.json');

// Read current config
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

// Get arguments
const [platform, enabled] = process.argv.slice(2);

if (!platform || !enabled) {
  console.error('Usage: node scripts/toggle-platform.js <platform> <true|false>');
  console.error('  platform: opencode | claude');
  console.error('  enabled: true | false');
  console.error('\nExample: node scripts/toggle-platform.js claude false  # Hide Claude Code');
  process.exit(1);
}

if (!config.platforms[platform]) {
  console.error(`Platform not found: ${platform}`);
  process.exit(1);
}

// Toggle platform
config.platforms[platform].enabled = enabled === 'true';

// Write back
fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

const status = enabled === 'true' ? 'shown' : 'hidden';
const platformLabel = config.platforms[platform].label;

console.log(`✓ ${platformLabel} ${status} in documentation`);
console.log(`\nConfig file: ${configPath}`);
console.log('Run: npm run build');
