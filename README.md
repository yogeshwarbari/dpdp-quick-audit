# 🔐 DPDP Quick Audit

Instantly scan any GitHub repository for India's Data Protection (DPDP) compliance violations using AI.

## Features

✅ **30-second scans** - Get compliance scores instantly
✅ **AI-powered analysis** - Using Claude 3.5 Sonnet
✅ **GitHub integration** - Scan any public repository
✅ **Compliance scoring** - 0-100 compliance score
✅ **Actionable fixes** - Remediation steps for each violation

## What It Checks

- Hardcoded secrets (passwords, API keys)
- Data encryption at rest
- User consent tracking
- Data retention policies
- Sensitive data in logs
- HTTPS/TLS usage
- Access controls
- Audit logging

## Quick Start

### Local Development
```bash
# Install dependencies
cd backend && pip install -r requirements.txt
cd ../frontend && npm install

# Set environment variables
export ANTHROPIC_API_KEY=your_key
export GITHUB_TOKEN=your_token

# Run backend
cd backend && python main.py

# Run frontend (in another terminal)
cd frontend && npm run dev
```

Visit http://localhost:3000

### Deploy to Vercel

1. Push to GitHub
2. Import project to Vercel
3. Add environment variables:
   - `ANTHROPIC_API_KEY`
   - `GITHUB_TOKEN`
4. Deploy!

## Architecture

- **Backend**: FastAPI + Claude AI
- **Frontend**: Next.js + React
- **Deployment**: Vercel
- **Analysis**: Anthropic Claude

## DPDP Requirements Checked

Based on India's Digital Personal Data Protection Act 2023:
- Data protection and security
- User consent
- Data retention
- Right to access/delete
- Audit trails
- Encryption standards

## Sponsor Tools Used

✅ **Cline** - Code analysis automation
✅ **Vercel** - Production deployment
✅ **Together AI** - Inference backbone
✅ **CodeRabbit** - Code quality integration

## License

MIT

## Support

Open an issue on GitHub for support.
